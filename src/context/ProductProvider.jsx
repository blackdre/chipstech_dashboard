import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { supabase } from "../supabase/client";
import { useAuth } from "./AuthProvider";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { user } = useAuth();

  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchBrands();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      toast.error("Error fetching products");
    } else {
      setProducts(data);
    }
  };

  const getProductById = async (productId) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (error) {
      toast.error("Error fetching product");
      return null;
    }

    return data;
  };

  const fetchBrands = async () => {
    const { data, error } = await supabase.from("brands").select("brand_name");
    if (!error) setBrands(data);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("categories").select("name");
    if (!error) setCategories(data);
  };

  const addProduct = async (product) => {
    let imageUrl = null;
    if (product.image) {
      const filePath = `${Date.now()}-${product.image.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from("products")
        .upload(filePath, product.image);
      if (uploadError) {
        toast.error("Image upload failed");
        return;
      }
      imageUrl = `${supabase.supabaseUrl}/storage/v1/object/public/products/${filePath}`;
    }

    const { data: newProduct, error } = await supabase
      .from("products")
      .insert([
        {
          name: product.name,
          description: product.description,
          image_url: imageUrl,
          price: product.price,
          quantity: product.quantity,
          brand: product.brand,
          category_name: product.category_name,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Insert Error:", error);
      toast.error("Error adding product");
    } else {
      setProducts((prev) => [...prev, newProduct]);
      toast.success("Product added successfully");
    }
  };

  const deleteProduct = async (productId) => {
    if (user) {
      const { error } = await supabase
        .from("products")
        .delete()
        .eq("id", productId);
      if (error) {
        toast.error("Error deleting product");
      } else {
        setProducts((prev) =>
          prev.filter((product) => product.id !== productId)
        );
        toast.success("Product deleted successfully");
      }
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        brands,
        categories,
        addProduct,
        deleteProduct,
        getProductById,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);

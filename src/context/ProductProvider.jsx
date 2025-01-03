import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { supabase } from "../supabase/client";
import { useAuth } from "./AuthProvider";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Error fetching products");
    } else {
      setProducts(data);
    }
    setLoading(false);
  };

  // Create a product
  const createProduct = async (product, imageFile) => {
    if (user) {
      try {
        setLoading(true);

        // Upload image if provided
        let imageUrl = null;
        if (imageFile) {
          const fileName = `${Date.now()}_${imageFile.name}`;
          const { data: uploadData, error: uploadError } =
            await supabase.storage
              .from("product-images")
              .upload(fileName, imageFile);

          if (uploadError) throw uploadError;
          imageUrl = `${supabase.storageUrl}/product-images/${fileName}`;
        }

        // Insert product
        const { data, error } = await supabase
          .from("products")
          .insert([{ ...product, image_url: imageUrl }]);

        if (error) throw error;

        setProducts((prev) => [data[0], ...prev]);
        toast.success("Product created successfully");
      } catch (error) {
        toast.error(error.message || "Error creating product");
      } finally {
        setLoading(false);
      }
    }
  };

  // Update a product
  const updateProduct = async (id, updatedProduct, imageFile) => {
    if (user) {
      try {
        setLoading(true);

        // Upload new image if provided
        let imageUrl = updatedProduct.image_url;
        if (imageFile) {
          const fileName = `${Date.now()}_${imageFile.name}`;
          const { data: uploadData, error: uploadError } =
            await supabase.storage
              .from("product-images")
              .upload(fileName, imageFile);

          if (uploadError) throw uploadError;
          imageUrl = `${supabase.storageUrl}/product-images/${fileName}`;
        }

        // Update product
        const { data, error } = await supabase
          .from("products")
          .update({ ...updatedProduct, image_url: imageUrl })
          .eq("id", id);

        if (error) throw error;

        setProducts((prev) =>
          prev.map((product) => (product.id === id ? data[0] : product))
        );
        toast.success("Product updated successfully");
      } catch (error) {
        toast.error(error.message || "Error updating product");
      } finally {
        setLoading(false);
      }
    }
  };

  // Delete a product
  const deleteProduct = async (id) => {
    if (user) {
      try {
        setLoading(true);
        const { error } = await supabase.from("products").delete().eq("id", id);

        if (error) throw error;

        setProducts((prev) => prev.filter((product) => product.id !== id));
        toast.success("Product deleted successfully");
      } catch (error) {
        toast.error(error.message || "Error deleting product");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        createProduct,
        updateProduct,
        deleteProduct,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};

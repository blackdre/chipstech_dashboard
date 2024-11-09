import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { toast } from "react-hot-toast";
import { useAuth } from "./AuthProvider";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);

    // if (user) {
    //   const { data, error } = await supabase.from("products").select(`*`);

    //   if (error) {
    //     toast.error("Failed to load products");
    //     console.error(error);
    //   } else {
    //     setProducts(data);
    //   }
    // }
    // setLoading(false);

    try {
      const { data, error } = await supabase.from("products").select(`*`);
      if (error) {
        toast.error("Failed to load products");
        console.error(error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load products");
      console.error(error);
    }
  };

  // Delete a product by its ID
  const deleteProduct = async (productId) => {
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", productId)
      .eq("user_id", supabase.auth.user().id); // Additional client-side check

    if (error) {
      toast.error("Failed to delete product");
      console.error(error);
    } else {
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      toast.success("Product deleted successfully");
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, loading, fetchProducts, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook for using the Products context
export const useProducts = () => {
  return useContext(ProductsContext);
};

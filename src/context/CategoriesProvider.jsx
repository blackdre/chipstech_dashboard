import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../supabase/client";
import { useAuth } from "./AuthProvider";

const CategoriesContext = createContext();

export const useCategories = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("categories").select("*");
    if (error) {
      console.error("Error fetching categories:", error);
    } else {
      setCategories(data);
    }
    setLoading(false);
  };

  const addCategory = async (name, description) => {
    if (user) {
      const { data: newCategory, error } = await supabase
        .from("categories")
        .insert([{ name, description }]);
      if (error) {
        console.error("Error adding category:", error);
      } else {
        setCategories([...categories, newCategory]);
      }
    }
  };

  const updateCategory = async (id, updatedCategory) => {
    if (user) {
      const { data, error } = await supabase
        .from("categories")
        .update(updatedCategory)
        .eq("id", id);
      if (error) {
        console.error("Error updating category:", error);
      } else {
        setCategories(categories.map((cat) => (cat.id === id ? data[0] : cat)));
      }
    }
  };

  const deleteCategory = async (id) => {
    if (user) {
      const { error } = await supabase.from("categories").delete().eq("id", id);
      if (error) {
        console.error("Error deleting category:", error);
      } else {
        setCategories(categories.filter((cat) => cat.id !== id));
      }
    }
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        loading,
        addCategory,
        updateCategory,
        deleteCategory,
      }}>
      {children}
    </CategoriesContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { supabase } from "../supabase/client";
import { useAuth } from "./AuthProvider";

const BrandsContext = createContext();

export const BrandsProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const { data, error } = await supabase.from("brands").select("*");
    if (error) {
      toast.error("Error fetching brands");
    } else {
      setBrands(data);
    }
  };

  const addBrand = async (brandName, brandImg) => {
    let brandImgUrl = null;
    if (brandImg) {
      const filePath = `${Date.now()}-${brandImg.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from("brands")
        .upload(filePath, brandImg);
      if (uploadError) {
        toast.error("Image upload failed");
        return;
      }
      brandImgUrl = `${supabase.supabaseUrl}/storage/v1/object/public/brands/${filePath}`;
    }

    const { data: newBrand, error } = await supabase
      .from("brands")
      .insert([{ brand_name: brandName, brand_img_url: brandImgUrl }])
      .select()
      .single();

    if (error) {
      toast.error("Error adding brand", error.message);
    } else {
      setBrands([...brands, newBrand]);
      toast.success("Brand added successfully");
    }
  };

  const deleteBrand = async (id) => {
    if (user) {
      const { error } = await supabase.from("brands").delete().eq("id", id);

      if (error) {
        toast.error("Error deleting brand");
      } else {
        setBrands((prevBrands) =>
          prevBrands.filter((brand) => brand.id !== id)
        );
        toast.success("Brand deleted successfully");
      }
    }
  };

  return (
    <BrandsContext.Provider value={{ brands, addBrand, deleteBrand }}>
      {children}
    </BrandsContext.Provider>
  );
};

export const useBrands = () => useContext(BrandsContext);

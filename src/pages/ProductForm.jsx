import { useState } from "react";
import { useProducts } from "../context/ProductProvider";

const ProductForm = () => {
  const { addProduct, brands, categories } = useProducts();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !brand || !category) return;
    await addProduct({
      name,
      description,
      image,
      price: parseFloat(price) || 0,
      quantity: parseInt(quantity, 10) || 1,
      brand,
      category_name: category,
    });
    setName("");
    setDescription("");
    setImage(null);
    setPrice("");
    setQuantity(1);
    setBrand("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Product Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}></textarea>
      <input
        type='file'
        accept='image/*'
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input
        type='number'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type='number'
        placeholder='Quantity'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <select value={brand} onChange={(e) => setBrand(e.target.value)} required>
        <option value=''>Select Brand</option>
        {brands.map((b) => (
          <option key={b.brand_name} value={b.brand_name}>
            {b.brand_name}
          </option>
        ))}
      </select>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required>
        <option value=''>Select Category</option>
        {categories.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      <button type='submit'>Add Product</button>
    </form>
  );
};

export default ProductForm;

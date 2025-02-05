import { useState } from "react";
import { useProducts } from "../context/ProductProvider";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

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
    window.location.href = "/products";
  };

  return (
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Add New Product</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Product Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  type='file'
                  accept='image/*'
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Quantity'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Brand</Form.Label>
                <Form.Select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required>
                  <option value=''>Select Brand</option>
                  {brands.map((b) => (
                    <option key={b.brand_name} value={b.brand_name}>
                      {b.brand_name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required>
                  <option value=''>Select Category</option>
                  {categories.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button type='submit'>Add Product</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductForm;

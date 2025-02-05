import { useState } from "react";
import { useProducts } from "../../context/ProductProvider";
import { Card, Col, Form, Row } from "react-bootstrap";

const AddProductForm = () => {
  const { createProduct, loading } = useProducts();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: 1,
    brand: "",
    category_name: "",
    is_active: true,
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(formData, imageFile);
    setFormData({
      name: "",
      description: "",
      price: "",
      quantity: 1,
      brand: "",
      category_name: "",
      is_active: true,
    });
    setImageFile(null);
  };

  return (
    <Row>
      <Col md={6}>
        <Card>
          <Card.Header>
            <Card.Title>Add New Product</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit} className='add-product-form'>
              <Form.Group>
                <Form.Label htmlFor='name'>Product Name:</Form.Label>
                <Form.Control
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div>
                <label htmlFor='description'>Description:</label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='price'>Price:</label>
                <input
                  type='number'
                  id='price'
                  name='price'
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor='quantity'>Quantity:</label>
                <input
                  type='number'
                  id='quantity'
                  name='quantity'
                  value={formData.quantity}
                  onChange={handleChange}
                  min='1'
                />
              </div>

              <div>
                <label htmlFor='brand'>Brand:</label>
                <input
                  type='text'
                  id='brand'
                  name='brand'
                  value={formData.brand}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='category_name'>Category:</label>
                <input
                  type='text'
                  id='category_name'
                  name='category_name'
                  value={formData.category_name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='is_active'>Is Active:</label>
                <input
                  type='checkbox'
                  id='is_active'
                  name='is_active'
                  checked={formData.is_active}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor='image'>Upload Image:</label>
                <input
                  type='file'
                  id='image'
                  accept='image/*'
                  onChange={handleImageChange}
                />
              </div>

              <button type='submit' disabled={loading}>
                {loading ? "Saving..." : "Add Product"}
              </button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddProductForm;

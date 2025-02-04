import { useState } from "react";
import { useBrands } from "../context/BrandsContext";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const BrandForm = () => {
  const { addBrand } = useBrands();
  const [brandName, setBrandName] = useState("");
  const [brandImg, setBrandImg] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!brandName) return;
    await addBrand(brandName, brandImg);
    setBrandName("");
    setBrandImg(null);
    window.location.reload();
  };

  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <h5>Add Brand</h5>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3 '>
                <Form.Label>Brand Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Brand Name'
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3 '>
                <Form.Label>Brand Image</Form.Label>
                <Form.Control
                  type='file'
                  onChange={(e) => setBrandImg(e.target.files[0])}
                  required
                />
              </Form.Group>

              <Button type='submit' className='col-auto'>
                Add Brand
              </Button>
            </Form>{" "}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BrandForm;

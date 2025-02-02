import { useState } from "react";
import { useBrands } from "../context/BrandsContext";
import { Card, Col, Row } from "react-bootstrap";

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
  };

  return (
    <Row>
      <Col>
        <Card>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Brand Name'
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              required
            />
            <input
              type='file'
              accept='image/*'
              onChange={(e) => setBrandImg(e.target.files[0])}
            />
            <button type='submit'>Add Brand</button>
          </form>
        </Card>
      </Col>
    </Row>
  );
};

export default BrandForm;

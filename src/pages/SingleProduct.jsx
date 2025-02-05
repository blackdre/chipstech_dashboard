import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductProvider";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const SingleProduct = () => {
  const { getProductById } = useProducts();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      if (data) {
        setProduct(data);
      }
    };

    fetchProduct();
  }, [id, getProductById]);

  if (!product) return <p>Loading...</p>;
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>
            <Card.Title>{product.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div>
              {product.image_url && (
                <img src={product.image_url} alt={product.name} width='200' />
              )}
              <h6>{product.description}</h6>
              <h6>Price: R{product.price}</h6>
              <h6>Quantity: {product.quantity}</h6>
              <h6>Brand: {product.brand}</h6>
              <h6>Category: {product.category_name}</h6>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default SingleProduct;

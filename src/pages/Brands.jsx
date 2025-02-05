import { Card, Col, Row } from "react-bootstrap";
import { useBrands } from "../context/BrandsContext";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import BrandForm from "./BrandForm";

const Brands = () => {
  const { brands, deleteBrand } = useBrands();

  return (
    <Row>
      <Col md={6} className='mx-auto'>
        <Card>
          <Card.Header className='d-flex justify-content-between align-items-center'>
            <h5>Brands</h5>
          </Card.Header>
          <Card.Body>
            <ul className='list-inline m-0 p-0'>
              {brands.map((brand) => (
                <li className='d-flex mb-4 align-items-center' key={brand.id}>
                  <div className='img-fluid bg-warning-subtle rounded-pill'></div>
                  <div className='ms-3 flex-grow-1'>
                    <h5>{brand.brand_name}</h5>
                  </div>
                  <div className='ms-3'>
                    <img src={brand.brand_img_url} width={100} />
                  </div>

                  <span className='m-1'></span>
                  <a
                    href='javascript:void(0);'
                    className='btn btn-outline-danger rounded-circle btn-icon btn-sm p-2'
                    onClick={() => deleteBrand(brand.id)}>
                    <span className='btn-inner'>
                      <FaTrashAlt />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <BrandForm />
      </Col>
    </Row>
  );
};
export default Brands;

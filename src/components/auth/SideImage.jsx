import { useContext } from "react";
import { Col } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";

const SideImage = () => {
  const { bgImage } = useContext(AppContext);
  return (
    <Col
      md={6}
      className='col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden'>
      <img
        src={bgImage}
        className='img-fluid gradient-main animated-scaleX'
        alt='images'
        style={{ minHeight: "100%" }}
      />
    </Col>
  );
};
export default SideImage;

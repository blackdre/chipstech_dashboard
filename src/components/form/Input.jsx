import { forwardRef } from "react";
import { Col, Form } from "react-bootstrap";

// Use forwardRef to pass ref from parent component
const Input = forwardRef(({ label, type, placeholder, as }, ref) => {
  return (
    <Col lg={12}>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control type={type} placeholder={placeholder} ref={ref} as={as} />
      </Form.Group>
    </Col>
  );
});
Input.displayName = "Input";
export default Input;

import { Button, Modal } from "react-bootstrap";
import Input from "../form/Input";

const ProductModal = ({ close }) => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input label={"name"} type={"text"} placeholder={"product name"} />
        <Input
          label={"description"}
          type={"textarea"}
          placeholder={"product name"}
        />
        <Input label={"price"} type={"text"} placeholder={"price"} />
        <Input label={"image"} type={"text"} placeholder={"product name"} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>
          Close
        </Button>
        <Button variant='primary' onClick={close}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};
export default ProductModal;

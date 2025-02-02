import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Input from "../form/Input";
import { useProducts } from "../../context/ProductProvider";

const ProductModal = ({ close }) => {
  const { createProduct } = useProducts();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    await createProduct(formData, imageFile);
    close();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          label={"name"}
          type={"text"}
          name='name'
          placeholder={"product name"}
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label={"description"}
          type={"textarea"}
          name='description'
          placeholder={"product description"}
          as={"textarea"}
          value={formData.description}
          onChange={handleChange}
        />
        <Input
          label={"price"}
          type={"text"}
          name='price'
          placeholder={"price"}
          value={formData.price}
          onChange={handleChange}
        />
        <Input
          label={"image"}
          type={"file"}
          name='image'
          placeholder={"product image"}
          onChange={handleFileChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
};

export default ProductModal;

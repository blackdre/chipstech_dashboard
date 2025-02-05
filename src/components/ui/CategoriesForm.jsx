import { Button, Form } from "react-bootstrap";
import { useCategories } from "../../context/CategoriesProvider";
import { useState } from "react";

const CategoriesForm = () => {
  const { addCategory } = useCategories();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(name, description);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Category Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Category'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Label>Category Details</Form.Label>
        <Form.Control
          as={"textarea"}
          type='text'
          placeholder='Enter email'
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          rows={10}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};
export default CategoriesForm;

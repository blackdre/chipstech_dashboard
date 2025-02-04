import { Button, Form } from "react-bootstrap";
import { useCategories } from "../../context/CategoriesProvider";

const CategoriesForm = () => {
  const { addCategory } = useCategories();
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const category = Object.fromEntries(formData);
    addCategory(category);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Category Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Category'
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Form.Label>Category Details</Form.Label>
        <Form.Control
          as={"textarea"}
          type='text'
          placeholder='Enter email'
          onChange={(e) => {
            handleChange(e);
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

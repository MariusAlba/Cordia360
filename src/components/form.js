import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';


function InputReadOnlyExample() {
  return (
    <Form.Control type="text" placeholder="Normal text" />
  );
};

function FormFileExample() {
  return (
    <>
     
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
     
    </>
  );
}

export {
    InputReadOnlyExample,
    FormFileExample,
  }

import Nav from 'react-bootstrap/Nav';

function ListExample() {
  return (
    <Nav className="fixed-bottom bg-body-secondary justify-content-center"  style={{ textAlign: 'center' }} expand="lg" > 
    <Nav  defaultActiveKey="/home" as="ul">
      <Nav.Item className = "mr-auto" as="li">
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
    </Nav>
  );
}

export default ListExample;
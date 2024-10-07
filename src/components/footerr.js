import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footerr() {
  return (
    <>
    <Container>
      <Row className="justify-content-md-center">
        <Col> 
        <Card className="" border="secondary" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Secondary Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    {/* <br /> */}
        <Col> 
        <Card className="" border="secondary" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Secondary Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
        <Col> 
        <Card className="" border="secondary" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Secondary Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    <br />
    <br />
  </>
  );
}

export default Footerr;
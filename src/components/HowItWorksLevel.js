import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ArrowRight } from 'react-bootstrap-icons';

function HowItWorks() {
  return (
    <Row xs={1} md={4} className="g-4" >
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="info">
            <Card.Img variant="top" src="https://placehold.jp/100x110.png" />
            <Card.Body>
              <Card.Title >Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default HowItWorks;
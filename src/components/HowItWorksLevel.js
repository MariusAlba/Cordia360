import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ArrowRight } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';

function HowItWorks() {
  return (
    <div>
    <h1>HOW IT WORKS</h1>
    <Row xs={1} md={4} className="g-4" >
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="info">
            <Card.Img variant="top" src="data:image/svg+xml,%3csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M18.75 17.5C18.4185 17.5 18.1005 17.6317 17.8661 17.8661C17.6317 18.1005 17.5 18.4185 17.5 18.75C17.5 19.0815 17.6317 19.3995 17.8661 19.6339C18.1005 19.8683 18.4185 20 18.75 20H31.25C31.5815 20 31.8995 19.8683 32.1339 19.6339C32.3683 19.3995 32.5 19.0815 32.5 18.75C32.5 18.4185 32.3683 18.1005 32.1339 17.8661C31.8995 17.6317 31.5815 17.5 31.25 17.5H18.75ZM18.75 32.5C18.4185 32.5 18.1005 32.6317 17.8661 32.8661C17.6317 33.1005 17.5 33.4185 17.5 33.75C17.5 34.0815 17.6317 34.3995 17.8661 34.6339C18.1005 34.8683 18.4185 35 18.75 35H23.75C24.0815 35 24.3995 34.8683 24.6339 34.6339C24.8683 34.3995 25 34.0815 25 33.75C25 33.4185 24.8683 33.1005 24.6339 32.8661C24.3995 32.6317 24.0815 32.5 23.75 32.5H18.75ZM16.25 5C15.9185 5 15.6005 5.1317 15.3661 5.36612C15.1317 5.60054 15 5.91848 15 6.25V7.5H13.75C12.7554 7.5 11.8016 7.89509 11.0983 8.59835C10.3951 9.30161 10 10.2554 10 11.25V41.25C10 42.2446 10.3951 43.1984 11.0983 43.9017C11.8016 44.6049 12.7554 45 13.75 45H28.4175C28.0063 44.2182 27.7284 43.3732 27.595 42.5H13.75C13.4185 42.5 13.1005 42.3683 12.8661 42.1339C12.6317 41.8995 12.5 41.5815 12.5 41.25V11.25C12.5 10.9185 12.6317 10.6005 12.8661 10.3661C13.1005 10.1317 13.4185 10 13.75 10H36.25C36.5815 10 36.8995 10.1317 37.1339 10.3661C37.3683 10.6005 37.5 10.9185 37.5 11.25V22.6025C38.3275 22.4636 39.1725 22.4636 40 22.6025V11.25C40 10.2554 39.6049 9.30161 38.9017 8.59835C38.1984 7.89509 37.2446 7.5 36.25 7.5H35V6.25C35 5.91848 34.8683 5.60054 34.6339 5.36612C34.3995 5.1317 34.0815 5 33.75 5C33.4185 5 33.1005 5.1317 32.8661 5.36612C32.6317 5.60054 32.5 5.91848 32.5 6.25V7.5H26.25V6.25C26.25 5.91848 26.1183 5.60054 25.8839 5.36612C25.6495 5.1317 25.3315 5 25 5C24.6685 5 24.3505 5.1317 24.1161 5.36612C23.8817 5.60054 23.75 5.91848 23.75 6.25V7.5H17.5V6.25C17.5 5.91848 17.3683 5.60054 17.1339 5.36612C16.8995 5.1317 16.5815 5 16.25 5ZM38.75 35C40.0761 35 41.3479 34.4732 42.2855 33.5355C43.2232 32.5979 43.75 31.3261 43.75 30C43.75 28.6739 43.2232 27.4022 42.2855 26.4645C41.3479 25.5268 40.0761 25 38.75 25C37.4239 25 36.1521 25.5268 35.2145 26.4645C34.2768 27.4022 33.75 28.6739 33.75 30C33.75 31.3261 34.2768 32.5979 35.2145 33.5355C36.1521 34.4732 37.4239 35 38.75 35ZM38.75 47.5C45 47.5 47.5 44.3625 47.5 41.25C47.5 40.2554 47.1049 39.3016 46.4016 38.5984C45.6984 37.8951 44.7446 37.5 43.75 37.5H33.75C32.7554 37.5 31.8016 37.8951 31.0983 38.5984C30.3951 39.3016 30 40.2554 30 41.25C30 44.375 32.5 47.5 38.75 47.5ZM18.75 25C18.4185 25 18.1005 25.1317 17.8661 25.3661C17.6317 25.6005 17.5 25.9185 17.5 26.25C17.5 26.5815 17.6317 26.8995 17.8661 27.1339C18.1005 27.3683 18.4185 27.5 18.75 27.5H27.5C27.8315 27.5 28.1495 27.3683 28.3839 27.1339C28.6183 26.8995 28.75 26.5815 28.75 26.25C28.75 25.9185 28.6183 25.6005 28.3839 25.3661C28.1495 25.1317 27.8315 25 27.5 25H18.75Z' fill='%2329889c'/%3e%3c/svg%3e" />
            <Card.Body>
              <Card.Title >Step 1</Card.Title>
              <Card.Text>
                The clinician based on the patient's documentation and test results onboard the patient.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="info">
            <Card.Img variant="top" src="https://placehold.jp/100x110.png" />
            <Card.Body>
              <Card.Title >Step 2</Card.Title>
              <Card.Text>
                The patient gets a personalized care plan assigned and gets access to the Cordia® app.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="info">
            <Card.Img variant="top" src="https://placehold.jp/100x110.png" />
            <Card.Body>
              <Card.Title >Step 3</Card.Title>
              <Card.Text>
                The patient follows the care plan and involves informal caregivers to monitor the disease.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
       {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card bg="info">
            <Card.Img variant="top" src="https://placehold.jp/100x110.png" />
            <Card.Body>
              <Card.Title >Step 4</Card.Title>
              <Card.Text>
                  The clinician reviews the patient's data and makes adjustments or recommendations as needed.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export default HowItWorks;
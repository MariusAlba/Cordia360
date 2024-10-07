import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function logoBrand() {
    return (
        <Container>
            <Navbar.Brand href="#home">
                <img
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Brand href="#home">Logo</Navbar.Brand>
            </Container>
    );
}
export default logoBrand;



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoBrand from './Logo';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
// import { NavLink } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Home from '../pages/home';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary Navbar">
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
            <Navbar.Brand href="#home">Cordia®</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink to="/home" style={{ textDecoration: 'none', paddingRight: 6 }}> Home  </NavLink>
            <NavLink to="/produ" style={{ textDecoration: 'none' }}> Products </NavLink>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <Nav.Link href="#pricing">Case Studies</Nav.Link>
          <Nav.Link href="#pricing">Podcasts</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Global Communaty of Cordia Clinicians</NavDropdown.Item>
              <NavDropdown title="Specialties and Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                   Doctor Registration Form
                </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">
                 Dietician Registration Form
                 </NavDropdown.Item>
              </NavDropdown>

              {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;


// function ColorSchemesExample() {
//   return (

//       <Navbar bg="light" data-bs-theme="light">
//         <Container >
//         <Navbar.Brand href="#home">
//                 <img
//                 src="/img/logo.svg"
//                 width="30"
//                 height="30"
//                 className="d-inline-block align-top"
//                 alt="logo"
//                 />
//             </Navbar.Brand>
//             <Navbar.Brand href="#home">Logo</Navbar.Brand>
//           <Nav className="me-auto" >
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Products</Nav.Link>
//             <Nav.Link href="#pricing">About Us</Nav.Link>
//             <Nav.Link href="#pricing">Case Studies</Nav.Link>
//             <Nav.Link href="#pricing">Podcasts</Nav.Link>
         
//           <NavDropdown title="More" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
             
//               <NavDropdown.Item href="#action/3.3">Our Global Communaty of Cordia Clinicians</NavDropdown.Item>
//               <NavDropdown title="Specialties and Services" id="collapsible-nav-dropdown">
            
//                 <NavDropdown.Item href="#action/3.2">
//                   Doctor Registration Form
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Dietician Registration Form
//                 </NavDropdown.Item>
                
//               </NavDropdown>
//               {/* <NavDropdown.Divider /> */}
//               {/* <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item> */}
//             </NavDropdown>
//             </Nav>
//         </Container>
//       </Navbar>
    
//   );
// }

// export default ColorSchemesExample;
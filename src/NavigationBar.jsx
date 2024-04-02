import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./assets/icons/logo.jpg";
import { useState } from "react";
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar
      fixed="top"
      expand="lg"
      variant="dark"
      style={
        expanded
          ? { backgroundColor: "black" }
          : { backgroundColor: "rgba(0,0,0,0.4)" }
      }
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/jacob-elbaz/" target="_blank"><img className="p_links" src={linkedin} alt="linkedin-icon" /></Nav.Link>
            <Nav.Link href="https://github.com/JacobElbaz" target="_blank"><img className="p_links" src={github} alt="github-icon" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

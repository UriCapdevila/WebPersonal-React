import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <Navbar.Brand href="#home">Uriel Capdevila</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#biografia">Biografía</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#education-experience">Educación y Experiencia</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <label className="switch" aria-label="Activar modo oscuro">
                <input type="checkbox" id="modeToggle" />
                <span className="slider"></span>
              </label>
              <span id="darkModeLabel">Modo oscuro</span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

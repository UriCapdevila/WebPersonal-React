import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = ({ theme, toggleTheme }) => {
  return (
    <Navbar 
      expand="lg" 
      sticky="top" 
      variant={theme === 'dark' ? 'dark' : 'light'}
      className={theme === 'light' ? 'navbar-custom-light' : 'bg-dark'}
    >
      <Container>
        <Navbar.Brand href="#home">Uriel Capdevila</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#biografia" className="mx-2">Biografía</Nav.Link>
            <Nav.Link href="#portfolio" className="mx-2">Portfolio</Nav.Link>
            <Nav.Link href="#education-experience" className="mx-2">Educación y Experiencia</Nav.Link>
            <Nav.Link href="#skills" className="mx-2">Habilidades</Nav.Link>
            <Button 
              onClick={toggleTheme} 
              className="btn-sm mx-2 theme-toggle-button">
              {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

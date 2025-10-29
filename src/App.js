import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Biography from './Biography';
import Portfolio from './Portfolio';
import EducationExperience from './EducationExperience';
import Skills from './Skills';
import ContactForm from './ContactForm';
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Uriel Capdevila</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#biografia">Biografía</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#education-experience">Educación y Experiencia</Nav.Link>
              <Nav.Link href="#skills">Habilidades</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Biography />
        <Portfolio />
        <EducationExperience />
        <Skills />
        <ContactForm />
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>&copy; 2024 Uriel Capdevila. Todos los derechos reservados.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;

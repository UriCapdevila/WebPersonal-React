import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const EducationExperience = () => {
  return (
    <section id="education-experience" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Educación y Experiencia</h2>
        <Row>
          <Col md={6}>
            <h3>Educación</h3>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Desarrollo Web Full Stack</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Plataforma de Coder-House</Card.Subtitle>
                <Card.Text>
                  Curso intensivo sobre desarrollo web, cubriendo tecnologías como HTML, CSS, JavaScript, React, Node.js y más.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <h3>Experiencia</h3>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Desarrollador Web Freelance</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">2023 - Presente</Card.Subtitle>
                <Card.Text>
                  Creación de sitios web y aplicaciones para clientes, enfocado en soluciones a medida y experiencias de usuario de alta calidad.
                </card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EducationExperience;

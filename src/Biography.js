import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Biography = () => {
  return (
    <section id="biografia" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image src="/images/profile-image.jpg" roundedCircle fluid className="profile-image" />
          </Col>
          <Col md={8}>
            <h2>Acerca de mi...</h2>
            <p>
              ¡Hola! Soy Uriel Capdevila, un apasionado desarrollador web con experiencia en la creación de aplicaciones web modernas y atractivas. Me especializo en tecnologías front-end como React y me encanta aprender cosas nuevas y enfrentar nuevos desafíos.
            </p>
            <div className="social-media my-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.png" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
            <Button href="/documentos/CV-Uriel-Capdevila.pdf" download className="btn-custom">
              Descargar CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Biography;

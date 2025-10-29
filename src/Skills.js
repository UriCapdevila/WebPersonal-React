import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'Bootstrap'
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Habilidades</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col key={index} md={3} className="mb-4">
              <Card className="card-skill">
                <Card.Body className="text-center">
                  <Card.Title>{skill}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;

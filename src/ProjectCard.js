import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgSrc, link }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="card-skill">
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button href={link} target="_blank" rel="noopener noreferrer" className="btn-custom">Ver proyecto</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;

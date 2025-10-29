import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './ProjectCard.css'; // Keep this for potential future custom styles

const ProjectCard = ({ title, description, imgSrc, link }) => {
  return (
    <Col md={4} className="mb-4">
      <Card className="text-white h-100 project-card-container">
        <Card.Img src={imgSrc} alt="Card image" className="h-100" style={{ objectFit: 'cover' }} />
        <Card.ImgOverlay className="project-card-overlay d-flex flex-column justify-content-end">
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button href={link} target="_blank" rel="noopener noreferrer" variant="light">Ver proyecto</Button>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default ProjectCard;

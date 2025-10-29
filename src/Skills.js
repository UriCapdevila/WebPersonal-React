import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Skills.css'; // We will create this file for custom styles

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", 
  "MongoDB", "SQL", "Git", "Java", "Python", "Scrum"
];

const Skills = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Habilidades</h2>
        <Row xs={2} md={3} lg={4} className="g-3">
          {skills.map((skill, index) => (
            <Col key={index}>
              <div className="card-skill text-center">
                {skill}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Skills;

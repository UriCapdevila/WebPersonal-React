import React from 'react';
import ProjectCard from './ProjectCard';
import { Button, Row } from 'react-bootstrap';

const projects = [
  { 
    title: "Proyecto 1", 
    description: "Descripción del proyecto 1", 
    imgSrc: "https://picsum.photos/seed/project1/300/200",
    link: "#" 
  },
  { 
    title: "Proyecto 2", 
    description: "Descripción del proyecto 2", 
    imgSrc: "https://picsum.photos/seed/project2/300/200",
    link: "#" 
  },
  { 
    title: "Proyecto 3", 
    description: "Descripción del proyecto 3", 
    imgSrc: "https://picsum.photos/seed/project3/300/200",
    link: "#" 
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title} 
              description={project.description} 
              imgSrc={project.imgSrc} 
              link={project.link} 
            />
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button href="https://github.com/tu-usuario" target="_blank" variant="primary">
            Ver portfolio completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

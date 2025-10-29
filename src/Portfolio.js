import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Una breve descripción de mi primer proyecto.',
    imgSrc: '/images/proyecto1.png',
    link: '#'
  },
  {
    title: 'Proyecto 2',
    description: 'Una breve descripción de mi segundo proyecto.',
    imgSrc: '/images/proyecto2.png',
    link: '#'
  },
  {
    title: 'Proyecto 3',
    description: 'Una breve descripción de mi tercer proyecto.',
    imgSrc: '/images/proyecto3.png',
    link: '#'
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Portfolio</h2>
        <Row>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

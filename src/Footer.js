import React from 'react';

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre mí</h5>
            <p>Apasionado estudiante en búsqueda de nuevos desafíos.</p>
          </div>
          <div className="col-md-4">
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#biografia">Biografía</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#education-experience">Educación y Experiencia</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: Uri_CapdevilaWRK@outlook.com</p>
          </div>
        </div>
        <div className="text-center mt-3">
          &copy; 2025 Uriel Capdevila. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

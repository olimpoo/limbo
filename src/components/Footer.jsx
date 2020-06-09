import React from 'react';
import '../assets/styles/Footer.scss';

const Footer = () => (
  <footer className="Footer">
    <div className="Footer__columns">
      <div className="Footer__column">
        <strong className="Footer__column-title">Limbo</strong>
        <a href="/" className="Footer__column-link">Nosotros</a>
        <a href="/" className="Footer__column-link">Mapa del sitio</a>
        <a href="/" className="Footer__column-link">Contacto</a>
        <a href="/" className="Footer__column-link">Publicidad</a>
      </div>
      <div className="Footer__column">
        <strong className="Footer__column-title">Aliados</strong>
        <a href="/" className="Footer__column-link">Inmobiliarias</a>
        <a href="/" className="Footer__column-link">Constructoras</a>
        <a href="/" className="Footer__column-link">Abogados</a>
      </div>
      <div className="Footer__column">
        <strong className="Footer__column-title">Paises</strong>
        <a href="/" className="Footer__column-link">Venezuela</a>
        <a href="/" className="Footer__column-link">México</a>
        <a href="/" className="Footer__column-link">Argentina</a>
        <a href="/" className="Footer__column-link">Chile</a>
      </div>
      <div className="Footer__column">
        <strong className="Footer__column-title">Síguenos</strong>
        <a href="/" className="Footer__column-link">
          <i class="fab fa-facebook mr-2"></i>Facebook
        </a>
        <a href="/" className="Footer__column-link">
          <i class="fab fa-twitter mr-2"></i>Twitter
        </a>
        <a href="/" className="Footer__column-link">
          <i class="fab fa-instagram mr-2"></i>Instagram
        </a>
        <a href="/" className="Footer__column-link">
          <i class="fab fa-linkedin mr-2"></i>Linkedin
        </a>
      </div>
    </div>
    <div className="Footer__copyright">
      <div className="Footer__copyright-policy">
        <a href="/" className="Footer__copyright-link">Términos y Condiciones</a>
        <span>© Copyright 2020 Limbo</span>
      </div>
      <span className="Footer__copyright-brand">
        Limbo es un producto de <a href="/" className="Footer__copyright-link">Olimpoo.com</a>
      </span>
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import '../assets/styles/Navbar.scss'

const Navbar = () => (
  <nav className="Navbar">
    <strong className="Navbar__logo">
      LIMBO
    </strong>
    <ul className="Navbar__menu">
      <li className="Navbar__menu-item">Comprar</li>
      <li className="Navbar__menu-item">Alquilar</li>
      <li className="Navbar__menu-item">Anunciar</li>
      <li className="Navbar__menu-item">Nosotros</li>
      <li className="Navbar__menu-item">Ayuda</li>
    </ul>
    <ul className="Navbar__menu">
      <li className="Navbar__menu-item">Sign In</li>
      <li className="Navbar__menu-item">Sign Up</li>
    </ul>
  </nav>
);

export default Navbar;
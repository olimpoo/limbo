import React from 'react';
import '../assets/styles/Navbar.scss'

const Navbar = () => (
  <nav className="Navbar bp3-navbar">
    <strong className="Navbar__logo bp3-navbar-heading">
      LIMBO
    </strong>
    <ul className="Navbar__menu bp3-navbar-group">
      <li className="Navbar__menu-item">Comprar</li>
      <li className="Navbar__menu-item">Alquilar</li>
      <li className="Navbar__menu-item">Anunciar</li>
      <li className="Navbar__menu-item">Nosotros</li>
      <li className="Navbar__menu-item">Ayuda</li>
    </ul>
    <ul className="Navbar__menu bp3-navbar-group">
      <li className="Navbar__menu-item">Sign In</li>
      <span class="bp3-navbar-divider"></span>
      <li className="Navbar__menu-item">Sign Up</li>
    </ul>
  </nav>
);

export default Navbar;
import React from 'react';
import '../assets/styles/Navbar.scss';
import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';

import logo from '../assets/images/brand.png'

const cities = ['Caracas', 'Sucre', 'Anzoategui', 'Zulia', 'Mérida', 'Aragua'];
const types = ['Apartamentos', 'Casas', 'Oficinas', 'Locales'];
const rooms = ['1 habitación', '2 a 3 habitaciones', 'Más de 5 habitaciones'];

const Navigation = () => (
  <Navbar expand='md' className='Navbar sticky-top'>
    <Navbar.Brand href='/' className='Navbar__brand'>
      <img src={logo} alt="brand"/> Limbo
    </Navbar.Brand>
    <Nav className='Navbar__menu'>
      <NavDropdown title='Comprar' className='Navbar__dropdown'>
        <Row className='Navbar__dropdown-container'>
          <Col>
            <Navbar.Text>Estado</Navbar.Text>
            {cities.map((city) => (
              <Nav.Link key={city} href="/propiedades" className='Navbar__dropdown-item'>{city}</Nav.Link>
            ))}
          </Col>
          <Col>
            <Navbar.Text>Tipo de propiedad</Navbar.Text>
            {types.map((type) => (
              <Nav.Link key={type} href="/propiedades" className='Navbar__dropdown-item'>{type}</Nav.Link>
            ))}
          </Col>
          <Col>
            <Navbar.Text>Habitaciones</Navbar.Text>
            {rooms.map((room) => (
              <Nav.Link key={room} href="/propiedades" className='Navbar__dropdown-item'>{room}</Nav.Link>
            ))}
          </Col>
        </Row>
      </NavDropdown>
      <NavDropdown title='Alquilar' className='Navbar__dropdown'>
      <Row className='Navbar__dropdown-container'>
          <Col>
            <Navbar.Text>Estado</Navbar.Text>
            {cities.map((city) => (
              <Nav.Link key={city} href="/propiedades" className='Navbar__dropdown-item'>{city}</Nav.Link>
            ))}
          </Col>
          <Col>
            <Navbar.Text>Tipo de propiedad</Navbar.Text>
            {types.map((type) => (
              <Nav.Link key={type} href="/propiedades" className='Navbar__dropdown-item'>{type}</Nav.Link>
            ))}
          </Col>
          <Col>
            <Navbar.Text>Habitaciones</Navbar.Text>
            {rooms.map((room) => (
              <Nav.Link key={room} href="/propiedades" className='Navbar__dropdown-item'>{room}</Nav.Link>
            ))}
          </Col>
        </Row>
      </NavDropdown>
      <NavDropdown title='Anunciar' className='Navbar__dropdown'>
      <Row className='Navbar__dropdown-container'>
          <Col>
            <Navbar.Text>Estado</Navbar.Text>
            {cities.map((city) => (
              <Nav.Link key={city} href="/propiedades" className='Navbar__dropdown-item'>{city}</Nav.Link>
            ))}
          </Col>
          <Col>
            <Navbar.Text>Tipo de propiedad</Navbar.Text>
            {types.map((type) => (
              <Nav.Link key={type} href="/propiedades" className='Navbar__dropdown-item'>{type}</Nav.Link>
            ))}
          </Col>
          <Col>
            <Navbar.Text>Habitaciones</Navbar.Text>
            {rooms.map((room) => (
              <Nav.Link key={room} href="/propiedades" className='Navbar__dropdown-item'>{room}</Nav.Link>
            ))}
          </Col>
        </Row>
      </NavDropdown>
      <Nav.Link className='Navbar__menu-item'>Nosotros</Nav.Link>
      <Nav.Link className='Navbar__menu-item'>Ayuda</Nav.Link>
    </Nav>
    <Nav className='Navbar__buttons'>
      <Nav.Link className='Navbar__buttons-button'>Ingresar</Nav.Link>
      <Nav.Link className='Navbar__buttons-button Navbar-cta'>Registrarse</Nav.Link>
      <Navbar.Toggle aria-controls='Navbar__menu-mobile' />
    </Nav>
    <Navbar.Collapse id='Navbar__menu-mobile'>
      <Nav>
        <Nav.Link href="/propiedades" className='Navbar__menu-item'>Comprar</Nav.Link>
        <Nav.Link href="/propiedades" className='Navbar__menu-item'>Alquilar</Nav.Link>
        <Nav.Link href="/propiedades" className='Navbar__menu-item'>Anunciar</Nav.Link>
        <Nav.Link href="/propiedades" className='Navbar__menu-item'>Nosotros</Nav.Link>
        <Nav.Link href="/propiedades" className='Navbar__menu-item'>Ayuda</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;

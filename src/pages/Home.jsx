import React from 'react';
// import { Link } from 'react-router-dom';
import HomeSearch from '../components/HomeSearch';
import '../assets/styles/Home.scss';

const featured = [
  'https://source.unsplash.com/300x200/?house',
  'https://source.unsplash.com/380x250/?house',
  'https://source.unsplash.com/400x266/?house',
  'https://source.unsplash.com/350x234/?house',
  'https://source.unsplash.com/375x250/?house',
  'https://source.unsplash.com/400x270/?house',
];

const bestDeals = [
  'https://source.unsplash.com/480x320/?house',
  'https://source.unsplash.com/350x250/?house',
  'https://source.unsplash.com/410x270/?house',
  'https://source.unsplash.com/350x236/?house',
  'https://source.unsplash.com/375x250/?house',
  'https://source.unsplash.com/350x240/?house',
  'https://source.unsplash.com/375x260/?house',
];


const Home = () => (
  <>
    <div className="Hero">
      <div className="Hero__content">
        <h1 className="Hero__content-heading">¿Perdido en el Limbo?</h1>
        <h3 className="Hero__content-text">Nosotros te ayudamos</h3>
        <div className="Hero__content__tabs">
          <span className={"Hero__content__tabs-tab"}>Quiero comprar</span>
          <span className="Hero__content__tabs-tab">Quiero alquilar</span>
        </div>
        <HomeSearch />
      </div>
    </div>
    <div className="Section">
      <h3 className="Section-title">Propiedades Destacadas</h3>
      <div className="Section__featured">
        { featured.map((image) => <img src={image} className="Section__featured-image" alt="Propiedad destacada"/>) }
      </div>
      <a href="/" className="Section-link">Explorar todas</a>
    </div>
    <div className="Section">
      <h3 className="Section-title">Mejores Ofertas</h3>
      <div className="Section__deals">
        { bestDeals.map((image) =>
          <img className="Section__deals-image" src={image} alt="Oferta destacada" />
        ) }
      </div>
      <a href="/" className="Section-link">Ver más ofertas</a>
    </div>
  </>
);

export default Home;
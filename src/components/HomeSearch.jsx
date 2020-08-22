import React from 'react';
import '../assets/styles/HomeSearch.scss';

const Layout = () => (
  <div className='Search'>
    <div className="Search__bar">
      <input type="text" className="Search__bar-input" placeholder="Buscar por ubicación"
       />
      <a href="/propiedades" className="Search__bar-button">
        <i className="fas fa-search mr-2"></i>Buscar
      </a>
    </div>
  </div>
);

export default Layout;

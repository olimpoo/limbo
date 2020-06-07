import React, { useState } from 'react';
import '../assets/styles/PropertyFilters.scss';

const Icons = [
  { name: 'Fotos', icon: 'camera' },
  { name: 'Videos', icon: 'video' },
  { name: 'Plano', icon: 'columns' },
  { name: 'Mapa', icon: 'map-marker-alt' },
  { name: '360', icon: 'globe' },
];

const Filters = ({ property }) => {
  const [active, setActive] = useState('Fotos');

  return (
    <div>
      <div className='PropertyFilters d-flex justify-content-between'>
        {Icons.map((icon, index) => (
          <div
            key={`carousel-item-${index}`}
            className={`d-flex align-items-center PropertyFilters__button ${
              active === icon.name ? 'PropertyFilters__button--active' : ''
            } `}
            onClick={() => setActive(icon.name)}
          >
            <i className={`fas fa-${icon.icon} pb-1`}></i>
            <span className='d-none d-md-block pl-1'>{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;

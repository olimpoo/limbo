import React, { useState } from 'react';
import '../assets/styles/PropertyFilters.scss';

const IconsNames = ['camera', 'video', 'columns', 'map-marker-alt', 'globe'];

const Filters = ({ property }) => {
  const [active, setActive] = useState('camera');

  return (
    <div>
      <div className='PropertyFilters d-flex justify-content-between'>
        {IconsNames.map((iconName, index) => (
          <i
            key={index}
            className={`fas fa-${iconName} PropertyFilters__button ${
              active === iconName ? 'PropertyFilters__button--active' : ''
            } `}
            onClick={() => setActive(iconName)}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default Filters;

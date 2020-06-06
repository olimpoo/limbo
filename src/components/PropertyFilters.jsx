import React, { useState } from 'react';
import { Icon } from '@blueprintjs/core';
import '../assets/styles/PropertyFilters.scss';

const IconsNames = [
  'camera',
  'mobile-video',
  'control',
  'map-marker',
  'globe-network',
];

const Filters = ({ property }) => {
  const [active, setActive] = useState('camera');

  return (
    <div>
      <div className='PropertyFilters d-flex justify-content-between'>
        {IconsNames.map((iconName) => (
          <Icon
            icon={iconName}
            iconSize={24}
            className={`PropertyFilters__button ${
              active === iconName ? 'PropertyFilters__button--active' : ''
            } `}
            onClick={() => setActive(iconName)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;

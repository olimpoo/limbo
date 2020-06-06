import React from 'react';
import '../assets/styles/PropertySlider.scss';

const Property = ({ images }) => (
  <div class='PropertySlider'>
    <img src={images[0]} alt='' />
  </div>
);

export default Property;

import React from 'react';
import Filters from '../components/PropertyFilters';
import Slider from '../components/PropertySlider';
import '../assets/styles/Property.scss';

const images = [
  'https://source.unsplash.com/1000x500/?house',
  'https://source.unsplash.com/800x400/?house',
  'https://source.unsplash.com/700x350/?house',
];

const property = {
  images,
  type: 'Casa',
  area: 400,
  rooms: 4,
  parkingLots: 5,
  sector: 'Cumbres de Curumo',
  parish: 'Cumbres de Curumo',
  municipality: 'Municipio Baruta',
};

const Property = (props) => (
  <div calssName='Property'>
    <Filters property={property}></Filters>
    <Slider images={property.images}></Slider>
    <div className='Property__container'>
      <div className='Property__header'>
        <h3>
          <b>
            {property.type} · {property.area} m2 · {property.rooms} Habitaciones
            ·{property.parkingLots} · Estacionamientos
          </b>
        </h3>
        <p>
          <b>{property.sector}</b>, {property.parish}, {property.municipality}
        </p>
      </div>
    </div>
  </div>
);

export default Property;

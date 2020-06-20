import React from 'react';

const PropertyDescription = ({ property }) => (
  <div className='my-2 Property__description'>
    <div>
      <h3 className='mb-2'>
        <b>{property.title}</b>
      </h3>
      <p>{property.description}</p>
      <div className='d-flex flex-wrap justify-content-center mt-3'>
        <div className='Property__description__icon p-2'>
          <div className='icon'>
            <i className='fas fa-place-of-worship'></i>
          </div>
          <p>
            <b>
              {Math.floor(property.area)}m<sup>2</sup>
            </b>
          </p>
          <p className='text-muted'>Superficie Total</p>
        </div>
        <div className='Property__description__icon p-2'>
          <div className='icon'>
            <i className='fas fa-gopuram'></i>
          </div>
          <p>
            <b>
              {Math.floor(property.area)}m<sup>2</sup>
            </b>
          </p>
          <p className='text-muted'>Superficie Construida</p>
        </div>
        <div className='Property__description__icon p-2'>
          <div className='icon'>
            <i className='fas fa-bath'></i>
          </div>
          <p>
            <b>{property.bathrooms}</b>
          </p>
          <p className='text-muted'>Baños</p>
        </div>
        <div className='Property__description__icon p-2'>
          <div className='icon'>
            <i className='fas fa-parking'></i>
          </div>
          <p>
            <b>{property.parkingLots / 2}</b>
          </p>
          <p className='text-muted'>Estacionamientos</p>
        </div>
        <div className='Property__description__icon p-2'>
          <div className='icon'>
            <i className='fas fa-parking'></i>
          </div>
          <p>
            <b>{property.rooms}</b>
          </p>
          <p className='text-muted'>Habitaciones</p>
        </div>
        <div className='Property__description__icon p-2'>
          <div className='icon'>
            <i className='fas fa-calendar-alt'></i>
          </div>
          <p>
            <b>{property.year}</b>
          </p>
          <p className='text-muted'>Years</p>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <h3>
        <b>Características Generales</b>
      </h3>
      <ul className='my-2'>
        <li>Jardín(es)</li>
        <li>Piscina</li>
        <li>Casa</li>
      </ul>
    </div>
    <hr />
    <div>
      <h3>
        <b>Servicios</b>
      </h3>
      <ul className='my-2'>
        <li>Internet/Wi-Fi</li>
        <li>Áreas verdes</li>
        <li>Línea blanca</li>
        <li>Línea telefónica</li>
        <li>Área de lavandería</li>
      </ul>
    </div>
    <hr />
    <div>
      <h3>
        <b>Cercanías</b>
      </h3>
      <ul className='my-2'>
        <li>Bancos</li>
        <li>Transp. Público</li>
        <li>Línea de Taxi</li>
        <li>Supermercado</li>
        <li>Farmacia</li>
        <li>Hospital</li>
        <li>Clínica</li>
        <li>Colegio</li>
        <li>Panadería</li>
      </ul>
    </div>
    <hr />
    <div>
      <h3>
        <b>Exteriores</b>
      </h3>
      <ul className='my-2'>
        <li>Árboles</li>
        <li>Bancos</li>
      </ul>
    </div>
    <hr />
    <div>
      <h3>
        <b>Ubicación</b>
      </h3>
      <div className='my-2'>
        <p>
          <b>{property.sector}</b>, {property.parish}, {property.municipality}
        </p>
      </div>
    </div>
    <hr />
    <div>
      <h3>
        <b>Datos del anunciante</b>
      </h3>
      <div className='my-2'>
        <div className='my-2'>
          <a className='text-info' href='/'>
            Jhon Doe
          </a>
        </div>
        <div>
          <a href='#'>Ver mas inmuebles</a>
        </div>
        <p>
          <b>Cód. del anunciante:</b>1A2B3C
        </p>
        <p>
          <b>Cód. Limbo:</b>3A2B1C
        </p>
        <p className='text-muted'>Publicado hace 242 días</p>
      </div>
    </div>
  </div>
);

export default PropertyDescription;

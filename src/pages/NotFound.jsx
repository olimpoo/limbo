import React from 'react';
import { Link } from 'react-router-dom';

// styles
import '../assets/styles/NotFound.scss';

// images
import error404 from '../assets/images/404.png';

const NotFound = () => (
  <div className='NotFound'>
    <div className='text-center'>
      <div>
        <img
          className='img-fluid'
          src={error404}
          alt='Conference Logo'
          style={{ maxHeight: '400px' }}
        />
      </div>
      <div className='mt-3 text-white'>
        <h1>No pudimos encontrar lo que buscabas</h1>
      </div>
      <div className='mt-3'>
        <Link to='/' className='btn btn-primary'>
          Ir a la página principal
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;

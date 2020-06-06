import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    Pàge Not found
    <Link to='/' className='btn btn-primary'>
      &nbsp;Go to the homepage
    </Link>
  </div>
);

export default NotFound;

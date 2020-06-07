import React from 'react';
import Navbar from './Navbar';
import '../assets/styles/Layout.scss';

const Layout = ({ children }) => (
  <div className='Layout'>
    <Navbar />
    {children}
  </div>
);

export default Layout;

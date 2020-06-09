import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/styles/Layout.scss';

const Layout = ({ children }) => (
  <div className='Layout'>
    <Navbar />
      {children}
    <Footer />
  </div>
);

export default Layout;

import React from 'react';
import Navbar from './Navbar'
import '../assets/styles/Layout.scss'

const Layout = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
);

export default Layout;

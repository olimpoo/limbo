import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../assets/styles/Layout.scss'
import Navbar from './Navbar'

const Layout = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
);

export default Layout;

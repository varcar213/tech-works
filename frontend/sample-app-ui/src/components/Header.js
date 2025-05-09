import React from 'react';
import '../styles/Header.scss';

const Header = () => (
  <header className="header">
    <div className="logo">Sahasra Synergy</div>
    <nav>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;

import React, { useState } from 'react';
import '../styles/Sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2 className="sidebar-title">Menu</h2>
        <ul className="sidebar-links">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;

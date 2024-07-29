import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>Logo</h1>
      </div>
      <ul className="sidebar-menu">
        <li>Upload Newspaper</li>
        <li>Dashboard</li>
      </ul>
    </div>
  );
};

export default Sidebar;

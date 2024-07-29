import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Admin.css';

const Admin = () => {
  return (
    <div className="admin-layout">
      <Navbar />
      <div className="admin-body">
        <Sidebar />
        <div className="admin-content">
          <h1>Admin Dashboard</h1>
          <div className="upload-section">
            <h2>Upload Newspaper</h2>
            <input type="date" />
            <input type="text" placeholder="Location" />
            <button>Upload</button>
          </div>
          <div className="charts-section">
            <h2>Charts</h2>
            {/* Placeholder for charts */}
          </div>
          <div className="tables-section">
            <h2>Tables</h2>
            {/* Placeholder for tables */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

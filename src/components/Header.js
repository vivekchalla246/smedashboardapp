import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Productivity Dashboard</h1>
      <nav>
        <Link to="/">Home</Link>
        {/* Add more links here as needed */}
      </nav>
    </header>
  );
};

export default Header;
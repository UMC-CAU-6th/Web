import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-menu">UMC Movie</Link>
      </div>
      <div className="navbar-nav">
        <Link to="/popular" className="navbar-menu">Popular</Link>
        <Link to="/nowplaying" className="navbar-menu">Now Playing</Link>
        <Link to="/toprated" className="navbar-menu">Top Rated</Link>
        <Link to="/upcoming" className="navbar-menu">Up Coming</Link>
      </div>
    </nav>
  );
};

export default Navbar;

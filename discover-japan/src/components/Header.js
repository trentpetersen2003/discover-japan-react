import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cherryBlossomImg from '../assets/images/cherry_blossom.jpg';
import profileImg from '../assets/images/profile_icon.jpg';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the navigation menu visibility
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={cherryBlossomImg} alt="Website Logo" />
        </div>
        <h1>Discover Japan</h1>
        <div className="profile">
          <img src={profileImg} alt="User Profile Image" />
          <span>tpetersen</span>
        </div>
        <button className="toggle-btn" onClick={handleToggleMenu}>
          &#9776;
        </button>
      </div>
      <nav>
        <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
          <li>
            <Link to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/destinations" className={({ isActive }) => (isActive ? 'active' : '')}>
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/cultural-experiences" className={({ isActive }) => (isActive ? 'active' : '')}>
              Cultural Experiences
            </Link>
          </li>
          <li>
            <Link to="/cuisine" className={({ isActive }) => (isActive ? 'active' : '')}>
              Cuisine
            </Link>
          </li>
          <li>
            <Link to="/travel-tips" className={({ isActive }) => (isActive ? 'active' : '')}>
              Travel Tips
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

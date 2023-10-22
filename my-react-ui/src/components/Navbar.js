import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/classroom">Classroom</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/cafeteria">Cafeteria</Link>
        </li>
        <li>
          <Link to="/places">Places</Link>
        </li>
      </ul>
    </nav>
    );
  }
  
  export default Navbar;
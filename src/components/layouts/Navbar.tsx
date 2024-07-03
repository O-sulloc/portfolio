import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <a className="nav-logo">
          <p>light</p>
          <p>lang</p>
        </a>
        <div>
          <ul className="nav-path">
            <li>home</li>
            <li>stack</li>
            <li>project</li>
            <li>experience</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
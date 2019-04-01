import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => (
  <nav className="navigation-toolbar">
    <ul>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

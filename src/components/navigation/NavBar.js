import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ numOfSelectedProducts }) => (
  <nav className="navigation-toolbar">
    <ul>
      <li>
        <Link to="/">Products</Link>
      </li>
      <li>
        <Link to="/cart">Cart ({numOfSelectedProducts})</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

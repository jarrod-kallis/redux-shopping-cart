import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navigation-toolbar" data-cy="navigation-toolbar">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active-link">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active-link">
              Cart ({this.props.numOfSelectedProducts})
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  numOfSelectedProducts: state.cart.totalNumOfProductsSelected
});

export default connect(mapStateToProps)(NavBar);

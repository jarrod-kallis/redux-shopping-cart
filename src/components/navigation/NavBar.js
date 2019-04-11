import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav
        className="navigation-toolbar"
        data-cy="navigation-toolbar"
        style={{ backgroundColor: this.props.randomColour }}
      >
        <ul>
          <li>
            <NavLink to="/products" activeClassName="active-link">
              Products Maintenance{' '}
              <span role="img" aria-label="unicorn">
                &#x1F984; 🤗
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact activeClassName="active-link">
              Products{' '}
              <span role="img" aria-label="coconut">
                &#x1F965;
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active-link">
              Cart ({this.props.numOfSelectedProducts}) 💖
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

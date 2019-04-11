import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavBar.css';

import RandomBoxShadowColour from '../hoc/RandomBoxShadowColour';

class NavBar extends React.Component {
  activeStyle = {
    padding: '5px',
    boxShadow: `5px 5px 10px ${this.props.rgbaColour}`,
    display: 'inline-block',
    transform: 'rotate(-5deg)',
    '-webkit-backface-visibility': 'hidden'
  };

  render() {
    return (
      <nav
        className="navigation-toolbar"
        data-cy="navigation-toolbar"
        style={{
          backgroundColor: this.props.randomColour
        }}
      >
        <ul>
          <li>
            <NavLink
              to="/products"
              activeClassName="active-link"
              activeStyle={this.activeStyle}
            >
              Products Maintenance{' '}
              <span role="img" aria-label="unicorn">
                &#x1F984; 🤗
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active-link"
              activeStyle={this.activeStyle}
            >
              Products{' '}
              <span role="img" aria-label="coconut">
                &#x1F965;
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              activeClassName="active-link"
              activeStyle={this.activeStyle}
            >
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

export default connect(mapStateToProps)(RandomBoxShadowColour(NavBar));

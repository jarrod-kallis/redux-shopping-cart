import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navigation-toolbar">
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({this.props.numOfSelectedProducts})</Link>
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

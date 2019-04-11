import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import NavBar from './components/navigation/NavBar';
import Products from './components/product/Products';
import Cart from './components/cart/Cart';
import { get as getProducts } from './actions/productActions';
import { get as getCart, add as addToCart } from './actions/cartActions';
import ProductPage from './components/forms/ProductPage';

import RandomColour from './components/hoc/RandomColour';

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <RandomColour>
              <NavBar />
            </RandomColour>
          </header>
          <main>
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Products
                    click={product => this.props.addToCart(product.id)}
                  />
                )}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/products" exact component={ProductPage} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { getProducts, getCart, addToCart }
)(App);

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import NavBar from './components/navigation/NavBar';
import Products from './components/product/Products';
import Cart from './components/cart/Cart';
import { get as getProducts } from './actions/productActions';

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={Products} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { getProducts }
)(App);

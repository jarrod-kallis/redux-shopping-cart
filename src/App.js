import React, { Component } from 'react';

import './App.css';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/product/Products';
import Cart from './components/cart/Cart';

class App extends Component {
  state = {
    selectedProducts: []
  }

  addToCart = (product) => {
    this.setState((state) => ({
      selectedProducts: state.selectedProducts.concat(product)
    }));
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
              <Route path="/" exact render={(routeProps) => {
                return <Products click={this.addToCart} />
              }} />
              <Route path="/cart" render={(routeProps) => {
                return <Cart products={this.state.selectedProducts} />
              }} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

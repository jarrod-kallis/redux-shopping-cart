import React, { Component } from 'react';

import './App.css';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './components/product/Products';
import Cart from './components/cart/Cart';

class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Product 1',
        displayPrice: 'R13.99',
        price: 13.99,
        quantity: 0
      },
      {
        id: 2,
        name: 'Product 2',
        displayPrice: 'R200.00',
        price: 200,
        quantity: 0
      },
      {
        id: 3,
        name: 'Product 3',
        displayPrice: 'R20000.00',
        price: 20000,
        quantity: 0
      }
    ],
    selectedProducts: [],
    totalNumOfProductsSelected: 0
  };

  addToCart = product => {
    const selectedProducts = [...this.state.selectedProducts];
    let productIndex = this.state.selectedProducts.findIndex(
      p => p.id === product.id
    );

    if (productIndex === -1) {
      productIndex = selectedProducts.push(product) - 1;
    }

    selectedProducts[productIndex].quantity++;

    const totalNumOfProductsSelected = selectedProducts.reduce(
      (qty, product) => qty + product.quantity,
      0
    );

    setTimeout(() => {
      this.setState(state => ({
        selectedProducts,
        totalNumOfProductsSelected
      }));
    }, 250);
  };

  removeFromCart = product => {
    const selectedProducts = [...this.state.selectedProducts];
    let productIndex = this.state.selectedProducts.findIndex(
      p => p.id === product.id
    );

    selectedProducts[productIndex].quantity--;

    if (selectedProducts[productIndex].quantity <= 0) {
      selectedProducts.splice(productIndex, 1);
    }

    const totalNumOfProductsSelected = selectedProducts.reduce(
      (qty, product) => qty + product.quantity,
      0
    );

    setTimeout(() => {
      this.setState(state => ({
        selectedProducts,
        totalNumOfProductsSelected
      }));
    }, 250);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <NavBar
              numOfSelectedProducts={this.state.totalNumOfProductsSelected}
            />
          </header>
          <main>
            <Switch>
              <Route
                path="/"
                exact
                render={routeProps => {
                  return (
                    <Products
                      products={this.state.products}
                      click={this.addToCart}
                    />
                  );
                }}
              />
              <Route
                path="/cart"
                render={routeProps => {
                  return (
                    <Cart
                      products={this.state.selectedProducts}
                      click={this.removeFromCart}
                    />
                  );
                }}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;

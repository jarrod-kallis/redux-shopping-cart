import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

import NavBar from './components/navigation/NavBar';
import Products from './components/product/Products';
import Cart from './components/cart/Cart';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header>
              <NavBar />
            </header>
            <main>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={routeProps => {
                    return <Products />;
                  }}
                />
                <Route
                  path="/cart"
                  render={routeProps => {
                    return <Cart />;
                  }}
                />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers/rootReducer';

it('renders without crashing', () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  const div = document.createElement('root');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
});

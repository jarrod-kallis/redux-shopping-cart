import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  form: formReducer
});

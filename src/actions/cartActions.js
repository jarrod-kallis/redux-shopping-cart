import { ADD_TO_CART, REMOVE_FROM_CART } from '../reducers/cartReducer';
import api from '../api';

export const addToCart = product => {
  return async dispatch => {
    await api.cart.add(product);
    dispatch({ type: ADD_TO_CART, product });

    // setTimeout(() => {
    //   dispatch({ type: ADD_TO_CART, product });
    // }, 250);
  };
};

export const removeFromCart = product => dispatch =>
  setTimeout(() => dispatch({ type: REMOVE_FROM_CART, product }), 250);

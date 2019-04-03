import api from '../api';
import { PRODUCTS_LOADING } from './productActions';

export const CART_LOADING = 'CART_LOADING';
export const GOT_CART = 'GOT_CART';
export const ADDED_TO_CART = 'ADDED_TO_CART';
export const REMOVED_FROM_CART = 'REMOVED_FROM_CART';

export const get = () => {
  return dispatch => {
    dispatch({ type: CART_LOADING });
    api.cart.get().then(products => {
      dispatch({ type: GOT_CART, products });
    });
  };
};

export const add = productId => {
  return async dispatch => {
    dispatch({ type: PRODUCTS_LOADING });
    const products = await api.cart.add(productId);
    dispatch({ type: ADDED_TO_CART, products });
  };
};

export const remove = product => dispatch => {
  dispatch({ type: CART_LOADING });
  api.cart.remove(product).then(products => {
    dispatch({ type: REMOVED_FROM_CART, products });
  });
  // setTimeout(() => dispatch({ type: REMOVE_FROM_CART, product }), 250);
};

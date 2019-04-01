import { ADD_TO_CART, REMOVE_FROM_CART } from '../reducers/cartReducer';

export const addToCart = product => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ADD_TO_CART, product });
    }, 250);
  };
};

export const removeFromCart = product => dispatch =>
  setTimeout(() => dispatch({ type: REMOVE_FROM_CART, product }), 250);

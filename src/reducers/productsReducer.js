import {
  PRODUCTS_LOADING,
  PRODUCTS_RETRIEVED
} from '../actions/productActions';
import { ADDED_TO_CART } from '../actions/cartActions';

const INITIAL_STATE = {
  products: [],
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADDED_TO_CART:
      return {
        ...state,
        loading: false
      };
    case PRODUCTS_RETRIEVED:
      return {
        products: [...action.products],
        loading: false
      };
    default:
      return state;
  }
};

import {
  PRODUCTS_LOADING,
  PRODUCTS_RETRIEVED,
  PRODUCTS_ERROR
} from '../actions/productActions';
import { ADDED_TO_CART } from '../actions/cartActions';

const INITIAL_STATE = {
  products: [],
  loading: false,
  error: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case ADDED_TO_CART:
      return {
        ...state,
        loading: false,
        error: false
      };
    case PRODUCTS_RETRIEVED:
      return {
        products: [...action.products],
        loading: false,
        error: false
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

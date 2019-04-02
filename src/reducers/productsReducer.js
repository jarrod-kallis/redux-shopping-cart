import { PRODUCTS_RETRIEVED, RETRIEVING_PRODUCTS } from '../actions/productActions';

const INITIAL_STATE = {
  products: [],
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVING_PRODUCTS:
      return {
        ...state,
        loading: true
      }
    case PRODUCTS_RETRIEVED:
      return {
        products: [...action.products],
        loading: false
      }
    default:
      return state;
  }
};

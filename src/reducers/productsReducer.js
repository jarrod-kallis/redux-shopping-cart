import { PRODUCTS_RETRIEVED } from '../actions/productActions';

export default (state = [], action) => {
  switch (action.type) {
    case PRODUCTS_RETRIEVED:
      return [...action.products];
    default:
      return state;
  }
};

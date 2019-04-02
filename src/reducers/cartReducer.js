import {
  CART_LOADING,
  GOT_CART,
  ADDED_TO_CART,
  REMOVED_FROM_CART
} from '../actions/cartActions';

const INITIAL_STATE = {
  selectedProducts: [],
  totalNumOfProductsSelected: 0,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_LOADING:
      return {
        ...state,
        loading: true
      };
    case GOT_CART:
    case ADDED_TO_CART:
    case REMOVED_FROM_CART:
      return {
        selectedProducts: action.products,
        totalNumOfProductsSelected: action.products.reduce(
          (qty, product) => qty + product.quantity,
          0
        ),
        loading: false
      };
    default:
      return state;
  }
};

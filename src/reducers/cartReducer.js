export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const INITIAL_STATE = {
  selectedProducts: [],
  totalNumOfProductsSelected: 0
};

export default (state = INITIAL_STATE, action) => {
  let selectedProducts;
  let productIndex;

  switch (action.type) {
    case ADD_TO_CART:
      selectedProducts = [...state.selectedProducts];
      productIndex = state.selectedProducts.findIndex(
        p => p.id === action.product.id
      );

      if (productIndex === -1) {
        productIndex = selectedProducts.push(action.product) - 1;
      }

      selectedProducts[productIndex].quantity++;

      return {
        selectedProducts,
        totalNumOfProductsSelected: selectedProducts.reduce(
          (qty, product) => qty + product.quantity,
          0
        )
      };
    case REMOVE_FROM_CART:
      selectedProducts = [...state.selectedProducts];
      productIndex = state.selectedProducts.findIndex(
        p => p.id === action.product.id
      );

      selectedProducts[productIndex].quantity--;

      if (selectedProducts[productIndex].quantity <= 0) {
        selectedProducts.splice(productIndex, 1);
      }

      return {
        selectedProducts,
        totalNumOfProductsSelected: selectedProducts.reduce(
          (qty, product) => qty + product.quantity,
          0
        )
      };
    default:
      return state;
  }
};

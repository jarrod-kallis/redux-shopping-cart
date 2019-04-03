import { createSelector } from 'reselect';

const getProductsInCart = state => state.cart.selectedProducts;

const getProducts = state =>
  state.products.products.reduce((o, product) => {
    return { ...o, [product.id]: product };
  }, {});

export const getSelectedProducts = createSelector(
  [getProducts, getProductsInCart],
  (products, cartProducts) => {
    const selectedProducts = cartProducts.map(cartProduct => ({
      ...products[cartProduct.id],
      ...cartProduct
    }));

    return selectedProducts;
  }
);

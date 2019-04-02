import api from '../api';

export const PRODUCTS_RETRIEVED = 'PRODUCTS_RETRIEVED';
export const RETRIEVING_PRODUCTS = 'RETRIEVING_PRODUCTS';

export const retrievingProducts = () => ({
  type: RETRIEVING_PRODUCTS
});

export const productsRetrieved = (products) => ({
  type: PRODUCTS_RETRIEVED,
  products
});

export const get = () => async dispatch => {
  dispatch(retrievingProducts());
  try {
    const products = await api.products.get();
    dispatch(productsRetrieved(products));
  }
  catch (err) {
    return console.log(err);
  }
}

import api from '../api';

export const PRODUCTS_LOADING = 'PRODUCTS_LOADING';
export const PRODUCTS_RETRIEVED = 'PRODUCTS_RETRIEVED';

export const productsRetrieved = products => ({
  type: PRODUCTS_RETRIEVED,
  products
});

export const get = () => async dispatch => {
  dispatch({ type: PRODUCTS_LOADING });
  try {
    const products = await api.products.get();
    dispatch(productsRetrieved(products));
  } catch (err) {
    return console.log(err);
  }
};

export const addUpdate = product => async dispatch => {
  dispatch({ type: PRODUCTS_LOADING });
  try {
    const products = await api.products.add(product);
    dispatch(productsRetrieved(products));
  } catch (err) {
    return console.log(err);
  }
};

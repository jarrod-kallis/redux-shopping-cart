import api from '../api';

export const PRODUCTS_LOADING = 'PRODUCTS_LOADING';
export const PRODUCTS_RETRIEVED = 'PRODUCTS_RETRIEVED';
export const PRODUCTS_ERROR = 'PRODUCTS_ERROR';

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
    const products = await api.product.add(product);
    dispatch(productsRetrieved(products));
  } catch (err) {
    return console.log(err);
  }
};

export const remove = productId => async dispatch => {
  dispatch({ type: PRODUCTS_LOADING });
  try {
    const products = await api.product.delete(productId);
    dispatch(productsRetrieved(products));
  } catch (err) {
    dispatch({ type: PRODUCTS_ERROR });
    return console.log(err);
  }
};

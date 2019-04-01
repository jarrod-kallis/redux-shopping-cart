export const PRODUCTS_RETRIEVED = 'PRODUCTS_RETRIEVED';

const PRODUCTS = [
  {
    id: 1,
    name: 'Product 1',
    displayPrice: 'R13.99',
    price: 13.99,
    quantity: 0
  },
  {
    id: 2,
    name: 'Product 2',
    displayPrice: 'R200.00',
    price: 200,
    quantity: 0
  },
  {
    id: 3,
    name: 'Product 3',
    displayPrice: 'R20000.00',
    price: 20000,
    quantity: 0
  }
];

export const productsRetrieved = () => ({
  type: PRODUCTS_RETRIEVED,
  products: PRODUCTS
});

export const get = () => dispatch =>
  setTimeout(() => dispatch(productsRetrieved()), 1000);

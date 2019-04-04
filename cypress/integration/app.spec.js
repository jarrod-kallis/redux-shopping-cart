import {
  goto,
  getNavBar,
  getEmptyCart,
  CART_URL,
  EMPTY_CART_MSG,
  clickFirstProduct
} from '../support/index';

describe('Shopping Cart Application', () => {
  it('Shows the navigation bar', () => {
    goto('/');
    getNavBar().contains('Products');
    getNavBar().contains('Cart');
  });

  it('Adds & removes a product from the cart', () => {
    goto('/');
    clickFirstProduct();
    getNavBar().contains('Cart (1)');

    goto(CART_URL);
    clickFirstProduct();
    getNavBar().contains('Cart (0)');
    getEmptyCart().contains(EMPTY_CART_MSG);
  });

  it('Adds & removes 2 products from the cart', () => {
    goto('/');
    clickFirstProduct();
    clickFirstProduct();
    getNavBar().contains('Cart (2)');

    goto(CART_URL);
    clickFirstProduct();
    getNavBar().contains('Cart (1)');

    clickFirstProduct();
    getNavBar().contains('Cart (0)');

    getEmptyCart().contains(EMPTY_CART_MSG);
  });
});

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

export const CART_URL = '/cart';
export const EMPTY_CART_MSG = 'There are no items in your cart';

export const goto = url => cy.visit(url);
export const getNavBar = () => cy.get('[data-cy=navigation-toolbar]');
const getProduct = () => cy.get('[data-cy=product]');
export const getEmptyCart = () => cy.get('[data-cy=cart-empty]');

export const clickFirstProduct = () =>
  getProduct()
    .first()
    .click();

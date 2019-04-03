describe('Shopping Cart Application', () => {
  it('Shows the navigation bar', () => {
    cy.visit('/');
    cy.get('[data-cy=navigation-toolbar]').contains('Product');
    cy.get('[data-cy=navigation-toolbar]').contains('Cart');
  });

  it('Adds & removes a product from the cart', () => {
    cy.visit('/');
    cy.get('[data-cy=product]')
      .first()
      .click();
    cy.get('[data-cy=navigation-toolbar]').contains('Cart (1)');

    cy.visit('/cart');
    cy.get('[data-cy=product]')
      .first()
      .click();
    cy.get('[data-cy=navigation-toolbar]').contains('Cart (0)');
    cy.get('[data-cy=cart-empty]').contains('There are no items in your cart');
  });

  it('Adds & removes 2 products from the cart', () => {
    cy.visit('/');
    cy.get('[data-cy=product]')
      .first()
      .click();
    cy.get('[data-cy=product]')
      .first()
      .click();
    cy.get('[data-cy=navigation-toolbar]').contains('Cart (2)');

    cy.visit('/cart');
    cy.get('[data-cy=product]')
      .first()
      .click();
    cy.get('[data-cy=navigation-toolbar]').contains('Cart (1)');

    cy.get('[data-cy=product]')
      .first()
      .click();
    cy.get('[data-cy=navigation-toolbar]').contains('Cart (0)');

    cy.get('[data-cy=cart-empty]').contains('There are no items in your cart');
  });
});

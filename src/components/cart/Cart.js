import React from 'react';

import Product from '../product/Product';

const Cart = ({ products, click }) => {
  let productsDOM;

  if (products.length === 0) {
    productsDOM = <span>There are no items in your cart</span>;
  } else {
    productsDOM = products.map(product => (
      <Product
        key={product.id}
        name={product.name}
        price={product.displayPrice}
        quantity={product.quantity}
        click={() => click(product)}
      />
    ));
  }

  return <div>{productsDOM}</div>;
};

export default Cart;

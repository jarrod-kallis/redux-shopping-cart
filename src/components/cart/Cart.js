import React from 'react';

const Cart = ({ products }) => {
  const productsDOM = products.map(product => <div>{product.name}</div>);

  return (
    <div>
      {productsDOM}
    </div>
  )
};

export default Cart;

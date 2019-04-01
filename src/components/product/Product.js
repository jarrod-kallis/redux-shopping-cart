import React from 'react';

import './Product.css';

const Product = ({ name, price, quantity, click }) => {
  const priceDOM = quantity ? (
    <span className="price">
      {price} <span>({quantity})</span>
    </span>
  ) : (
    <span className="price">{price}</span>
  );

  return (
    <div className="product" onClick={click}>
      <span className="name">{name}</span>
      <span className="spacer" />
      {priceDOM}
    </div>
  );
};

export default Product;

import React from 'react';

import './Product.css';

const Product = ({ name, price, click }) => (
  <div className="product" onClick={click}>
    <span className="name">{name}</span>
    <span className="spacer"></span>
    <span className="price">{price}</span>
  </div>
);

export default Product;

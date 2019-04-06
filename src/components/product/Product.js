import React from 'react';

import './Product.css';

const Product = ({
  name,
  price,
  quantity,
  allowRemove,
  click,
  removeClick
}) => {
  const priceDOM = quantity ? (
    <span className="price">
      {price} <span>({quantity})</span>
    </span>
  ) : (
    <span className="price">{price}</span>
  );

  return (
    <div className="product" onClick={click} data-cy="product">
      <span className="name">{name}</span>
      <span className="spacer" />
      {priceDOM}
      {allowRemove ? (
        <button
          style={{ padding: 0, margin: '0 0 0 10px', width: '25px' }}
          onClick={event => {
            // Stop the click from propagating to the div behind
            event.stopPropagation();
            removeClick();
          }}
        >
          X
        </button>
      ) : null}
    </div>
  );
};

export default Product;

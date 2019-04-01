import React from 'react';

import Product from './Product';

class Products extends React.Component {
  onProductClick = product => {
    this.props.click(product);
  };

  render() {
    const products = this.props.products.map(product => {
      return (
        <Product
          key={product.id}
          name={product.name}
          price={product.displayPrice}
          click={() => this.onProductClick(product)}
        />
      );
    });

    return <div>{products}</div>;
  }
}

export default Products;

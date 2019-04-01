import React from 'react';

import Product from './Product';

class Products extends React.Component {
  state = {
    products: [{
      id: 1,
      name: 'Product 1',
      displayPrice: 'R13.99',
      price: 13.99
    },
    {
      id: 2,
      name: 'Product 2',
      displayPrice: 'R200.00',
      price: 200
    },
    {
      id: 3,
      name: 'Product 3 with a really long name which should run off the page',
      displayPrice: 'R20000.00',
      price: 20000
    }
    ]
  }

  onProductClick = (product) => {
    this.props.click(product);
  }

  render() {
    const products = this.state.products.map((product) => {
      return (
        <Product key={product.id} name={product.name} price={product.displayPrice} click={() => this.onProductClick(product)} />
      );
    });

    return (
      <div>
        {products}
      </div>
    );
  }
}


export default Products;

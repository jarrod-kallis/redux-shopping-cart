import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { addToCart } from '../../actions/cartActions';

class Products extends React.Component {
  render() {
    const products = this.props.products.map(product => {
      return (
        <Product
          key={product.id}
          name={product.name}
          price={product.displayPrice}
          click={() => this.props.addToCart(product)}
        />
      );
    });

    return <div>{products}</div>;
  }
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(
  mapStateToProps,
  { addToCart }
)(Products);

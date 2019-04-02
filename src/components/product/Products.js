import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import { addToCart } from '../../actions/cartActions';
import Loader from '../loader/Loader';

class Products extends React.Component {
  render() {
    if (this.props.loading) {
      return <Loader />
    }

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
  loading: state.products.loading,
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { addToCart }
)(Products);

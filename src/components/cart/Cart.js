import React from 'react';
import { connect } from 'react-redux';

import Product from '../product/Product';
import { removeFromCart } from '../../actions/cartActions';

class Cart extends React.Component {
  render() {
    let productsDOM;

    if (this.props.products.length === 0) {
      productsDOM = <span>There are no items in your cart</span>;
    } else {
      productsDOM = this.props.products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.displayPrice}
          quantity={product.quantity}
          click={() => this.props.removeFromCart(product)}
        />
      ));
    }

    return <div>{productsDOM}</div>;
  }
}

const mapStateToProps = state => ({
  products: state.cart.selectedProducts
});

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);

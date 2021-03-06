import React from 'react';
import { connect } from 'react-redux';

import Product from '../product/Product';
import Loader from '../loader/Loader';
import { remove as removeFromCart } from '../../actions/cartActions';
import { getSelectedProducts } from '../../selectors/selectors';
import { formatPrice } from '../../utils/utils';

class Cart extends React.Component {
  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    let productsDOM;

    if (this.props.selectedProducts.length === 0) {
      productsDOM = (
        <span data-cy="cart-empty">There are no items in your cart</span>
      );
    } else {
      productsDOM = this.props.selectedProducts.map(product => {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={formatPrice(product.price)}
            quantity={product.quantity}
            click={() => this.props.removeFromCart(product)}
          />
        );
      });
    }

    return <div>{productsDOM}</div>;
  }
}

const mapStateToProps = state => ({
  selectedProducts: getSelectedProducts(state),
  loading: state.cart.loading
});

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);

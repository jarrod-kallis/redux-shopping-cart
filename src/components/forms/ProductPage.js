import React from 'react';
import { connect } from 'react-redux';

import Products from './Products';
import ProductForm from './ProductForm';

import './Product.css';
import { addUpdate } from '../../actions/productActions';

class ProductPage extends React.Component {
  state = {
    selectedProduct: null
  };

  handleSubmit = async product => {
    await this.props.addUpdate(product);

    this.setState({
      selectedProduct: null
    });
  };

  handleCancel = () => {
    this.setState({
      selectedProduct: null
    });
  };

  selectProduct = product => {
    this.setState({
      selectedProduct: product
    });
  };

  render() {
    return (
      <div className="product-page">
        <div className="product-list">
          <Products click={this.selectProduct} />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => this.selectProduct({})}>Add New</button>
          </div>
        </div>
        {this.state.selectedProduct ? (
          <div className="product-form">
            <ProductForm
              initialValues={this.state.selectedProduct}
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { addUpdate }
)(ProductPage);

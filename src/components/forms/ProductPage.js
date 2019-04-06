import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import Products from '../product/Products';
import ProductForm from './ProductForm';

import './Product.css';
import {
  get as getProducts,
  addUpdate,
  remove as removeProduct
} from '../../actions/productActions';

const ProductPage = ({ error, getProducts, addUpdate, removeProduct }) => {
  const [selectedProduct, setStateSelectedProduct] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error('Something when wrong');
      getProducts();
    }
  });

  const handleSubmit = async product => {
    await addUpdate(product);

    setStateSelectedProduct(null);
  };

  const handleCancel = () => {
    setStateSelectedProduct(null);
  };

  const selectProduct = product => {
    setStateSelectedProduct(product);
  };

  const deleteProduct = product => {
    removeProduct(product.id);
  };

  return (
    <div className="product-page">
      <div className="product-list">
        <Products
          click={selectProduct}
          removeClick={deleteProduct}
          allowRemove
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={() => selectProduct({})}>Add New</button>
        </div>
      </div>
      {selectedProduct ? (
        <div className="product-form">
          <ProductForm
            initialValues={selectedProduct}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      ) : null}
    </div>
  );
};

export default connect(
  state => ({ error: state.products.error }),
  { getProducts, addUpdate, removeProduct }
)(ProductPage);

// class ProductPage extends React.Component {
//   state = {
//     selectedProduct: null
//   };

//   handleSubmit = async product => {
//     await this.props.addUpdate(product);

//     this.setState({
//       selectedProduct: null
//     });
//   };

//   handleCancel = () => {
//     this.setState({
//       selectedProduct: null
//     });
//   };

//   selectProduct = product => {
//     this.setState({
//       selectedProduct: product
//     });
//   };

//   render() {
//     return (
//       <div className="product-page">
//         <div className="product-list">
//           <Products click={this.selectProduct} />
//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <button onClick={() => this.selectProduct({})}>Add New</button>
//           </div>
//         </div>
//         {this.state.selectedProduct ? (
//           <div className="product-form">
//             <ProductForm
//               initialValues={this.state.selectedProduct}
//               onSubmit={this.handleSubmit}
//               onCancel={this.handleCancel}
//             />
//           </div>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { addUpdate }
// )(ProductPage);

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ProductForm = ({ handleSubmit, onCancel }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text" placeholder="Name" />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <Field
          name="price"
          component="input"
          type="number"
          step="0.01"
          placeholder="Price"
          parse={value => Number(value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default reduxForm({ form: 'product', enableReinitialize: true })(
  ProductForm
);

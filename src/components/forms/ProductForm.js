import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { required } from '../../utils/formValidation';
import { renderField } from '../../utils/formUtils';

const ProductForm = ({ handleSubmit, onCancel }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="Name"
        name="name"
        component={renderField}
        type="text"
        placeholder="Name"
        validate={[required]}
      />
      <Field
        label="Price"
        name="price"
        component={renderField}
        type="number"
        step="0.01"
        placeholder="Price"
        parse={value => Number(value)}
      />
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

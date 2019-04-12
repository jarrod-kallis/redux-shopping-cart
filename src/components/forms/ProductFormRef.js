import React, { useState } from 'react';

const ProductFormRef = ({
  onSubmit,
  onCancel,
  initialValues: selectedProduct
}) => {
  const [error, setStateError] = useState(false);
  const [nameError, setStateNameError] = useState('');

  let nameInputRef = null;
  let priceInputRef = null;

  const isValid = () => {
    if (!nameInputRef.value) {
      setStateError(true);
      setStateNameError('Required');
      return false;
    }

    return true;
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        if (isValid()) {
          onSubmit({
            ...selectedProduct,
            name: nameInputRef.value,
            price: Number(priceInputRef.value)
          });
        }
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            ref={nameRef => (nameInputRef = nameRef)}
            defaultValue={selectedProduct.name}
          />
          {error && nameError && (
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {nameError}
            </span>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          name="price"
          type="number"
          placeholder="Price"
          step="0.01"
          ref={priceRef => (priceInputRef = priceRef)}
          defaultValue={selectedProduct.price}
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

export default ProductFormRef;

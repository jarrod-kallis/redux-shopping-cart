import React from 'react';

import './formValidation.css';

export const renderField = ({
  input,
  label,
  type,
  step,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input {...input} placeholder={placeholder} type={type} step={step} />
      {touched &&
        ((error && <span className="error">{error}</span>) ||
          (warning && <span className="warning">{warning}</span>))}
    </div>
  </div>
);

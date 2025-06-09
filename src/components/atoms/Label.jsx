import React from 'react';
import './Label.css';

const Label = ({ children, ...props }) => (
  <label className="label-atom" {...props}>
    {children}
  </label>
);

export default Label;

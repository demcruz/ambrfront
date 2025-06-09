import React from 'react';
import './Select.css';

const Select = ({ children, ...props }) => (
  <select className="select-atom" {...props}>
    {children}
  </select>
);

export default Select;
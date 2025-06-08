import React from 'react';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange }) => (
  <input
    className="atom-input"
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;


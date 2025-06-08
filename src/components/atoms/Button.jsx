import React from 'react';
import './Button.css';

const Button = ({ children, onClick, type = 'button' }) => (
  <button className="atom-button" type={type} onClick={onClick}>
    {children}
  </button>
);

export default Button;

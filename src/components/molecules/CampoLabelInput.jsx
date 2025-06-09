import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';
import './CampoLabelInput.css';

const CampoLabelInput = ({ label, width, ...inputProps }) => (
  <div className="campo-label-input">
    <Label>{label}</Label>
    <Input style={width ? { width: `${width}px` } : {}} {...inputProps} />
  </div>
);

export default CampoLabelInput;
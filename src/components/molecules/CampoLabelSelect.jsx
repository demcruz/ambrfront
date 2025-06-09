import React from 'react';
import Label from '../atoms/Label';
import Select from '../atoms/Select';
import './CampoLabelSelect.css'; // Importa o CSS

const CampoLabelSelect = ({ label, options = [], ...selectProps }) => (
  <div className="campo-label-select">
    <Label>{label}</Label>
    <Select {...selectProps}>
      <option value="">Selecione...</option>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </Select>
  </div>
);

export default CampoLabelSelect;
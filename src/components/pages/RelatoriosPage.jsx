import React from 'react';
import { useNavigate } from 'react-router-dom';

const RelatoriosPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Selecionar Relatorios</h2>
      <p>Página de Relatorios</p>
      <button onClick={() => navigate('/dashboard')}>Voltar ao Menu</button>
    </div>
  );
};

export default RelatoriosPage;

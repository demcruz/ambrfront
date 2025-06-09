import React from 'react';
import { useNavigate } from 'react-router-dom';

const EstatisticasPage  = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Estatisticas</h2>
      <p>Página de Estatisticas</p>
      <button onClick={() => navigate('/dashboard')}>Voltar ao Menu</button>
    </div>
  );
};

export default EstatisticasPage;

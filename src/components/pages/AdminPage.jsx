import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Selecionar Empresa</h2>
      <p>Página de Seleção de Empresa.</p>
      <button onClick={() => navigate('/dashboard')}>Voltar ao Menu</button>
    </div>
  );
};

export default AdminPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Selecionar Empresa', path: '/empresas' },
    { label: 'Cadastro de Ocorrências', path: '/ocorrencias' },
    { label: 'Relatórios', path: '/relatorios' },
    { label: 'Estatísticas', path: '/estatisticas' },
    { label: 'Administração', path: '/admin' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#fdf6e3',
    }}>
      <h2 style={{
        background: '#ffa500',
        padding: '0.75rem 2rem',
        borderRadius: '8px 8px 0 0',
        color: 'white',
        fontSize: '1.2rem',
      }}>
        Menu Principal
      </h2>

      <div style={{
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '0 0 8px 8px',
        padding: '1rem',
        width: '260px',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        alignItems: 'stretch',
      }}>
        {menuItems.map(({ label, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            style={{
              background: '#e0e0e0',
              padding: '0.5rem',
              border: '1px solid #999',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {label}
          </button>
        ))}
        <Button onClick={handleLogout}>Sair</Button>
      </div>
    </div>
  );
};

export default Dashboard;

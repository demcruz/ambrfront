import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/Button';
import { FaSignOutAlt } from 'react-icons/fa'; // opcional: ícone de logout

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('🔒 Logout: removendo token');
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1>Dashboard</h1>
      <p>Você está logado!</p>
      <Button onClick={handleLogout}>
        <FaSignOutAlt style={{ marginRight: '0.5rem' }}/> Sair
      </Button>
    </div>
  );
};

export default Dashboard;

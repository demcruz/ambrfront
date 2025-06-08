import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    console.log('🆕 Register attempt:', { username, password });
    try {
      //await axios.post('http://localhost:8080/auth/register', { username, password });
      await axios.post('http://54.232.73.10:8080/auth/register', { username, password });
      console.log('✅ Register successful for:', username);
      setMessage('Registro bem-sucedido! Redirecionando...');
      setTimeout(() => navigate('/login'), 1500);
    } catch(err) {
        console.error('❌ Register error:', err);
      setMessage('Erro ao registrar usuário');
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Cadastre-se</h2>
        <form className="login-form" onSubmit={handleRegister}>
          <div className="input-icon-wrapper">
            <FaUser className="input-icon" />
            <Input
              placeholder="Usuário"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="input-icon-wrapper">
            <FaLock className="input-icon" />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit">Registrar</Button>
          {message && <p className="login-error">{message}</p>}
        </form>

             {/* link de retorno ao login */}
    <p className="page-link">
      Já tem conta?{' '}
      <Link to="/login">
        Faça login
      </Link>
    </p>
      </div>
    </div>
  );
};

export default RegisterPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import './LoginForm.css';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    console.log('🔑 Login attempt:', { username, password });
    try {
      // const res = await axios.post('http://localhost:8080/auth/login', { username, password });
      const res = await axios.post('http://54.232.73.10:8080/auth/login', { username, password });
      console.log('✅ Login response:', res.data);
      localStorage.setItem('jwtToken', res.data.token);
      setError('');
      navigate('/dashboard');
    }  catch (err) {
      console.error('❌ Login error:', err);
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
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

      {error && <p className="login-error">{error}</p>}
      <Button type="submit">Entrar</Button>
    </form>
  );
};

export default LoginForm;
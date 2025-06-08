import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password,
      });
      setToken(response.data.token);
      setError('');
    } catch (err) {
      setError('Usuário ou senha inválidos');
      setToken('');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: 10 }}
        />
        <button type="submit" style={{ width: '100%' }}>
          Entrar
        </button>
      </form>

      {token && (
        <div style={{ marginTop: 20 }}>
          <h4>Token JWT:</h4>
          <textarea value={token} readOnly rows={4} style={{ width: '100%' }} />
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;

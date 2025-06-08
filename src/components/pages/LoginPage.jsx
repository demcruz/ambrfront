import React from 'react';
import LoginForm from '../molecules/LoginForm';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => (
 
  <div className="login-page">
    <div className="login-card">
      <h2 className="login-title">Bem-vindo</h2>
      <LoginForm />
     {/* link para registro */}
     <p className="page-link">
       Ainda não tem cadastro?{' '}
       <Link to="/register">
         Criar conta
       </Link>
     </p>
    </div>
  </div>
);

export default LoginPage;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage   from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import Dashboard from './components/pages/Dashboard';
import EmpresasPage from './components/pages/EmpresasPage';
import OcorrenciasPage from './components/pages/OcorrenciasPage';
import RelatoriosPage from './components/pages/RelatoriosPage';
import EstatisticasPage from './components/pages/EstatisticasPage';
import AdminPage from './components/pages/AdminPage';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('jwtToken');
  return token ? children : <Navigate to="/login" replace />;
};


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path="/ocorrencias" element={<OcorrenciasPage />} />
        <Route path="/relatorios" element={<RelatoriosPage />} />
        <Route path="/estatisticas" element={<EstatisticasPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
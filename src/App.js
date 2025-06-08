import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage   from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import Dashboard   from './components/pages/Dashboard';

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
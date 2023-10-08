import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import DoctorProfile from './components/doctor.component';

function AuthLayout({ children }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        {children}
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          {/* ... (tu barra de navegación) */}
        </nav>

        <Routes>
          {/* Rutas de autenticación con la estructura específica */}
          <Route path="/sign-in" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/sign-up" element={<AuthLayout><SignUp /></AuthLayout>} />

          {/* Ruta independiente para DoctorProfile sin la estructura específica */}
          <Route path="/doctor" element={<DoctorProfile />} />

          {/* Ruta por defecto (puedes redirigir a /sign-in o mostrar un componente por defecto) */}
          <Route path="/*" element={<AuthLayout><Login /></AuthLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

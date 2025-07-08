import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import DoctorProfile from './components/doctor.component';
import AdministradorProfile from './components/administrador.component';
import PacienteProfile from './components/paciente.component';

function AuthLayout({ children }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">{children}</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              MediConectar
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Ingresar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/sign-in" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/sign-up" element={<AuthLayout><SignUp /></AuthLayout>} />
          <Route path="/doctor" element={<DoctorProfile />} />
          <Route path="/paciente" element={<PacienteProfile />} />
          <Route path="/administrador" element={<AdministradorProfile />} />
          <Route path="/*" element={<AuthLayout><Login /></AuthLayout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

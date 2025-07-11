import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('paciente');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'doctor') {
      navigate('/doctor');
    } else {
      navigate('/paciente');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Mediconectar</h1>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Rol</label>
        <select
          className="form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="paciente">Paciente</option>
          <option value="doctor">Médico</option>
        </select>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </div>
      <p className="forgot-password text-right">
        <a href="/sign-up">Registrarse</a>
      </p>
    </form>
  );
}

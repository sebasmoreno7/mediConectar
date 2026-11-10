import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
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
      <h3>Explorar prototipo</h3>
      <p>Demo sin cuentas ni autenticación. No ingreses datos personales o médicos reales.</p>

      <div className="mb-3">
        <label htmlFor="demo-role">Vista de ejemplo</label>
        <select
          id="demo-role"
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
          Ver vista
        </button>
      </div>
      <p className="forgot-password text-right">
        <a href="/sign-up">Acerca del registro</a>
      </p>
    </form>
  );
}

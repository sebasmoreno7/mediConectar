import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/sign-in');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registro no disponible</h3>
      <p>Este prototipo no crea cuentas ni guarda información. No ingreses datos personales o médicos reales.</p>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Volver a la demo
        </button>
      </div>
      <p className="forgot-password text-right">
        <a href="/sign-in">Explorar vistas</a>
      </p>
    </form>
  );
}

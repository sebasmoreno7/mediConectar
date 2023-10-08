import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import DoctorProfile from './components/doctor.component';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          {/* ... (tu barra de navegación) */}
        </nav>

        <Routes>
          {/* Rutas de autenticación */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Ruta independiente para DoctorProfile */}
          <Route path="/doctor" element={<DoctorProfile />} />

          {/* Ruta por defecto (puedes redirigir a /sign-in o mostrar un componente por defecto) */}
          <Route path="/*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}



export default App

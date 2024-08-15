import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const status = true;
        const response = await axios.post('http://localhost:5000/api/auth/register', { username, password, name, role, status });        
        if(response)
            alert('Registro exitoso');

        navigate('/');
    } catch (error) {
        console.error('Error: ' + error);
        alert('Fallo el registro');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Registro</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Rol</label>
              <input
                id="rol"
                type="text"
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Moderador/Estudiante"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Usuario</label>
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Usuario"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
              />
            </div>            
            <button type="submit" className="btn btn-primary w-100">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

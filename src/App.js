import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ClassRoom from './components/ClassRom';

function App() {
  const [user, setUser] = useState('');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={user ? <ClassRoom /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

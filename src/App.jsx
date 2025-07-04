import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './Forgotpass';
import Register from './Register';

function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
         <Route path="/register" element={<Register />} />
       

      </Routes>
    </Router>
  );
}

export default App;

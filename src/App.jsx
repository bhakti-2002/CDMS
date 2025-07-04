import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './Forgotpass';
import Register from './Register';
import ContinueWithGoogle from './Continuewithgoogle';


function App() {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
       
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
         <Route path="/register" element={<Register />} />
        <Route path="/ContinueWithGoogle" element={<ContinueWithGoogle />} />

      </Routes>
    </Router>
  );
}

export default App;

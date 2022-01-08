import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import ForgetPassword from './components/Login/ForgetPassword';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

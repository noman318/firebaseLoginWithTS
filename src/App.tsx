import React from 'react';
import './App.css';
import {Home} from './pages/Home';
import { Login } from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { config } from './config/config';
import AuthRoute from './components/AuthRoute';

initializeApp(config.firebaseConfig)

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<AuthRoute><Home /></AuthRoute>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

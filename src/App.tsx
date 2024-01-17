import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/main';
import Login from './pages/login'
import './App.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App

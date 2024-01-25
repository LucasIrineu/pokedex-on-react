import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './pages/main';
import Login from './pages/login'
import './App.css'
import RegionPage from './pages/region';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/gen/:id" element={<RegionPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App

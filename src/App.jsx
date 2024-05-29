// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Passion from './pages/Passion';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experiencia from './pages/Experiencia';
import Contacto from 'pages/Contacto';

// Importa otros componentes necesarios

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passion" element={<Passion />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Experiencia" element={<Experiencia />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Añade otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;


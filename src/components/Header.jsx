// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Cristian Nastar</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Inicio</Link>
          <Link to="/pasion" className="hover:text-gray-400">Mi Pasión</Link>
          <Link to="/habilidades" className="hover:text-gray-400">Habilidades</Link>
          <Link to="/proyectos" className="hover:text-gray-400">Mis Proyectos</Link>
          <Link to="/formacion" className="hover:text-gray-400">Formación</Link>
          <Link to="/contacto" className="hover:text-gray-400">Contáctame</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;


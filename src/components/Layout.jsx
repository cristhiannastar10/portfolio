// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-bold"></div>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-purple-300">Inicio</Link></li>
            <li><Link to="/passion" className="hover:text-purple-300">Mi Pasión</Link></li>
            <li><Link to="/skills" className="hover:text-purple-300">Habilidades</Link></li>
            <li><Link to="/projects" className="hover:text-purple-300">Mis Proyectos</Link></li>
            <li><Link to="/Experiencia" className="hover:text-purple-300">Formación</Link></li>
            <li><Link to="/Contacto" className="hover:text-purple-300">Contáctame</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

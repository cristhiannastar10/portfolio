import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-gray-900 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-bold">Logo</div>
          <button 
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <ul className={`absolute bg-gray-900 md:bg-transparent top-16 left-0 w-full md:static md:flex md:space-x-4 transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li className="border-b md:border-none border-gray-700"><Link to="/" className="block px-4 py-2 md:p-0 hover:text-purple-300">Inicio</Link></li>
            <li className="border-b md:border-none border-gray-700"><Link to="/passion" className="block px-4 py-2 md:p-0 hover:text-purple-300">Mi Pasión</Link></li>
            <li className="border-b md:border-none border-gray-700"><Link to="/skills" className="block px-4 py-2 md:p-0 hover:text-purple-300">Habilidades</Link></li>
            <li className="border-b md:border-none border-gray-700"><Link to="/projects" className="block px-4 py-2 md:p-0 hover:text-purple-300">Mis Proyectos</Link></li>
            <li className="border-b md:border-none border-gray-700"><Link to="/Experiencia" className="block px-4 py-2 md:p-0 hover:text-purple-300">Formación</Link></li>
            <li className="border-b md:border-none border-gray-700"><Link to="/Contacto" className="block px-4 py-2 md:p-0 hover:text-purple-300">Contáctame</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

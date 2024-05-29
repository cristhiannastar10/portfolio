import React from 'react';
import Layout from '../components/Layout';

const Contacto = () => {
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-6">MI CONTACTO</h1>
        <div className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="nombreCompleto">
              Nombre completo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombreCompleto"
              type="text"
              value="cristian santiago nastar villacorte"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="correoElectronico">
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="correoElectronico"
              type="email"
              value="nastarjunior10@gmail.com"
              readOnly
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="redesSociales">
              Redes sociales
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="redesSociales"
              type="text"
              value="redes sociales"
              readOnly
            />
          </div>
        </div>
        <div className="flex justify-around w-full max-w-xs">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="Twitter" className="w-12 h-12" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100094487815102" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000" alt="Facebook" className="w-12 h-12" />
          </a>
          <a href="https://www.instagram.com/nastrjnr/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="Instagram" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;

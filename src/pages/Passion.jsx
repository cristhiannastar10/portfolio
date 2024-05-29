import React from 'react';
import profileImage from '../assets/images/person.png';
import Layout from '../components/Layout';

const Passion = () => {
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-6">Yo soy Cristian Santiago Nastar</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl">
          <div className="bg-gray-300 p-6 rounded-md w-full md:w-2/3 text-black">
            <h2 className="text-2xl mb-4">Mis aficiones y hábitos:</h2>
            <p>
              Cristhian Nastar es un estudiante apasionado de la música y los deportes, siempre buscando nuevas formas de aprender y crecer. Además de dedicar tiempo a sus habilidades musicales y atléticas, se encuentra inmerso en el mundo del desarrollo de software, explorando y expandiendo sus conocimientos en esta área. Con una mentalidad de constante mejora, Cristhian se encuentra en un proceso continuo de desarrollo tanto en su carrera como en sus pasiones.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 w-full md:w-1/3">
            <div className="bg-gray-300 p-6 rounded-md flex items-center justify-center" style={{ width: '100%', height: '100%' }}>
              <img src={profileImage} alt="Perfil" className="object-cover rounded-md" style={{ width: '100%', height: '100%' }} />
            </div>
            <button className="bg-gray-300 text-black py-2 px-4 rounded-md">
             
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Passion;

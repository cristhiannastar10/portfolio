import React from 'react';
import Layout from '../components/Layout';
import imagen from '../assets/images/home.jpg'; // Ruta de la imagen

const Home = () => {
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-6">Cristhian Nastar</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl">
          <div className="bg-gray-300 p-6 rounded-md w-full md:w-2/3 text-black">
            <h2 className="text-2xl mb-4">Inicio</h2>
            <p>
              soy cristhian un joven estudiante apasionado por aprender y un desarrollador de software en proceso ¡Hola! Soy  un apasionado Full Stack Developer con una combinación única de habilidades en el mundo del desarrollo de software, la música y el deporte. Con una sólida formación académica y una pasión innata por aprender, estoy constantemente buscando nuevas formas de fusionar mis diversas habilidades para crear experiencias digitales innovadoras y emocionantes. Mi enfoque versátil y mi mentalidad orientada a los resultados me permiten abordar proyectos desde múltiples perspectivas, garantizando soluciones integrales y eficientes. Con un compromiso firme con la excelencia y el crecimiento continuo, estoy emocionado de enfrentar nuevos desafíos y contribuir al éxito de equipos y proyectos.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 w-full md:w-1/3">
            <div className="bg-gray-300 p-6 rounded-md w-full h-full flex items-center justify-center">
              <img src={imagen} alt="Foto de Cristhian" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

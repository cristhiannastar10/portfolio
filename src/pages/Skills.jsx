import React from 'react';
import Layout from '../components/Layout';
import pro1 from '../assets/images/pro1.jpg';
import pro2 from '../assets/images/pro2.jpg';
import pro3 from '../assets/images/pro3.jpg';

const Skills = () => {
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-6">HABILIDADES</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 w-full max-w-4xl">
          <div className="bg-gray-300 rounded-full flex flex-col items-center justify-center p-6 min-w-[250px] min-h-[250px] text-center">
            <img src={pro1} alt="Habilidad Musical" className="w-16 h-16 mb-4 rounded-full"/>
            <span className="text-black">Habilidades Musicales: soy un músico talentoso con experiencia en varios instrumentos, destacando su habilidad en la guitarra y el piano. Además, posee conocimientos sólidos en teoría musical y composición.</span>
          </div>
          <div className="bg-gray-300 rounded-full flex flex-col items-center justify-center p-6 min-w-[250px] min-h-[250px] text-center">
            <img src={pro2} alt="Habilidad Deportiva" className="w-16 h-16 mb-4 rounded-full"/>
            <span className="text-black">Habilidades Deportivas: Cirthian es un deportista apasionado y dedicado, con habilidades destacadas en deportes como el fútbol y el atletismo. Su disciplina, trabajo en equipo y determinación son cualidades clave que lo distinguen en el campo deportivo.</span>
          </div>
          <div className="bg-gray-300 rounded-full flex flex-col items-center justify-center p-6 min-w-[250px] min-h-[250px] text-center">
            <img src={pro3} alt="Habilidad Tecnológica" className="w-16 h-16 mb-4 rounded-full"/>
            <span className="text-black">Habilidades Tecnológicas: Como desarrollador de software en proceso, Cirthian ha adquirido habilidades en múltiples tecnologías de programación, incluyendo lenguajes como JavaScript, Python y Java, así como experiencia en el desarrollo web y móvil.</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;

import React from 'react';
import Layout from '../components/Layout';

const Experiencia = () => {
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Experiencia</h1>
        <p className="mb-6 text-center">Académica - Laboral</p>
        <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
          {/* Tarjeta para Estudios Previos */}
          <div className="bg-gray-900 p-6 border-2 border-purple-600 rounded-lg w-full max-w-md flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Estudios Previos</h2>
            <div className="bg-gray-700 p-4 rounded-md space-y-2">
              <p className="text-base">
                Soy estudiante de Ingeniería en Software en la Universidad Cooperativa de Colombia. Durante mi formación, he adquirido conocimientos sólidos en diversas áreas clave del desarrollo de software, incluyendo programación, bases de datos, ingeniería de software, y gestión de proyectos. He trabajado con varios lenguajes de programación como Java, Python y JavaScript, y he desarrollado habilidades en el uso de herramientas y tecnologías modernas para la creación de aplicaciones y sistemas informáticos. Además, he participado en proyectos prácticos y colaborativos que me han permitido aplicar mis conocimientos teóricos en situaciones reales, mejorando mi capacidad para resolver problemas y trabajar en equipo.
              </p>
            </div>
          </div>
          {/* Tarjeta para Experiencia Laboral */}
          <div className="bg-gray-900 p-6 border-2 border-purple-600 rounded-lg w-full max-w-md flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Experiencia Laboral</h2>
            <div className="bg-gray-700 p-4 rounded-md space-y-2">
              <p className="text-base">
                Como estudiante de quinto semestre de Ingeniería en Software en la Universidad Cooperativa de Colombia, he adquirido experiencia práctica en el desarrollo de aplicaciones y sistemas informáticos. A través de proyectos académicos y oportunidades de trabajo, he aplicado mis conocimientos en tecnologías como Azure, Python, JavaScript, Angular y React para crear soluciones innovadoras.
              </p>
              <p className="text-base">
                He colaborado en la creación de aplicaciones web y móviles utilizando Angular y React, lo que me ha permitido comprender los principios fundamentales del desarrollo frontend y la creación de interfaces de usuario intuitivas y receptivas. Además, he trabajado en el desarrollo de APIs utilizando Python, aprovechando bibliotecas como Flask o Django, para construir servicios robustos y escalables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experiencia;

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-center mb-8">Lo que sé</h1>
      <p className="text-center max-w-2xl mb-16">
        Lorem ipsum, dolor quam recusandae molestias a consectetur illum aut iste dolore. 
        Sit amet consectetur adipisicing elit. Dicta eligendi voluptate eos rem maiores 
        voluptas mollitia debitis natus impedit excepturi quasi, quam recusandae molestias 
        a consectetur illum aut iste dolore.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="text-purple-500 text-3xl mb-4">🖥️</div>
          <h3 className="text-xl font-bold mb-2">Diseño de sitios web</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta corporis tempora possimus?
          </p>
          <a href="#" className="text-purple-500 inline-flex items-center">
            Leer más
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.54-10.54a.75.75 0 00-1.08 1.04L10.75 10H7.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5H11.5l-.54-.54a.75.75 0 001.08-1.04z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="text-purple-500 text-3xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">Diseño Ui Ux</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta corporis tempora possimus?
          </p>
          <a href="#" className="text-purple-500 inline-flex items-center">
            Leer más
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.54-10.54a.75.75 0 00-1.08 1.04L10.75 10H7.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5H11.5l-.54-.54a.75.75 0 001.08-1.04z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <div className="text-purple-500 text-3xl mb-4">🤝</div>
          <h3 className="text-xl font-bold mb-2">Juega en equipo</h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta corporis tempora possimus?
          </p>
          <a href="#" className="text-purple-500 inline-flex items-center">
            Leer más
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.54-10.54a.75.75 0 00-1.08 1.04L10.75 10H7.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5H11.5l-.54-.54a.75.75 0 001.08-1.04z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const Projects = () => {
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Mis Proyectos</h1>
        <div className="flex flex-col md:flex-row justify-around items-center bg-gray-900 p-6 border-2 border-purple-600 w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center">
            <div className="w-24 h-8 bg-gray-400 mb-4 flex items-center justify-center">Python</div>
            <div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-8 bg-gray-400 mb-4 flex items-center justify-center">Angular</div>
            <div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-8 bg-gray-400 mb-4 flex items-center justify-center">JavaScript</div>
            <div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-gray-400"></div>
          </div>
        </div>
        <div className="flex justify-around w-full max-w-xs mt-4" >
          <a href="https://github.com/cristhiannastar10?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2" /> Mira más en GitHub
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;


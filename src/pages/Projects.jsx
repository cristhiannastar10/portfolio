import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const Projects = () => {
  return (
    <Layout>
      <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-6">Mis Proyectos</h1>
        <div className="flex justify-around items-center bg-gray-900 p-6 border-2 border-purple-600 w-full max-w-4xl">
          <div className="flex flex-col items-center">
            <div className="w-24 h-8 bg-gray-400 mb-4">python</div>
            <div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-8 bg-gray-400 mb-4">angular</div>
            <div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-gray-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-8 bg-gray-400 mb-4">java.script</div>
            <div className="w-0 h-0 border-l-12 border-l-transparent border-r-12 border-r-transparent border-t-20 border-t-gray-400"></div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="https://github.com/cristhiannastar10?tab=repositories" className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded">
            <FaGithub className="mr-2" /> Mira más en GitHub
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;


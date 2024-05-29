// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Cristian Nastar</h1>
        <div className="bg-gray-300 p-6 rounded-md mb-4">
          <p>Descripción breve sobre Cristian Nastar...</p>
        </div>
      </div>
      <div className="flex-1 text-center">
        <div className="bg-gray-300 w-48 h-48 mx-auto rounded-md mb-4">
          <p>FOTO</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

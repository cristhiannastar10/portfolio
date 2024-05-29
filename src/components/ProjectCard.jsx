// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, image }) => {
  return (
    <div className="card bg-white shadow-md p-4 rounded-lg mb-4">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to={`/projects/${id}`} className="text-blue-500 hover:underline">Ver Proyecto</Link>
    </div>
  );
};

export default ProjectCard;

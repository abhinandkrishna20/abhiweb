// components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ image, title }) => {
  return (
    <div className="bg-indigo-900 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 font-semibold text-center">{title}</div>
    </div>
  );
};

export default ProjectCard;

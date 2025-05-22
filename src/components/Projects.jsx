// components/Projects.jsx
import React, { useState } from 'react';
import ProjectCard from './Projectcard';
import ds1 from '../assets/background.jpg'; // update these with actual image paths
import ds2 from '../assets/background.jpg';
import ml1 from '../assets/background.jpg';
import ml2 from '../assets/background.jpg';
import ml3 from '../assets/background.jpg';
import web1 from '../assets/background.jpg';
import web2 from '../assets/background.jpg';

const categories = ['Data Science', 'Machine Learning', 'Web Development'];

const projectData = {
  'Data Science': [
    { title: 'Sentiment Analysis', image: ds1 },
    { title: 'Clustering Networks', image: ds2 },
  ],
  'Machine Learning': [
    { title: '3D Data Map', image: ml1 },
    { title: 'Linear Regression', image: ml2 },
    { title: 'SVM Classification', image: ml3 },
  ],
  'Web Development': [
    { title: 'Housing Price Web App', image: web1 },
    { title: 'Real-time Dashboard', image: web2 },
  ],
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Data Science');

  return (
    <div className="bg-black text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      {/* Category Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-2 rounded-full border transition-all ${
              activeCategory === category
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData[activeCategory].map((project, idx) => (
          <ProjectCard key={idx} image={project.image} title={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

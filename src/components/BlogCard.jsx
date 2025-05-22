// components/BlogCard.jsx
import React from 'react';

const BlogCard = ({ image, title, excerpt, link }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <a
          href={link}
          className="text-blue-600 hover:underline font-medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

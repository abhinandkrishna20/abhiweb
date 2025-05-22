// components/Blog.jsx
import React from 'react';
import BlogCard from './BlogCard';
import blog1 from '../assets/background.jpg';
import blog2 from '../assets/background.jpg';
import blog3 from '../assets/background.jpg';

const blogs = [
  {
    title: 'Top 5 Data Science Projects for Beginners',
    excerpt:
      'Learn how to get started with beginner-friendly data science projects and build a strong portfolio.',
    image: blog1,
    link: '#',
  },
  {
    title: 'Understanding Overfitting in Machine Learning',
    excerpt:
      'Overfitting can ruin your model’s performance. Here’s how to detect and avoid it in real-world projects.',
    image: blog2,
    link: '#',
  },
  {
    title: 'Responsive Web Design: Best Practices in 2025',
    excerpt:
      'Explore modern web design tips to create responsive and user-friendly websites using React and Tailwind.',
    image: blog3,
    link: '#',
  },
];

const Blog = () => {
  return (
    <section className="bg-gradient-to-l from-pink-900 to-indigo-900 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            image={blog.image}
            title={blog.title}
            excerpt={blog.excerpt}
            link={blog.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;

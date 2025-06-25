'use client';
import React, { useState} from 'react';
import blogsData from '@/data/blogs';
import { blog } from '@/types';
import Image from 'next/image';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [ 'All', 'Technology', 'Startup', 'Lifestyle'];

  const filteredBlogs = activeFilter === 'All' ? blogsData : blogsData.filter(blog => blog.category === activeFilter);


return(
  <section id="blogs" className="about">
    <div className="container">
      <h2 className="section-title">Latest News</h2>
      {/* <div>
        <button>All</button>
        <button>Technology</button>
        <button>Startup</button>
        <button>LifeStye</button>
      </div> */}
      <div className='filter-buttons'>
        {categories.map((category) =>(
          <button key={category} onClick={() => setActiveFilter(category)} className={activeFilter === category ? 'active' : ''}>{category}</button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredBlogs.map((blog: blog) => (
          <div key={blog.id} className="project-card">
            <div className="project-image">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{blog.title}</h3>
              <p className="project-desc">{blog.description}</p>
              <div className="project-tech">
                  <span className="tech-tag">{blog.date}</span>
            
              </div>
              <div className="blogs-links">
                <a href={blog.liveUrl} className="project-link">Read More</a>
                <div>{blog.icon1}{blog.icon2}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default Blog;

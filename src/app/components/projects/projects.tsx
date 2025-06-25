'use client';
import React from 'react';
import projectsData from '@/data/projects';
import { Project } from '@/types';
import Image from 'next/image';

const Projects: React.FC = () => (
  <section id="projects" className="about">
    <div className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project: Project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveUrl} className="project-link">Live Demo</a>
                <a href={project.githubUrl} className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

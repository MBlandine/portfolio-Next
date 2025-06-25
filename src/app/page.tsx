'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import personalInfoData from '@/data/personalInfo';
import '../index.css';
// import './lib/api';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  const scrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <Navbar scrollTo={scrollTo} personalInfoData={personalInfoData} />
      <Hero scrollTo={scrollTo} />
      <Skills scrollTo={scrollTo}/>
      <Experience  />
      <Projects />
      <Blog/>
      <Contact/>
    </div>
 
  );
};

  export default Portfolio;


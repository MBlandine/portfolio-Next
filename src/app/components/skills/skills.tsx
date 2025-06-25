'use client';
import React from 'react';
import skillsData from '@/data/skills';
import personalInfoData from '@/data/personalInfo';
import { Skill } from '@/types';

type SkillsProps = {
  scrollTo: (id: string) => void;
};

const Skills: React.FC<SkillsProps> = ({ scrollTo }) => (
  <section id="about" className="about">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div>
        <p className='about-text'>{personalInfoData.about}</p>
        <h3 style={{ marginTop: '20px', marginBottom: '15px' }}>Skills</h3>
        <div className="skills">
          {skillsData.map((skill: Skill, i: number) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>

       
        <div style={{ marginTop: '20px' }}>
          <button className="btn btn-primary" onClick={() => scrollTo('experience')}>
            See Experience
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('projects')} style={{ marginLeft: '10px' }}>
            See Projects
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;



'use client';
import React from 'react';
import experienceData from '@/data/experience';
import { Experience as ExperienceType } from '@/types';
import Image from 'next/image';

const Experience: React.FC = () => (
  <section id="experience">
    <div className="container">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((experience: ExperienceType) => (
          <div key={experience.id} className="timeline-item">
            <h3 className="timeline-title">{experience.role}</h3>
            <h4 className="timeline-company">{experience.company}</h4>
            <span className="timeline-period">{experience.period}</span>
            <p className="timeline-desc">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;

'use client';
import React from 'react';
import personalInfoData from '../../../data/personalInfo';
import { SectionProps } from '../../../types';
import Image from 'next/image';

const Hero: React.FC<SectionProps> = ({ scrollTo }) => (
  <section id='hero' className='hero'>
    <div className='hero-content'>
      <div>
        <h1 className='hello-title'>Hi, I'm <span className='highlight'>{personalInfoData.name}</span></h1>
        <h2 className='hero-subtitle'>{personalInfoData.title}</h2>
        <p className='hero-tagline'>{personalInfoData.tagline}</p>
      </div>
      <div className='hero-buttons'>
        <button className='btn btn-primary' onClick={() => scrollTo('projects')}>View My Work</button>
        <button className='btn btn-secondary' onClick={() => scrollTo('contact')}>Get In Touch</button>
      </div>
      <div className='hero-image'><img src={personalInfoData.image} alt='Profile' className='profile-image' /></div>
    </div>
  </section>
);

export default Hero;
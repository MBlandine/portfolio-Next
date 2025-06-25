'use client';
import React from 'react';
import type { PersonalInfo } from '@/types'; // Import type correctly
import personalInfoData from '@/data/personalInfo'; 

type NavbarProps = {
  scrollTo?: (section: string) => void;
  personalInfoData: PersonalInfo;
};

const Navbar: React.FC<NavbarProps> = ({ scrollTo, personalInfoData }) => (
  <nav className='nav'>
    <div className='nav-container'>
      <div className='nav-logo'>{personalInfoData.name}</div>
      <ul className='nav-menu'>
        {['hero', 'about', 'experience', 'projects', 'blogs','contact'].map((section) => (
          <li key={section}>
            <button onClick={() => scrollTo?.(section)}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;

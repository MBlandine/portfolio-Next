import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Klab App',
    description: 'Full-stack shopping platform with cart functionality and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://klab-site.netlify.app/',
    githubUrl: '#',
    image: 'image/kla.png',
  },
  {
    id: 2,
    title: 'K-Card',
    description: 'Real-time weather app with location search and 5-day forecast.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://blandine-kcard.netlify.app/',
    githubUrl: '#',
    image: 'image/kevin.png',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Collaborative productivity tool with drag-and-drop functionality.',
    technologies: ['React', 'Firebase', 'CSS'],
    liveUrl: 'https://idyllic-fox-1e613a.netlify.app/',
    githubUrl: '#',
    image: 'image/port.png',
  },
];

export default projectsData;

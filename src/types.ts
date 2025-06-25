
export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    about: string;
    image: string;
    location: string;
    email: string;
    bio: string;
  }

  interface Skill {
    name: string;
    icon: string;
  }
  
  interface SkillsProps {
    skills: Skill[];
  }
  

export interface FormData {
    name: string;
    email: string;
    message: string;
  }
  
  export interface SectionProps {
    scrollTo: (id: string) => void;
  }
  
  export interface Experience {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
  }
  export interface blog {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    icon1: string;
    icon2: string;

  }
  export interface bloglist {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    icon1: string;
    icon2: string;
    category?: string;
    author:string;

  }
  export interface SocialLink {
    icon: string;
    name: string;
    url: string;
  }
  
  // types.ts
// export type SectionProps = {
//   scrollTo: (id: string) => void;
// };

// export type Skill = string;

// export type Experience = {
//   id: number;
//   role: string;
//   company: string;
//   period: string;
//   description: string;
// };

// export type Project = {
//   id: number;
//   title: string;
//   description: string;
//   technologies: string[];
//   image: string;
//   liveUrl: string;
//   githubUrl: string;
// };

export type Contact = {
  name: string;
  url: string;
  icon: string;
};

// export type PersonalInfo = {
//   name: string;
//   title: string;
//   tagline: string;
//   image: string;
//   about: string;
//   email: string;
//   location: string;
// };
// types/blog.ts
export interface BlogPost {
  id: number
  title: string
  content: string
  excerpt?: string
  status: 'published' | 'draft' | 'archived'
  createdAt: string
  updatedAt: string
  tags: string[]
  author: string
}

export interface BlogFormData {
  title: string
  content: string
  excerpt?: string
  tags: string[]
  status: 'published' | 'draft'
}
 export interface NavItem{
  label: string,
  to: string,
  icon: string,
 }
 export interface DashboardItem{
  to:string;
  label: string;
  icon: string;
}
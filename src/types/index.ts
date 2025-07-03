import React from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

export type Language = "ru" | "en";

export type Theme = "dark" | "light";

export interface Translation {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    resume: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    status: string;
    description: string;
    contactMe: string;
  };
  about: {
    title: string;
    description: string;
    experience: string;
    projects: string;
    clients: string;
  };
  skills: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
    mobile: string;
  };
  projects: {
    title: string;
    viewCode: string;
    viewLive: string;
  };
  resume: {
    title: string;
    description: string;
    download: string;
    showPreview: string;
    hidePreview: string;
    previewTitle: string;
    previewText: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
  };
}

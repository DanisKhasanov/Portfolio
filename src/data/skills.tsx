import { Skill } from '../types';
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiReact,
  SiRedux,
  SiCss3,
  SiHtml5,
} from 'react-icons/si';

export const skills: Skill[] = [
  { name: 'React', icon: <SiReact />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'frontend' },
  { name: 'Tailwind', icon: <SiTailwindcss />, category: 'frontend' },
  { name: 'Git', icon: <SiGit />, category: 'tools' },
  { name: 'Redux', icon: <SiRedux />, category: 'frontend' },
  { name: 'Redux Toolkit', icon: <SiRedux />, category: 'frontend' },
  { name: 'HTML', icon: <SiHtml5 />, category: 'frontend' },
  { name: 'CSS', icon: <SiCss3 />, category: 'frontend' },
];
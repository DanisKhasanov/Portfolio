import { Theme } from '../types';

export const getThemeColors = (theme: Theme) => {
  if (theme === 'dark') {
    return {
      primary: 'from-blue-400 to-purple-500',
      secondary: 'from-purple-400 to-pink-400',
      accent: 'bg-blue-500',
      text: 'text-blue-400',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-400',
      ring: 'ring-blue-400',
    };
  }
  
  return {
    primary: 'from-blue-600 to-purple-600',
    secondary: 'from-purple-500 to-pink-500',
    accent: 'bg-blue-600',
    text: 'text-blue-600',
    hover: 'hover:bg-blue-700',
    border: 'border-blue-500',
    ring: 'ring-blue-500',
  };
};
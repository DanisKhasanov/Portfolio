import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { getThemeColors } from '../../utils/theme';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'sm',
  className = '',
}) => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200';
  
  const sizeClasses = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  const variantClasses = {
    primary: `bg-gradient-to-r ${colors.primary} text-white`,
    secondary: `bg-gradient-to-r ${colors.secondary} text-white`,
    outline: `border ${colors.border} ${colors.text} ${
      theme === 'dark' ? 'bg-transparent' : 'bg-transparent'
    }`,
  };

  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
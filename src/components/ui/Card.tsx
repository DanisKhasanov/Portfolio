import { useTheme } from '../../contexts/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ 
  children, 
  className = '', 
  hover = true 
}: CardProps) => {
  const { theme } = useTheme();
  
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:scale-102' 
    : '';

  return (
    <div className={`rounded-xl shadow-lg p-6 transition-all duration-300 ${hoverClasses} ${
      theme === 'dark' 
        ? 'bg-gray-800 text-white' 
        : 'bg-gray-100 text-gray-900'
    } ${className}`}>
      {children}
    </div>
  );
};
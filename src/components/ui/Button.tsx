import { useTheme } from '../../contexts/ThemeContext';
import { getThemeColors } from '../../utils/theme';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);

  const baseClasses = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const variantClasses = {
    primary: `bg-gradient-to-r ${colors.primary} text-white ${colors.hover} shadow-lg hover:shadow-xl ${colors.ring}`,
    secondary: `bg-gradient-to-r ${colors.secondary} text-white ${colors.hover} shadow-md hover:shadow-lg ${colors.ring}`,
    outline: `border-2 ${colors.border} ${colors.text} hover:bg-gradient-to-r ${colors.secondary} hover:text-white ${colors.ring} ${
      theme === 'dark' ? 'bg-transparent' : 'bg-transparent'
    }`,
    ghost: `bg-transparent ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:bg-gray-500/10`,
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};
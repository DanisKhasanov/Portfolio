
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  className?: string;
}

export const AnimatedSection = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
}: AnimatedSectionProps) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const animations = {
    fadeInUp: hasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
    fadeInLeft: hasIntersected ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0',
    fadeInRight: hasIntersected ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0',
    fadeIn: hasIntersected ? 'opacity-100' : 'opacity-0',
    scaleIn: hasIntersected ? 'scale-100 opacity-100' : 'scale-95 opacity-0',
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out ${animations[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type AnimatedDivProps = {
  children: React.ReactNode;
  animationClass: string;
  delay?: number;
  className?: string;
};

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, animationClass, delay = 0, className = '' }) => {
  const { ref, inView } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${inView ? animationClass : 'opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedDiv;

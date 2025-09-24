import { useEffect, useRef, useState } from 'react';

type IntersectionObserverOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export const useScrollAnimation = (options?: IntersectionObserverOptions) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options?.triggerOnce) {
            observer.disconnect();
          }
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { ref, inView };
};

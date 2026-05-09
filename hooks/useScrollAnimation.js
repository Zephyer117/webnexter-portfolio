import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {string} animationType - Type of animation: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale-up'
 * @param {number} threshold - Visibility threshold (0-1), default 0.1
 * @returns {object} - { ref, isVisible } ref to attach to element, isVisible boolean
 */
const useScrollAnimation = (animationType = 'fade-up', threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can unobserve to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export default useScrollAnimation;

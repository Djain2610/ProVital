import React, { useEffect, useRef } from 'react';
import styles from './ParallaxWrapper.module.scss';

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleScroll = () => {
      const elements = wrapper.querySelectorAll('[data-parallax]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const speed = Number(element.getAttribute('data-parallax')) || 0.1;
        const visible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (visible) {
          const yOffset = (window.pageYOffset - rect.top) * speed;
          (element as HTMLElement).style.transform = `translateY(${yOffset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {children}
    </div>
  );
};

export default ParallaxWrapper; 

import { useEffect, useRef, useState } from 'react';

export const useInView = (options = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);
  
  return { ref, isInView };
};

export const useTypewriter = (text: string, speed = 50, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let currentIndex = 0;
    
    const startTyping = () => {
      timer = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
        }
      }, speed);
    };
    
    const delayTimer = setTimeout(() => {
      startTyping();
    }, delay);
    
    return () => {
      clearTimeout(delayTimer);
      clearInterval(timer);
    };
  }, [text, speed, delay]);
  
  return displayText;
};

export const staggeredAnimationProps = (index: number, baseDelay = 100) => {
  return {
    className: "opacity-0",
    style: {
      animationName: "fade-in",
      animationDuration: "0.5s",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      animationFillMode: "forwards",
      animationDelay: `${baseDelay + (index * 100)}ms`
    }
  };
};

export const useSmoothScroll = () => {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return { scrollTo };
};

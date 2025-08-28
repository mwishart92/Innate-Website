"use client";

import { useEffect } from 'react';
import { initPerformanceMonitoring } from '@/utils/performance';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only initialize in production and after user interaction
    if (process.env.NODE_ENV === 'production') {
      const handleUserInteraction = () => {
        initPerformanceMonitoring();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
      
      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('scroll', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);
      
      // Fallback: initialize after 5 seconds if no interaction
      const timeout = setTimeout(() => {
        initPerformanceMonitoring();
      }, 5000);
      
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;

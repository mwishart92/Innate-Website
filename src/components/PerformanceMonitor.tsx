"use client";

import { useEffect } from 'react';
import { initPerformanceMonitoring } from '@/utils/performance';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only initialize in production
    if (process.env.NODE_ENV === 'production') {
      initPerformanceMonitoring();
    }
  }, []);

  return null;
};

export default PerformanceMonitor;

"use client"
// components/MyProvider.tsx
import React, { ReactNode, useEffect } from 'react';

// AOS CSS is now imported in layout.tsx to prevent render blocking
import AOS from "aos";
interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  // You can add any state or functionality you need here
  useEffect(() => {
    AOS.init({ once: false });
  }, []);


  return (
    <div>
      {/* Your global state or logic can go here */}
      {children}
    </div>
  );
};

export default MyProvider;

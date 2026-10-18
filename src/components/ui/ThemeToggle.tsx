'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initially default to light mode
    const savedTheme = localStorage.getItem('xana_theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('xana_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('xana_theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full bg-slate-100/60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
        isDark
          ? 'bg-white/10 text-teal-300 hover:bg-white/20 hover:scale-105'
          : 'bg-slate-100 text-[#002D62] hover:bg-slate-200 hover:scale-105'
      } ${className}`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

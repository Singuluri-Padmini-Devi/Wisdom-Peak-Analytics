import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 p-2 text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:from-blue-600 dark:to-indigo-600 dark:focus:ring-blue-400/20"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-indigo-600 dark:to-blue-600" />
      {theme === 'light' ? (
        <Moon className="relative h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
      ) : (
        <Sun className="relative h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
      )}
    </button>
  );
}
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('blue');

  const setTheme = (theme) => {
    setCurrentTheme(theme);
  };

  const getThemeColors = () => {
    switch (currentTheme) {
      case 'blue':
        return {
          primary: 'blue-600',
          primaryHover: 'blue-700',
          primaryLight: 'blue-100',
          gradient: 'from-blue-600 to-blue-800',
          text: 'text-blue-600',
          bg: 'bg-blue-600',
          bgHover: 'bg-blue-700',
          border: 'border-blue-600'
        };
      case 'green':
        return {
          primary: 'green-600',
          primaryHover: 'green-700',
          primaryLight: 'green-100',
          gradient: 'from-green-600 to-green-800',
          text: 'text-green-600',
          bg: 'bg-green-600',
          bgHover: 'bg-green-700',
          border: 'border-green-600'
        };
      case 'purple':
        return {
          primary: 'purple-600',
          primaryHover: 'purple-700',
          primaryLight: 'purple-100',
          gradient: 'from-purple-600 to-purple-800',
          text: 'text-purple-600',
          bg: 'bg-purple-600',
          bgHover: 'bg-purple-700',
          border: 'border-purple-600'
        };
      case 'red':
        return {
          primary: 'red-600',
          primaryHover: 'red-700',
          primaryLight: 'red-100',
          gradient: 'from-red-600 to-red-800',
          text: 'text-red-600',
          bg: 'bg-red-600',
          bgHover: 'bg-red-700',
          border: 'border-red-600'
        };
      default:
        return {
          primary: 'blue-600',
          primaryHover: 'blue-700',
          primaryLight: 'blue-100',
          gradient: 'from-blue-600 to-blue-800',
          text: 'text-blue-600',
          bg: 'bg-blue-600',
          bgHover: 'bg-blue-700',
          border: 'border-blue-600'
        };
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, getThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};
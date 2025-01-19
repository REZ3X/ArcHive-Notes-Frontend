import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button onClick={toggleTheme} className="text-gray-600 text-lg hover:text-gray-800">
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}
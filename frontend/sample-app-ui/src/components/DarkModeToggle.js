import React, { useState, useEffect } from 'react';
import '../styles/DarkModeToggle.scss';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      const container = document.querySelector('.app-container');
if (container) {
  container.classList.add('dark');
}
    } else {
      document.body.classList.remove('dark');
      const container = document.querySelector('.app-container');
if (container) {
  container.classList.remove('dark');
}

    }
  }, [darkMode]);

  return (
    <div className="dark-toggle-container">
      <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle-btn">
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default DarkModeToggle;

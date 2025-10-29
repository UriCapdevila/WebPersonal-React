import React, { useState, useEffect } from 'react';
import Header from './Header';
import Biography from './Biography';
import Portfolio from './Portfolio';
import EducationExperience from './EducationExperience';
import Skills from './Skills';
import Footer from './Footer';
import './App.css';
import './DarkMode.css';
import './Skills.css'; // Import skills styles

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="container mt-4">
        <Biography />
        <Portfolio />
        <Skills />
        <EducationExperience />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;

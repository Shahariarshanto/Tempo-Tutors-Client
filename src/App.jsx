import { useState } from 'react';
import './App.css'
import NavBar from './components/pages/Header/NavBar'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App

import { useState } from "react";
import "./App.css";
import Footer from "./components/pages/shared/Footer";
import NavBar from "./components/pages/shared/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer/>
    </div>
  );
}

export default App;

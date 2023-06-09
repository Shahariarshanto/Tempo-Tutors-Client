import { useState } from "react";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";

export default function DashboardStudent() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      
      <StudentDashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
     
    </div>
  );
}

import { useState } from "react";
import InstructorDashboard from "../pages/InstructorDashboard/InstructorDashboard";

export default function DashboardInstructor() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <InstructorDashboard darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

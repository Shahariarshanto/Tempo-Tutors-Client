import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import DashboardStudent from "../Layout/DashboardStudent";
import Classes from "../pages/Classes/Classes";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Registration&Login/Login";
import Registration from "../pages/Registration&Login/Registration";
import EnrolledClasses from "../pages/StudentDashboard/EnrolledClasses";
import SelectedClasses from "../pages/StudentDashboard/SelectedClasses";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import NotFound from "../pages/shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
    ],
  },
  {
    path: "dashboard-student",
    element: <DashboardStudent />,
    children: [
      {
        path: "dashboard-student",
        element: <StudentDashboard />,
      },
      {
        path: "selected-classes",
        element: <SelectedClasses/>
      },
      {
        path: "enrolled-classes",
        element:<EnrolledClasses/>
      }
    ],
  },
]);

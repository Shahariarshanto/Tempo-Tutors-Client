import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import DashboardAdmin from "../Layout/DashboardAdmin";
import DashboardInstructor from "../Layout/DashboardInstructor";
import DashboardStudent from "../Layout/DashboardStudent";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import Classes from "../pages/Classes/Classes";
import Home from "../pages/Home/Home";
import AddClass from "../pages/InstructorDashboard/AddClass";
import InstructorDashboard from "../pages/InstructorDashboard/InstructorDashboard";
import MyClasses from "../pages/InstructorDashboard/MyClasses";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Registration&Login/Login";
import Registration from "../pages/Registration&Login/Registration";
import EnrolledClasses from "../pages/StudentDashboard/EnrolledClasses";
import SelectedClasses from "../pages/StudentDashboard/SelectedClasses";
import StudentDashboard from "../pages/StudentDashboard/StudentDashboard";
import NotFound from "../pages/shared/NotFound";
import PrivateRoute from "./PrivateRoute";

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
    element: (
      <PrivateRoute>
        <DashboardStudent />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard-student",
        element: (
          
            <StudentDashboard />
          
        ),
      },
      {
        path: "selected-classes",
        element: <SelectedClasses />,
      },
      {
        path: "enrolled-classes",
        element: <EnrolledClasses />,
      },
    ],
  },
  {
    path: "instructor-dashboard",
    element: <DashboardInstructor />,
    children: [
      {
        path: "instructor-dashboard",
        element: <InstructorDashboard />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "my-class",
        element: <MyClasses />,
      },
    ],
  },
  {
    path: "admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "admin-dashboard",
        element: <DashboardAdmin />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "my-class",
        element: <MyClasses />,
      },
    ],
  },
]);

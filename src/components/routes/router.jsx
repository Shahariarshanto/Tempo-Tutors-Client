import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Classes from "../pages/Classes/Classes";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Registration&Login/Login";
import Registration from "../pages/Registration&Login/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <Classes/>,
      
      }
    ],
  },
]);

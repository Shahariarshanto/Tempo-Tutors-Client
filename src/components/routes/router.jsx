import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../pages/Home/Home";
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
    ],
  },
]);

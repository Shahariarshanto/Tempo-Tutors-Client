import {
    createBrowserRouter
} from "react-router-dom";
import App from "../../App";


export default function router() {
    return createBrowserRouter([
        {
            path: "/",
            element: <App />,
        },
    ]);
}
import {createBrowserRouter} from "react-router-dom";
import Login from "../Components/Login/Login";

const authRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "*",
        element: <Login/>
    }
]);

export default authRoutes;

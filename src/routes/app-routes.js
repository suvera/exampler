import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";


const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "*",
        element: <Dashboard/>,
    },
     
]);

export default appRoutes;

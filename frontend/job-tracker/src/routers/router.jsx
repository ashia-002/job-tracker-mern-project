import {createBrowserRouter} from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home";
import Explored from "../pages/Explored";
import Bookmarked from "../pages/Bookmarked";
import Tracker from "../pages/Tracker";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
              path: "/tracker",
              element: <Tracker/>  
            },
            {
                path: "/explored",
                element: <Explored/>
            },
            {
                path: "/bookmarks",
                element: <Bookmarked/>
            },
            {
                path: "/profile",
                element: <div>Your User Profile</div>
            },
            {
                path: "/loginPage",
                element: <div>User Login</div>
            }
        ]
    }
]);

export default router;
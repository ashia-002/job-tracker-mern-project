import {createBrowserRouter} from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home";
import Explored from "../pages/Explored";
import Bookmarked from "../pages/Bookmarked";
import Tracker from "../pages/Tracker";
import Login from "../pages/Login";

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
                element: <Login/>
            },
            {
                path: "/registrationPage",
                element: <div>registrationPage</div>
            }
        ]    
    }
]);

export default router;
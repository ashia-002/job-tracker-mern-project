import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/Home";
import Explored from "../pages/Explored";
import Bookmarked from "../pages/Bookmarked";
import Tracker from "../pages/Tracker";
import Login from "../pages/Login";
import Registration from "../pages/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/tracker",
                element: <Tracker />,
            },
            {
                path: "/explored",
                element: <Explored />,
            },
            {
                path: "/bookmarks",
                element: <Bookmarked />,
            },
            {
                path: "/profile",
                element: <div>Your User Profile</div>,
            },
            {
                path: "/login",
                element: <Login/>, // Removed setIsLoggedIn here, it's now passed via Outlet
            },
            {
                path: "/registrationPage",
                element: <Registration />,
            },
        ],
    },
]);

export default router;

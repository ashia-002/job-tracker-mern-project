import { Link } from "react-router-dom";
import Logo from "../assets/mainlogo.svg";
import "../styles/App.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import { toast, ToastContainer } from 'react-toastify'; // Importing toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing the styles for the toast

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate(); // Get the navigate function
    
    const handleLogout = async () => {
        try {
            // Call the backend logout endpoint to clear cookies on the server
            const response = await api.post("/api/user/logout");
    
            // Log the response to ensure it's working
            console.log(response.data.msg);
    
            // Clear cookies on the client side (optional, since backend will handle this)
            Cookies.remove("token");
            Cookies.remove("userId");
    
            // Update the state to reflect the user is logged out
            setIsLoggedIn(false);
            
            // Show success toast
            toast.success("Logged out successfully!");

            // Navigate to the homepage or login page
            navigate("/"); // Or navigate("/login") if you prefer
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <header className="max-w-screen-2xl mx-auto px-20 py-6">
            <nav className="flex justify-between items-center bg-transparent">
                <div>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="rounded-3xl bg-navbarBGColor px-7 py-3">
                    <ul className="flex justify-between items-center gap-5 text-textPrimaryColor font-bodyFont text-md">
                        <li>
                            <Link to="/" className="hover:text-teal-950 hover:font-medium">
                                Home
                            </Link>
                        </li>
                        {isLoggedIn ? (
                            <>
                                <li>
                                    <Link to="/tracker" className="hover:text-teal-950 hover:font-medium">
                                        Tracker
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/explored" className="hover:text-teal-950 hover:font-medium">
                                        Explored
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/bookmarks" className="hover:text-teal-950 hover:font-medium">
                                        Bookmarked
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/profile" className="hover:text-teal-950 hover:font-medium">
                                        Profile
                                    </Link>
                                </li>
                                <button onClick={handleLogout} className="border-favoriteAccentColor border-solid">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="reg-btn border-favoriteAccentColor border-solid">
                                    <Link to="/registrationPage">Sign up</Link>
                                </button>
                                <button className="border-favoriteAccentColor border-solid">
                                    <Link to="/login">Log in</Link>
                                </button>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
            <ToastContainer/>
        </header>
    );
};

export default Navbar;

import React, { useState } from "react";
import loginimage from "../assets/loginImage/loginimage.png";
import api from "../api/api"; // Import your axios instance
import Cookies from "js-cookie"; // Import js-cookie to handle cookies
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle redirection
import { useOutletContext } from "react-router-dom"; // Import to access context
import { toast, ToastContainer } from 'react-toastify'; // Importing toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing the styles for the toast

const Login = () => {
    const { setIsLoggedIn } = useOutletContext(); // Access setIsLoggedIn from context
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!email || !password) {
            // setMessage("Email and Password fields cannot be empty.");
            toast.error("Email and Password fields cannot be empty.");
        } else {
            // setMessage(""); // Clear error message
    
            try {
                const response = await api.post("/api/user/login", { email, password });
    
                // Log the response for debugging
                console.log(response.data); // Ensure the response contains `userId` and `token`
    
                // Set cookies with proper settings for cross-origin requests
                // Ensure userId and token are being correctly set
                Cookies.set("userId", response.data.userId, { 
                    expires: 7, 
                    path: '/', 
                    sameSite: 'Lax', 
                    secure: false // Use false for local testing without HTTPS
                });
                Cookies.set("token", response.data.token, { 
                    expires: 7, 
                    path: '/', 
                    sameSite: 'None', 
                    secure: false // Use false for local testing without HTTPS
                });
    
                // Log to verify that cookies are set
                console.log("UserId from cookies after setting:", Cookies.get("userId"));
                console.log("Token from cookies after setting:", Cookies.get("token"));
    
                // setMessage("Login successful!");
                toast.success("Login successful!");
                setIsLoggedIn(true); // Update the login state after successful login
    
                // Wait for a brief period before navigating
                setTimeout(() => {
                    navigate("/"); // Redirect to homepage after login
                }, 800);
    
            } catch (error) {
                console.error("Login failed:", error); // Log the entire error to console for debugging
                // setMessage(error.response?.data?.message || "Login failed. Please try again.");
                toast.error(error.response?.data?.message || "Login failed. Please try again.");
            }
        }
    };
        
    return (
        <section className="flex justify-center text-left py-16 px-28 gap-6">
            <div className="w-1/2">
                <h2 className="text-xl text-textThemeColor font-themeFont">Welcome Back.</h2>
                <h2 className="text-3xl text-textPrimaryColor mb-4 leading-tight">Continue to your Account.</h2>

                <form className="w-full max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="w-full">
                        <label htmlFor="email" className="text-sm text-gray-500">EMAIL</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="johndoe@email.com"
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-green-500"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password" className="text-sm text-gray-500">PASSWORD</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••"
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-green-500"
                        />
                    </div>
                    {message && <p className="text-red-500 text-sm italic mb-3">{message}</p>}
                    <button
                        type="submit"
                        className="w-full text-white font-bold py-2 rounded-md bg-primaryButtonColor hover:bg-hoverButtonColor"
                    >
                        CONTINUE →
                    </button>
                </form>
                {/* Footer Section */}
                <p className="text-gray-500 text-sm mt-6">
                    Don't have an account?{" "}
                    <a href="/registrationPage" className="text-favoriteAccentColor font-bold hover:underline">
                        REGISTER NOW
                    </a>
                </p>
            </div>
            <div className="flex-shrink-0 max-w-96">
                <img src={loginimage} alt="Login illustration" className="max-w-full h-auto" />
            </div>
            {/* Toast container should be placed at the bottom of your component tree */}
            <ToastContainer />
        </section>
    );
};

export default Login;

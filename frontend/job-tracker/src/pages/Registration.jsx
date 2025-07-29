import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api"; // Assuming api.js is configured for backend communication
import Registrationimage from "../assets/registrationimage/registrationimage.png";

export const Registration = () => {
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate(); // For navigation

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
        setIsLoading(true); // Show loading state

        // Validation
        if (!username || !email || !phone || !password) {
            setMessage("All fields are required.");
            setIsLoading(false);
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setMessage("Invalid email address.");
            setIsLoading(false);
        } else if (!/^\d{10}$/.test(phone)) {
            setMessage("Phone number must be 10 digits.");
            setIsLoading(false);
        } else {
            setMessage(""); // Clear error message

            try {
                const userData = { username, email, phone, password };
                const response = await api.post("/api/user/register", userData); // Make POST request to backend
                if (response.status === 201) {
                    setMessage("Registration successful!");
                    setTimeout(() => navigate("/login"), 2000); // Redirect to login page
                }
            } catch (error) {
                console.error("Registration error:", error);
                setMessage(error.response?.data?.message || "An error occurred during registration.");
            } finally {
                setIsLoading(false); // Hide loading state
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <section className="flex justify-center text-left py-16 px-28 gap-6">
            <div className="w-1/2">
                <div>
                    <h2 className="text-xl text-textThemeColor font-themeFont">Welcome!</h2>
                    <h2 className="text-3xl text-textPrimaryColor mb-4 leading-tight">Create Your Account.</h2>
                </div>

                {/* Registration Form */}
                <form className="w-full max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div className="w-full">
                        <label htmlFor="username" className="text-sm text-gray-500">
                            USERNAME
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-green-500"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="w-full">
                        <label htmlFor="email" className="text-sm text-gray-500">
                            EMAIL
                        </label>
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

                    {/* Phone Input */}
                    <div className="w-full">
                        <label htmlFor="phone" className="text-sm text-gray-500">
                            PHONE
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="1234567890"
                            className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-green-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="w-full">
                        <label htmlFor="password" className="text-sm text-gray-500">
                            PASSWORD
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••"
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-green-500"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-black"
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {message && <p className="text-red-500 text-sm italic mb-3">{message}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`w-full text-white font-bold py-2 rounded-md ${
                            isLoading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
                        } transition-all`}
                        disabled={isLoading}
                    >
                        {isLoading ? "Registering..." : "REGISTER →"}
                    </button>
                </form>

                {/* Footer Section */}
                <p className="text-gray-500 text-sm mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-favoriteAccentColor font-bold hover:underline">
                        LOG IN
                    </a>
                </p>
            </div>

            {/* Right Section (Image) */}
            <div className="flex-shrink-0 max-w-md">
                <img
                    src={Registrationimage}
                    alt="A person sitting at a desk using a laptop for job hunting"
                    className="max-w-full h-auto"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Registration;

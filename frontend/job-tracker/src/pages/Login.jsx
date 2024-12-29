import React, { useState } from 'react';
import loginimage from '../assets/loginImage/loginimage.png';
import googleicon from '../assets/loginImage/google.svg';

export const Login = () => {
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission

        if (!email || !password) {
            setMessage("Email and Password fields cannot be empty.");
        } else {
            setMessage(""); // Clear error message
            // Proceed with login logic (e.g., API call)
            console.log("Logging in with", { email, password });
        }
    };

    return (
        <section className="flex justify-center text-left py-16 px-28 gap-6">
            <div className="w-1/2">
                <div>
                    <h2 className="text-xl text-textThemeColor font-themeFont">
                        Welcome Back.
                    </h2>
                    <h2 className="text-3xl text-textPrimaryColor mb-4 leading-tight">
                        Continue to your Account.
                    </h2>
                </div>
                {/* Google Login Button */}
                <button className="w-full max-w-xs text-md text-textSecondary01Color bg-blue-100 border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md shadow-md hover:bg-blue-200 transition-all mb-4">
                    <img src={googleicon} alt="Google Logo" className="h-5" />
                    Log In with Google
                </button>

                {/* Separator */}
                <div className="flex items-center w-full max-w-xs mb-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">Or use Email</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Login Form */}
                <form className="w-full max-w-xs flex flex-col gap-4" onSubmit={handleSubmit}>
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

                    {/* Password Input */}
                    <div className="w-full">
                        <label htmlFor="password" className="text-sm text-gray-500">
                            PASSWORD
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••"
                                className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-green-500"
                            />
                            <span className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-black">
                                👁️
                            </span>
                        </div>
                    </div>

                    {/* Error Message */}
                    {message && <p className="text-red-500 text-sm italic mb-3">{message}</p>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-white font-bold py-2 rounded-md "
                    >
                        CONTINUE →
                    </button>
                </form>

                {/* Footer Section */}
                <p className="text-gray-500 text-sm mt-6">
                    Are you a Newbie?{' '}
                    <a
                        href="/registrationPage"
                        className="text-favoriteAccentColor font-bold hover:underline"
                    >
                        GET STARTED – IT’S FREE
                    </a>
                </p>
            </div>

            {/* Right Section (Image) */}
            <div className="flex-shrink-0 max-w-96">
                <img
                    src={loginimage}
                    alt="A person sitting at a desk using a laptop for job hunting"
                    className="max-w-full h-auto"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Login;

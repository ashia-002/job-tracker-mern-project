import { useState, useEffect } from "react";
import "../styles/App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import { ToastContainer } from 'react-toastify';

function App() {
    const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check login status on component mount
    useEffect(() => {
        const token = Cookies.get("token"); // Check token in cookies
        setIsLoggedIn(!!token); // Set login state based on token presence
    }, []);

    // Function to toggle bookmark
    const toggleBookmark = (job) => {
        const isBookmarked = bookmarkedJobs.some((bookmark) => bookmark.id === job.id);
        setBookmarkedJobs(isBookmarked ? bookmarkedJobs.filter((bookmark) => bookmark.id !== job.id)
            : [...bookmarkedJobs, job]
        );
    };

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 bg-websiteBG bg-cover bg-center">
                <Outlet
                    context={{
                        bookmarkedJobs,
                        toggleBookmark, // Pass toggleBookmark instead of setBookmarkedJobs
                        isLoggedIn,
                        setIsLoggedIn,
                    }}
                />
            </main>

            <Footer />
            <ToastContainer /> {/* Include ToastContainer to render toast notifications */}
        </>
    );
}

export default App;

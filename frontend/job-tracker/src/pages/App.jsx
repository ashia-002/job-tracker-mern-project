import { useState, useEffect } from "react"; 
import "../styles/App.css";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  // State to manage bookmarked jobs
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  // Function to toggle bookmark
  const toggleBookmark = (job) => {
    const isBookmarked = bookmarkedJobs.some((bookmark) => bookmark.id === job.id);
    setBookmarkedJobs(isBookmarked 
      ? bookmarkedJobs.filter((bookmark) => bookmark.id !== job.id) 
      : [...bookmarkedJobs, job]
    );
  };

  // Use useLocation hook to detect route changes and scroll to top
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 bg-websiteBG bg-cover bg-center">
        {/** Pass state and function to child routes using Outlet context */}
        <Outlet context={{ bookmarkedJobs, toggleBookmark }} />
      </main>
      <Footer />
    </>
  );
}

export default App;

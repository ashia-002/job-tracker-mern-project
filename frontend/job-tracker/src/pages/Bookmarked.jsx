import React from "react";
import { Link, useOutletContext } from "react-router-dom"; // Use context for shared state
import BookmarkedCard from "../components/BookmarkedCard";

const Bookmarked = () => {
    // Access shared state and functions from the App component
    const { bookmarkedJobs, toggleBookmark } = useOutletContext();

    return (
        <div className="text-center py-16 px-28">
            {/* Header Section */}
            <div>
                <h2 className="text-3xl text-center text-textPrimaryColor mb-4 leading-tight">
                    <span className="text-textThemeColor font-themeFont">Saved</span> Jobs are<br />
                    Listed!
                </h2>
                <p className="text-textSecondary01Color text-center mb-8 px-32">
                    A collection of the jobs you’ve explored and found interesting. Easily
                    revisit these opportunities to take the next step in your career journey.
                </p>
            </div>
            {/* Cards Section */}
            {bookmarkedJobs.length === 0 ? (
                <p>No jobs bookmarked yet. Go explore and add jobs to your bookmarks!</p>
            ) : (
                <div className='w-[812px] mx-auto'>
                    <h2 className="text-left text-lg mb-4">Jobs card:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookmarkedJobs.map((job) => (
                            <BookmarkedCard key={job.id} job={job} toggleBookmark={toggleBookmark} />
                        ))}
                    </div>
                </div>
            )}

            {/* Navigation Button to Go Back */}
            <button className="bg-primaryButtonColor text-textPrimaryColor py-2 px-4 rounded mt-20 hover:bg-hoverButtonColor">
                <Link to="/explored" >
                    Go to Explored Jobs
                </Link>
            </button>

        </div>
    );
};

export default Bookmarked;

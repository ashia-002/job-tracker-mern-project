import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ExploreCard from "../components/ExploreCard";

const Explored = () => {
    const [filterCategory, setFilterCategory] = useState('title'); // Default filter by title
    const [filterValue, setFilterValue] = useState('');
    // Access shared state and functions from the App component
    const { bookmarkedJobs, toggleBookmark } = useOutletContext();
    
    return (
        <div className="text-center py-16 px-28">
            {/* Header Section */}
            <div>
                <h2 className="text-3xl text-center text-textPrimaryColor mb-4 leading-tight">
                    <span className="text-textThemeColor font-themeFont">Discoveries</span> on Your Job<br />
                    Hunt
                </h2>
                <p className="text-textSecondary01Color text-center mb-8 px-32">
                    A collection of the jobs you’ve explored and found interesting. Easily
                    revisit these opportunities to take the next step in your career journey.
                </p>
            </div>

            {/* Filter Section */}
            <div className="mb-8">
                <div className="flex justify-center items-center space-x-4">
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="custom-select border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                    >
                        <option value="title">Title</option>
                        <option value="jobType">Job Type</option>
                        <option value="deadline">Deadline</option>
                    </select>
                    <input
                        type="text"
                        placeholder={`Search by ${filterCategory}`}
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="search border focus:outline-none w-64"
                    />
                </div>
            </div>

            {/* Cards Section */}
            <ExploreCard
                filterCategory={filterCategory}
                filterValue={filterValue}
                toggleBookmark={toggleBookmark}
                bookmarkedJobs={bookmarkedJobs}
            />
        </div>
    );
};

export default Explored;

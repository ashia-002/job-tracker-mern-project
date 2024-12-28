import React from "react";
import cardimage from "../assets/cardimage/cardillustration.svg"; // Ensure the correct path to the image

const BookmarkedCard = ({ job, toggleBookmark }) => {
    return (
        <div className="bg-cardBGColor border border-gray-300 rounded-lg shadow-md p-6 text-left max-w-[300px] mx-auto flex flex-col justify-between h-full">
            {/* Image Section */}
            <div className="mb-4">
                <img
                    src={cardimage} // Replace with job.image if you have unique images per job
                    alt={job.title}
                    className="rounded-t-md w-full h-full object-cover object-center"
                />
            </div>

            {/* Content Section */}
            <div className="flex-grow mb-4">
                <h3 className="text-lg font-semibold text-textPrimaryColor mb-2">{job.title}</h3>
                <p className="text-textSecondary01Color text-sm mb-1">
                    <strong>Job Type:</strong> {job.jobType}
                </p>
                <p className="text-textSecondary01Color text-sm mb-1">
                    <strong>Deadline:</strong> {job.deadline}
                </p>
                <p className="text-textSecondary02Color text-sm mb-4">{job.description}</p>
            </div>

            {/* Buttons Section */}
            <div className="mt-auto">
                <div className="flex justify-between">
                    <button className="bg-primaryButtonColor text-textPrimaryColor py-2 px-4 rounded hover:bg-hoverButtonColor">
                        <a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Link
                        </a>
                    </button>

                    <button
                        onClick={() => toggleBookmark(job)} // Call toggleBookmark when clicked
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Remove
                    </button>
                </div>
                <div className="mt-4"></div> {/* Maintain constant spacing */}
            </div>
        </div>
    );
};

export default BookmarkedCard;

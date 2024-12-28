import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import JobTrackerTable from "../components/JobTrackerTable";

const Tracker = () =>{
    return(
        <div className="text-center py-16 px-28">
            {/* Header Section */}
            <div>
                <h2 className="text-3xl text-center text-textPrimaryColor mb-4 leading-tight">
                    <span className="text-textThemeColor font-themeFont">Keep Track</span> of Your Job<br />
                    Hunt.
                </h2>
                <p className="text-textSecondary01Color text-center mb-8 px-32">
                Keep track of all your job applications and opportunities in one place. Stay organized
                as you move through each stage of your job search, and never miss an important update or follow-up.
                </p>
            </div>
            <div>
                <JobTrackerTable/>
            </div>

        </div>   
    );
};

export default Tracker;
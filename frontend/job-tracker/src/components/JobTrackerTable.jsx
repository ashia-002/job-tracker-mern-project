import React, { useEffect, useState, useCallback } from "react";
import '../styles/App.css';
import api from '../api/api';
import TableHeader from "./TableHeader";
import Cookies from 'js-cookie'; // Make sure to handle cookies for authentication
import { toast, ToastContainer } from 'react-toastify'; // Importing toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing the styles for the toast


const JobTrackerTable = () => {
    const [rows, setRows] = useState([]);  // Job data
    const [filterCategory, setFilterCategory] = useState("company");
    const [filterValue, setFilterValue] = useState("");
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState("");  // Error state
    const [formErrors, setFormErrors] = useState({}); // State for form validation errors

    // Fetch all jobs on component mount
    const fetchJobs = useCallback(async () => {
        setLoading(true);  // Start loading
        const token = Cookies.get('token');  // Retrieve the token from cookies
        try {
            const response = await api.get("/api/jobs", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            });
            setRows(response.data);  // Set rows to fetched jobs
            setLoading(false);
        } catch (err) {
            setError("Error fetching jobs.");
            setLoading(false);
        }
    }, []); // Empty dependency array ensures this function doesn't get recreated on each render

    useEffect(() => {
        fetchJobs(); // Call it on component mount to load the jobs initially
    }, [fetchJobs]);


    // Filter rows to remove the `__v` field
    const filteredRows = rows.filter((row) => {
        if (!filterValue) return true;
        return row[filterCategory]
            ?.toString()
            ?.toLowerCase()
            ?.includes(filterValue.toLowerCase());
    }).map(row => {
        // Remove `__v` field from each row
        const { __v, ...rest } = row;
        return rest;
    });


    const handleInputChange = (rowIndex, field, value) => {
        const updatedRows = [...rows]; // Create a shallow copy of the rows array
        updatedRows[rowIndex] = {
            ...updatedRows[rowIndex], // Spread the existing row to maintain its other fields
            [field]: value, // Update only the field that is being changed
        };
        setRows(updatedRows); // Update the state with the modified rows array
    };


    //Perform frontend validation for job data
    const validateJob = (jobData) => {
        const errors = {};

        // // User ID - Assuming this is managed by backend
        // if (!jobData.userID || !/^[a-fA-F0-9]{24}$/.test(jobData.userID)) {
        //     errors.userID = "Invalid User ID format.";
        // }

        // Company
        if (!jobData.company || jobData.company.trim() === "") {
            errors.company = "Company name is required.";
        } else if (jobData.company.length > 255) {
            errors.company = "Company name must not exceed 255 characters.";
        }

        // Role
        if (!jobData.role || jobData.role.trim() === "") {
            errors.role = "Role is required.";
        } else if (jobData.role.length > 255) {
            errors.role = "Role must not exceed 255 characters.";
        }

        // Category (optional)
        if (jobData.category && jobData.category.length > 255) {
            errors.category = "Category must not exceed 255 characters.";
        }

        // Opportunity (optional)
        if (jobData.opportunity && jobData.opportunity.length > 255) {
            errors.opportunity = "Opportunity must not exceed 255 characters.";
        }

        // Location (optional)
        if (jobData.location && jobData.location.length > 255) {
            errors.location = "Location must not exceed 255 characters.";
        }

        // Type (optional, must be one of the valid options)
        if (jobData.type && jobData.type.length > 255) {
            errors.type = "Invalid job type.";
        }

        // Status (optional, must be one of the valid options)
        if (jobData.status && jobData.status.length > 255) {
            errors.status = "Invalid job status.";
        }

        // Date (optional, can be any string but should be validated if needed)
        if (jobData.date && jobData.date.length > 20) {
            errors.date = "Date must not exceed 20 characters.";
        }

        // Person Name (optional)
        if (jobData.person && jobData.person.length > 255) {
            errors.person = "Contact person name must not exceed 255 characters.";
        }

        // Link (optional, should be a valid URL)
        if (jobData.link && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(jobData.link)) {
            errors.link = "Invalid URL format.";
        }

        return errors; // Return the validation errors
    };

    const isValidObjectId = (id) => {
        const objectIdRegex = /^[a-fA-F0-9]{24}$/;
        return objectIdRegex.test(id);
    };

    const saveRow = async (rowIndex) => {
        //console.log("Save button clicked for rowIndex:", rowIndex);
        const jobToSave = rows[rowIndex];
        //console.log("Job to save:", jobToSave);

        const token = Cookies.get('token'); // Retrieve the token
        const userId = Cookies.get('userId'); // Retrieve the userId from cookies

        if (!token || !userId) {
            setError("You must be logged in to save a job.");
            console.log("No token or userId found");
            return;
        }

        // Validate the userId (ensuring it's in a valid MongoDB ObjectId format)
        if (!isValidObjectId(userId)) {
            setError("Invalid User ID format.");
            console.log("Not matching with mongodb");
            return;
        }

        // Validate job data
        const errors = validateJob(jobToSave);
        if (Object.keys(errors).length > 0) { //Example: If errors = { jobTitle: "Job title is required", salary: "Invalid salary" }, Object.keys(errors) returns ["jobTitle", "salary"].
            // Show errors as toast notifications
            Object.values(errors).forEach(error => {
                toast.error(error); // Display each validation error as a toast
            });
            console.log("Validation errors:", errors);
            return; // Stop the function if there are validation errors
        }

        // Attach the userID to the job data
        const jobWithUserID = {
            ...jobToSave,
            userID: userId, // Add the userID to the job object
        };

        try {
            let response;

            if (jobWithUserID._id) {
                // Update existing job
                console.log("Updating existing job...");
                response = await api.put(`/api/jobs/${jobWithUserID._id}`, jobWithUserID, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("Job updated:", response.data);
                toast.success("Job updated successfully!")
            } else {
                // Create a new job
                console.log("Creating new job...");
                response = await api.post('/api/jobs', jobWithUserID, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("New job created:", response.data);
                toast.success("New job created Successfully!")
            }

            setFormErrors({}); // Clear validation errors on success

            // Call fetchJobs to refresh the job list
            fetchJobs(); // Refresh the job data after creating or updating the job
            toast.success("Job saved successfully!"); // Success toast

        } catch (error) {
            setError("Error saving or updating job.");
            console.error("Error:", error);
            toast.error("Error saving or updating job."); // Error toast
        }
    };

    // Add a new row (without backend interaction)
    const addNewRow = () => {
        const newJob = {
            company: "",
            role: "",
            category: "",
            opportunity: "",
            location: "",
            type: "",
            status: "",
            date: "",
            person: "",
            link: "",
        };
        setRows([...rows, newJob]);
    };

    // Delete a job by ID
    const deleteRow = async (rowIndex) => {
        const job = rows[rowIndex];

        // Check if the row has a valid _id before proceeding with the delete
        if (!job._id) {
            // If the job does not have an _id (i.e., it's a new empty row), just remove it from state
            setRows(rows.filter((_, index) => index !== rowIndex));
            return;
        }

        const jobId = job._id;
        const token = Cookies.get('token');

        if (!token) {
            setError("You must be logged in to delete a job.");
            return;
        }

        try {
            await api.delete(`/api/jobs/${jobId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setRows(rows.filter((_, index) => index !== rowIndex));  // Remove job from state
        } catch (error) {
            setError("Error deleting job.");
            console.error("Error deleting job:", error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-4 bg-tableBGColor rounded-lg shadow-md">
            {/* Filter Section */}
            <div className="flex justify-end mb-4">
                <div className="flex space-x-4">
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="custom-select border bg-[#EAEAEA] border-favoriteAccentColor rounded-md px-4 py-2 focus:outline-none"
                    >
                        <option value="company">Company</option>
                        <option value="role">Role</option>
                        <option value="category">Category</option>
                        <option value="opportunity">Opportunity</option>
                        <option value="location">Location</option>
                        <option value="type">Type</option>
                        <option value="status">Status</option>
                        <option value="date">Date</option>
                        <option value="person">In-touch Person</option>
                        <option value="link">Link</option>
                    </select>
                    <input
                        type="text"
                        placeholder={`Search by ${filterCategory}`}
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        className="search focus:outline-none w-64"
                    />
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto max-w-full border-s-favoriteAccentColor rounded-lg">
                <table className="table-auto w-full text-left border-collapse pb-5 pt-5">
                    <TableHeader />
                    <tbody>
                        {filteredRows && Array.isArray(filteredRows) && filteredRows.length > 0 ? (
                            filteredRows.map((row, rowIndex) => {
                                if (!row) return null;

                                return (
                                    <tr key={row._id || rowIndex} className="bg-tableBGColor">
                                        {Object.keys(row)
                                            .filter((field) => !['_id', 'userID'].includes(field)) // Exclude _id and userId
                                            .map((field, cellIndex) => (
                                                <td key={cellIndex} className="border px-4 py-2 relative">
                                                    <input
                                                        type="text"
                                                        value={row[field]}
                                                        onChange={(e) =>
                                                            handleInputChange(rowIndex, field, e.target.value)
                                                        }
                                                        className={`w-full bg-transparent focus:outline-none ${formErrors[field] ? "border-red-500" : ""
                                                            }`}
                                                        placeholder={`Enter ${field}`}
                                                    />
                                                    {/* Tooltip for displaying validation error */}
                                                    {formErrors[field] && (
                                                        <div className="absolute left-0 top-full mt-1 text-red-500 text-sm bg-white border border-red-500 rounded px-2 py-1 shadow-md">
                                                            {formErrors[field]}
                                                        </div>
                                                    )}
                                                </td>
                                            ))}
                                        <td>
                                            <button
                                                onClick={() => saveRow(rowIndex)}
                                                className="bg-green-500 text-white px-2 py-1 rounded"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => deleteRow(rowIndex)}
                                                className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="100%" className="text-center py-2">
                                    No jobs available
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
                <button
                    onClick={addNewRow}
                    className="mt-4 px-4 py-2 bg-primaryButtonColor text-textPrimaryColor rounded hover:bg-hoverButtonColor"
                >
                    + Add New Job
                </button>
            </div>
            <ToastContainer /> {/* Render ToastContainer here */}
        </div>
    );
};

export default JobTrackerTable;

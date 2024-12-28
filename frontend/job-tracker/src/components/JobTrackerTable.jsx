import React, { useState } from "react";
import '../styles/App.css';
import TableHeader from "./TableHeader";

const JobTrackerTable = () => {
    const [rows, setRows] = useState([
        {
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
        },
    ]);

    const [filterCategory, setFilterCategory] = useState("company");
    const [filterValue, setFilterValue] = useState("");

    const filteredRows = rows.filter((row) => {
        if (!filterValue) return true;
        return row[filterCategory]
            ?.toString()
            ?.toLowerCase()
            ?.includes(filterValue.toLowerCase());
    });

    const handleInputChange = (rowIndex, field, value) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex][field] = value;
        setRows(updatedRows);
    };

    const addNewRow = () => {
        setRows([
            ...rows,
            {
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
            },
        ]);
    };

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

            <div className="overflow-x-auto border-s-favoriteAccentColor rounded-lg">
                <table className="table-auto w-full text-left border-collapse pb-5 pt-5">
                    <TableHeader/>
                    <tbody>
                        {filteredRows.map((row, index) => (
                            <tr key={index} className="bg-tableBGColor">
                                {Object.keys(row).map((field, cellIndex) => (
                                    <td key={cellIndex} className="border px-4 py-2">
                                        <input
                                            type="text"
                                            value={row[field]}
                                            onChange={(e) =>
                                                handleInputChange(index, field, e.target.value)
                                            }
                                            className="w-full bg-transparent focus:outline-none"
                                            placeholder={`Enter ${field}`}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    onClick={addNewRow}
                    className="mt-4 px-4 py-2 bg-primaryButtonColor text-textPrimaryColor rounded hover:bg-hoverButtonColor"
                >
                    + Add New Job
                </button>
            </div>
        </div>
    );
};

export default JobTrackerTable;

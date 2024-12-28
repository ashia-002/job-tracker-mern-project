import React, { useState } from "react";
import '../styles/App.css';
import companyIcon from '../assets/tableicon/companyicon.svg';
import roleIcon from '../assets/tableicon/roleicon.svg';
import catagoryIcon from '../assets/tableicon/catagoryicon.svg';
import opportunityIcon from '../assets/tableicon/opportunityicon.svg';
import locationIcon from '../assets/tableicon/locationicon.svg';
import typeIcon from '../assets/tableicon/typeicon.svg';
import statusIcon from '../assets/tableicon/statusicon.svg';
import dateIcon from '../assets/tableicon/dateicon.svg';
import personIcon from '../assets/tableicon/personicon.svg';
import linkIcon from '../assets/tableicon/linkicon.svg';

const TableHeader = () => {
    return(
        <thead>
                    <tr className="bg-tableBGColor">
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={companyIcon} alt="Company Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Company</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={roleIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Role</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={catagoryIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Category</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={opportunityIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Opportunity</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={locationIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Location</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={typeIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Type</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={statusIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Status</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={dateIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Date</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={personIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">In-touch Person</span>
                                </div>
                            </th>
                            <th className="border px-4 py-2">
                                <div className="flex items-center">
                                    <img src={linkIcon} alt="Icon" className="w-6 h-6" />
                                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">Link</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
    );
};

export default TableHeader;
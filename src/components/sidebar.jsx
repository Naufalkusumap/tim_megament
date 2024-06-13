import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/styles.css'
import { FaMapMarkedAlt, FaHistory, FaRegClipboard } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

function Sidebar() {
    return (
        <div class="bg-custom text-black h-full w-64 border px-5 py-3">
            <ul class="space-y-4">
                <li class="py-2 px-4 flex items-center">
                    <MdDashboard class="mr-2" />
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <hr />
                <li class="py-2 px-4 flex items-center">
                    <FaRegClipboard class="mr-2" />
                    <Link to="/approval">Approval Asset</Link>
                </li>
                <hr />
                <li class="py-2 px-4 flex items-center">
                    <FaHistory class="mr-2" />
                    <Link to="/history">History</Link>
                </li>
                <hr />
                <li class="py-2 px-4 flex items-center">
                    <FaMapMarkedAlt class="mr-2" />
                    <Link to="/map">Map</Link>
                </li>
            </ul>
        </div>


    );
}

export default Sidebar;

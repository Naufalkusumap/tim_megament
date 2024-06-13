import React from "react";
import '../assets/css/styles.css'
import { FaBars } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
    return (
        <div className="w-full h-14 bg-custom z-50 flex items-center">
            <div className="flex items-center mx-5 w-full">
                <FaBars className="text-xl" />
                <div className="text-2xl font-bold text-red-700 font-poppins ml-4">Megament</div>
            </div>
            <div className="flex items-center mr-5 gap-5">
                <input
                    type="text"
                    placeholder="Search Here"
                    className="p-2 border rounded"
                />

                <FaUserCircle className="text-2xl"/>
                <div className="relative">
          <FaBell className="text-2xl" />
          <div className="absolute top-0 right-0 bg-red-500 rounded-full h-4 w-4 text-xs flex items-center justify-center text-white">
            12
          </div>
        </div>
            </div>
        </div>
    )
}

export default Navbar;
import React from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function Approval() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row flex-grow">
                <Sidebar />
                <div className="flex flex-col flex-grow p-8 bg-gray-100">
                    <div className="flex flex-col gap-2 pb-4">
                        <h1 className="text-4xl font-bold">Approval Asset</h1>
                        <p className="font-poppins">The following is a list of assets in the database</p>
                    </div>
                    <div className="bg-custom w-full flex-grow mt-4 rounded-xl p-4 flex flex-col shadow-md">
                        <div className="ml-4 mt-4 font-bold text-xl">
                            <h1>Table Asset</h1>
                        </div>
                        <div className="bg-gray-100 flex-grow m-4 rounded-xl p-4 shadow-md">
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Approval;
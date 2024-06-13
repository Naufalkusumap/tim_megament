import React, { useState } from 'react';
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { addAsset, uploadAssetImage, setAuthToken } from '../api/api'; // Pastikan jalur impor benar

const Form = () => {
    
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row flex-grow">
                <Sidebar />
                <div className="flex flex-col flex-grow p-8 bg-gray-100">
                    <div className="flex flex-col gap-2 pb-4">
                        <h1 className="text-4xl font-bold">Form</h1>
                        <p className="font-poppins">Isian Form Disini</p>
                    </div>
                    <div className="bg-custom w-full flex-grow mt-4 rounded-xl p-4 flex flex-col shadow-md">
                        <div className="bg-gray-100 flex-grow m-4 rounded-xl p-4 shadow-md">
                            {/* RESPONSIVE FORM START */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block mb-2">Nama</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Deskripsi</label>
                                    <input
                                        type="text"
                                        name="description"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Depreciation</label>
                                    <input
                                        type="text"
                                        name="depreciation"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Purchase Date</label>
                                    <input
                                        type="date"
                                        name="purchaseDate"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2">Product Photo</label>
                                    <input
                                        type="file"
                                        name="productPhoto"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            {/* RESPONSIVE FORM END */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import "../assets/css/styles.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

// GENERATE MODAL FOR ADD NEW ASSET FROM CHATGPT

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    assetName: "",
    description: "",
    depreciation: "",
    productPhoto: "",
    price: "",
    purchaseDate: "",
    qrCode: "",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <div className="flex flex-col flex-grow p-8 bg-gray-100">
          <div className="flex flex-col gap-2 pb-4">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <p className="font-poppins">
              The following is a list of assets in the database
            </p>
          </div>
          <div className="pt-6">
            <button
              className="px-4 py-2 bg-red-500 text-white text-xs rounded font-poppins"
              onClick={handleOpenModal}
            >
              + ADD NEW ASSET
            </button>
          </div>
          <div className="bg-custom w-full flex-grow mt-4 rounded-xl p-4 flex flex-col shadow-md">
            <div className="ml-4 mt-4 font-bold text-xl">
              <h1>Table Asset</h1>
            </div>
            <div className="bg-gray-100 flex-grow m-4 rounded-xl p-4 shadow-md">
              <div className="flex justify-end mb-4">
                <input
                  type="text"
                  placeholder="Search Here"
                  className="p-2 border rounded"
                />
              </div>
              <div className="overflow-auto">
                <table className="w-full border-collapse mt-5">
                  <thead>
                    <tr>
                      <th className="border border-gray-500 p-2">No.</th>
                      <th className="border border-gray-500 p-2">Asset Name</th>
                      <th className="border border-gray-500 p-2">
                        Description
                      </th>
                      <th className="border border-gray-500 p-2">
                        Depreciation
                      </th>
                      <th className="border border-gray-500 p-2">
                        Product Photo
                      </th>
                      <th className="border border-gray-500 p-2">Price</th>
                      <th className="border border-gray-500 p-2">
                        Purchase Date
                      </th>
                      <th className="border border-gray-500 p-2">QR Code</th>
                      <th className="border border-gray-500 p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-500 p-2">1</td>
                      <td className="border border-gray-500 p-2">Laptop</td>
                      <td className="border border-gray-500 p-2">
                        High-performance laptop
                      </td>
                      <td className="border border-gray-500 p-2">10%</td>
                      <td className="border border-gray-500 p-2">
                        [Product Photo]
                      </td>
                      <td className="border border-gray-500 p-2">$1000</td>
                      <td className="border border-gray-500 p-2">2024-06-05</td>
                      <td className="border border-gray-500 p-2">[QR Code]</td>
                      <td className="border border-gray-500 p-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 rounded mr-2">
                          <FaEdit className="inline-block text-md" /> Edit
                        </button>
                        <button className="border border-red-500 bg-gray-100 hover:bg-gray-200 text-red-500 text-sm py-1 px-2 rounded">
                          <FaTrashAlt className="inline-block" /> Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg w-1/3">
            <h2 className="text-2xl mb-4">Add New Asset</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Asset Name</label>
                <input
                  type="text"
                  name="assetName"
                  value={formData.assetName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Depreciation</label>
                <input
                  type="text"
                  name="depreciation"
                  value={formData.depreciation}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Product Photo</label>
                <input
                  type="text"
                  name="productPhoto"
                  value={formData.productPhoto}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Purchase Date</label>
                <input
                  type="text"
                  name="purchaseDate"
                  value={formData.purchaseDate}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">QR Code</label>
                <input
                  type="text"
                  name="qrCode"
                  value={formData.qrCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

const styles = {
  // Add your custom styles if needed
};

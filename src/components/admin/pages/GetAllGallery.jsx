"use client";
import { getAllGalleryAPI, deleteGalleryAPI } from "@/services/operation/admin";
import React, { useState, useEffect } from "react";

const GetAllGallery = () => {
  const [gallery, setGallery] = useState([]);

  const getAllGallery = async () => {
    const response = await getAllGalleryAPI();
    setGallery(response);
  };

  const deleteImage = async (id) => {
    try {
      await deleteGalleryAPI(id);
      getAllGallery();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  useEffect(() => {
    getAllGallery();
  }, []);

  return (
    <div className="bg-white">
      <br />
      <br />

      <div className="max-w-7xl mx-auto p-6">
        {/* Gallery Table */}
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gallery?.map((currElem) =>
              currElem?.images.map((item) => (
                <tr key={item.public_id} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      src={item?.url}
                      alt="Gallery Image"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-2">{currElem?.type}</td>
                  <td className="px-4 py-2">{currElem?.title}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => deleteImage(currElem?._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllGallery;

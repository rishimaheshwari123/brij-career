"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const GetContact = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/contact/getAll`
        );
        setApplications(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching applications:", error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <p>Loading applications...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Contact</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Contact</th>
              <th className="py-2 px-4 border">Message</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="text-center">
                <td className="py-2 px-4 border">{app.name}</td>
                <td className="py-2 px-4 border">{app.email}</td>
                <td className="py-2 px-4 border">{app.contact}</td>
                <td className="py-2 px-4 border">{app.message}</td>

                <td className="py-2 px-4 border">
                  {new Date(app.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetContact;

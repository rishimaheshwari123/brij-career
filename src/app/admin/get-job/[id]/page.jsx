"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";

const ApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/application/getAll/${id}`
        );
        console.log(response);
        setApplications(response.data.applications);
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
      <h2 className="text-xl font-bold text-center mb-4">All Applications</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Contact</th>
              <th className="py-2 px-4 border">Applied For</th>
              <th className="py-2 px-4 border">Resume</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="text-center">
                <td className="py-2 px-4 border">{app.name}</td>
                <td className="py-2 px-4 border">{app.email}</td>
                <td className="py-2 px-4 border">{app.contact}</td>
                <td className="py-2 px-4 border">{app.applicationFor}</td>
                <td className="py-2 px-4 border">
                  <a
                    href={`https://api.brijinternationalservices.com${app.resumeUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View Resume
                  </a>
                </td>
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

export default ApplicationsList;

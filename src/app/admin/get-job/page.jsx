"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetJob = () => {
  const [jobs, setJobs] = useState([]);
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/job/getAll`
        );
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const handleDeleteJob = async (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p className="text-gray-800 font-semibold">
            Do you want to delete the Job?
          </p>
          <div className="flex gap-4 mt-2">
            <button
              onClick={async () => {
                try {
                  await axios.delete(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/job/delete/${id}`
                  );
                  toast.success("Job deleted successfully!");
                  setJobs(jobs.filter((job) => job._id !== id));
                } catch (error) {
                  toast.error("Error deleting job!");
                  console.error("Error deleting job:", error);
                }
                closeToast();
              }}
              className="bg-red-600 text-white px-3 py-1 rounded-md"
            >
              Yes, Delete
            </button>
            <button
              onClick={closeToast}
              className="bg-gray-300 text-gray-800 px-3 py-1 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false }
    );
  };

  const toggleJobDetails = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        All Jobs
      </h2>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">No jobs available</p>
      ) : (
        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border border-gray-200 rounded-lg shadow-lg bg-white transition-all hover:shadow-xl overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleJobDetails(job._id)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {job.title}
                </h3>
                <div className="flex gap-5">
                  <button onClick={() => handleDeleteJob(job._id)}>
                    <MdDelete size={25} color="red" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    {expandedJob === job._id ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>
              </div>

              {expandedJob === job._id && (
                <div className="p-6 border-t border-gray-200">
                  <p className="text-gray-700">
                    {job.desc.split(".").map((sentence, index) => (
                      <span key={index}>
                        {sentence.trim()}
                        {index !== job.desc.split(".").length - 1 && <br />}
                      </span>
                    ))}
                  </p>

                  <div className="mt-4 space-y-2 text-gray-700">
                    <p>
                      <strong>Experience:</strong> {job.experience} years
                    </p>
                    <p>
                      <strong>Salary:</strong> ₹{job.salary}
                    </p>
                    <p>
                      <strong>Contact:</strong> {job.contact}
                    </p>
                  </div>

                  <Link href={`/admin/get-job/${job._id}`}>
                    <button className="mt-4 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition">
                      See Applicants
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetJob;

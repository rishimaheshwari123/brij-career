"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaPlus, FaMinus, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetJob = () => {
  const [jobs, setJobs] = useState([]);
  const [expandedJob, setExpandedJob] = useState(null);
  const [editJob, setEditJob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    contact: "",
    experience: "",
    salary: "",
  });

  // Fetch Jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/job/getAll`
        );
        setJobs(response.data.jobs);
        console.log(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  // Delete Job
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

  const handleEditClick = (job) => {
    setEditJob(job._id);
    setFormData({
      title: job.title,
      desc: job.desc,
      contact: job.contact,
      experience: job.experience,
      salary: job.salary,
    });
  };

  // Update Job
  const handleUpdateJob = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/job/update/${editJob}`,
        formData
      );
      toast.success("Job updated successfully!");

      setJobs(
        jobs.map((job) => (job._id === editJob ? response.data.job : job))
      );
      setEditJob(null);
    } catch (error) {
      toast.error("Error updating job!");
      console.error("Error updating job:", error);
    }
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
                  <button onClick={() => handleEditClick(job)}>
                    <FaEdit size={20} color="blue" />
                  </button>
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
                  <p className="text-gray-700">{job.desc}</p>
                  <div className="mt-4 space-y-2 text-gray-700">
                    <p>
                      <strong>experience:</strong> {job.experience} years
                    </p>
                    <p>
                      <strong>Salary:</strong> {job.salary}
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

      {/* Edit Job Modal */}
      {editJob && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Edit Job
            </h2>

            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full border p-2 rounded mb-3"
            />

            <label className="block text-gray-700">Description</label>
            <textarea
              value={formData.desc}
              onChange={(e) =>
                setFormData({ ...formData, desc: e.target.value })
              }
              className="w-full border p-2 rounded mb-3"
            />

            <label className="block text-gray-700">Contact</label>
            <input
              type="text"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              className="w-full border p-2 rounded mb-3"
            />

            <label className="block text-gray-700">experience (years)</label>
            <input
              type="text"
              value={formData.experience}
              onChange={(e) =>
                setFormData({ ...formData, experience: e.target.value })
              }
              className="w-full border p-2 rounded mb-3"
            />

            <label className="block text-gray-700">Salary</label>
            <input
              type="text"
              value={formData.salary}
              onChange={(e) =>
                setFormData({ ...formData, salary: e.target.value })
              }
              className="w-full border p-2 rounded mb-3"
            />

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setEditJob(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateJob}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetJob;

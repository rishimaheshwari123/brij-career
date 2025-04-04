"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";

const JobsPage = () => {
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

  const toggleJobDetails = (id) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-IN", options);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Available Jobs
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
              {/* Job Header */}
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleJobDetails(job._id)}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Posted on: {formatDate(job.createdAt)}
                  </p>
                </div>
                <button className="text-gray-600 hover:text-gray-900">
                  {expandedJob === job._id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>

              {expandedJob === job._id && (
                <div className="p-6 border-t border-gray-200">
                  <p className="text-gray-700">
                    {job.desc.split(".").map((sentence, index) => (
                      <span key={index}>
                        {sentence.trim()}
                        {index !== job.desc.split("..").length - 1 && <br />}
                      </span>
                    ))}
                  </p>

                  <div className="mt-4 space-y-2 text-gray-700">
                    <p>
                      <strong>Experience:</strong> {job.experience} years
                    </p>
                    <p>
                      <strong>Salary:</strong> {job.salary}
                    </p>
                    <p>
                      <strong>Contact:</strong> {job.contact}
                    </p>
                  </div>

                  <Link href={`/job/${job._id}`}>
                    <button className="mt-4 w-full bg-[#040232] text-white font-medium py-2 rounded-lg hover:text-black hover:bg-blue-400 transition">
                      Apply Now
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

export default JobsPage;

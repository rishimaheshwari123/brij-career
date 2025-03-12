"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
    applicationFor: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    Swal.fire({
      title: "Submitting...",
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => Swal.showLoading(),
    });

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/contact/career`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: "Success!",
          text: "Your application has been submitted.",
          icon: "success",
        });
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
          applicationFor: "",
          resume: null,
        });
      }
    } catch (error) {
      Swal.close();
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Something went wrong!",
        icon: "error",
      });
    }
  };

  return (
    <div className="my-40 px-5 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Career Form</h2>
      <form
        onSubmit={handleSubmit}
        className="grid gap-5"
        encType="multipart/form-data"
      >
        {["name", "email", "contact"].map((field) => (
          <div key={field}>
            <label className="block text-lg mb-2" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              name={field}
              className="w-full border border-gray-300 rounded-lg p-3 text-lg"
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-lg mb-2">Select Position</label>
          <select
            name="applicationFor"
            className="w-full border border-gray-300 rounded-lg p-3 text-lg"
            value={formData.applicationFor}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Position --</option>
            {[
              "React JS Developer",
              "Node.js Developer",
              "Frontend Developer",
              "Backend Developer",
              "Software Engineer",
              "UI/UX Designer",
              "Full Stack Developer",
              "MERN Stack Developer",
              "PHP Developer",
            ].map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-gray-300 rounded-lg p-3 text-lg"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg mb-2" htmlFor="resume">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            className="w-full border border-gray-300 rounded-lg p-3 text-lg"
            onChange={handleFileChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 text-lg rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CareerForm;

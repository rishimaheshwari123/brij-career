"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot, FaPhone, FaPaperPlane } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",

    message: "",
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Sending...",
      text: "Please wait while we process your request.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await axios.post(
        // "http://localhost:8080/api/v1/contact/send",
        "https://brij-career.onrender.com/api/v1/contact/send",
        formData
      );
      if (response?.data) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
      }
      setFormData({
        name: "",
        email: "",
        contact: "",

        message: "",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Try again later.",
        icon: "error",
      });
    }
  };

  if (!isClient) return null;
  return (
    <div className="mt-40 w-11/12 mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 my-20 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#040232] text-white rounded-full text-xl">
              <FaLocationDot />
            </span>
            <span className="text-gray-700">Address</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#040232] text-white rounded-full text-xl">
              <FaPhone />
            </span>
            <span className="text-gray-700"> +91 6262 555 075</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#040232] text-white rounded-full text-xl">
              <MdEmail />
            </span>
            <span className="text-gray-700"> brij.dubai@gmail.com</span>
          </div>
        </div>

        <form
          className="bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-md outline-none focus:border-[#00BFB3]"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-md outline-none focus:border-[#00BFB3]"
            />
          </div>
          <div className="grid  gap-4 mt-4">
            <input
              type="text"
              placeholder="Phone"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="p-3 border rounded-md outline-none focus:border-[#00BFB3]"
            />
          </div>

          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md outline-none focus:border-[#00BFB3] w-full mt-4 h-28"
          ></textarea>
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#040232] text-white px-5 py-3 rounded-md mt-4 w-full justify-center hover:bg-teal-600 transition-all"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

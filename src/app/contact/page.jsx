"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot, FaPhone, FaPaperPlane } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import Link from "next/link";
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
        `${process.env.NEXT_PUBLIC_BASE_URL}/contact/send`,
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
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.21117824244!2d72.90676447886662!3d19.119299935925383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7ef719573df%3A0xb36e66248a9ae89e!2sGalleria%20Shopping%20Mall%2C%20Central%20Ave%2C%20Hiranandani%20Gardens%2C%20Panchkutir%20Ganesh%20Nagar%2C%20Powai%2C%20Mumbai%2C%20Maharashtra%20400076!5e1!3m2!1sen!2sin!4v1741758362786!5m2!1sen!2sin"
        allowFullScreen
        className="w-full h-96 rounded-lg shadow-lg"
        loading="lazy"
      ></iframe>

      <div className="grid lg:grid-cols-2 gap-10  my-20 items-center max-w-7xl mx-auto p-5">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#040232] text-white rounded-full text-xl">
              <FaLocationDot />
            </span>
            <span className="text-gray-700">
              AddrOffice 510, B wing, Galleria Complex, Hiranandani Gardens,
              Powai, Mumbai 400076ess
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#040232] text-white rounded-full text-xl">
              <FaPhone />
            </span>
            <span className="text-gray-700"> 91 9202553151</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-3 bg-[#040232] text-white rounded-full text-xl">
              <MdEmail />
            </span>
            <span className="text-gray-700">
              {" "}
              HR@brijinternationalservices.com
            </span>
          </div>
          <div className="flex space-x-4 mx-auto justify-center">
            <Link
              href="https://www.facebook.com/profile.php?id=61574107173934&mibextid=wwXIfr&mibextid=wwXIfr"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-10 w-10" />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href="https://www.instagram.com/brij_international_service_?igsh=MWYxb3hjbGdlNTJ5NQ%3D%3D&utm_source=qr"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-10 w-10" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.google.com/maps?q=Office+510,+B+wing,+Galleria+Complex,+Hiranandani+Gardens,+Powai,+Mumbai+400076&z=17&hl=en"
              className="text-muted-foreground hover:text-foreground"
            >
              <MapPin className="h-10 w-10" />
              <span className="sr-only">Map</span>
            </Link>
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

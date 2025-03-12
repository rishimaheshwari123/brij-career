"use client";

import { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-300 z-50 bg-white  ${
        isScrolled
          ? "fixed top-0 left-0 right-0 w-full shadow-lg"
          : "max-w-[92%] mx-auto fixed top-12 left-0 right-0 rounded-lg"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6  py-2">
        <div className="flex justify-between items-center">
          {/* Logo and Mobile Menu Button */}
          <div className="flex justify-between w-full lg:w-auto items-center">
            <Image
              src={logo}
              alt="not found"
              className="lg:w-[70px] w-[45px]"
            />

            <button
              className="lg:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium ">
            <li className="cursor-pointer hover:text-blue-400 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">
              <Link href="/employers">Employers</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">
              <Link href="/candidates">Candidates</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">
              <Link href="/job">Job</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">
              <Link href="/contact">Contact</Link>
            </li>
            {/* <li
              className="relative cursor-pointer group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center gap-1 text-[#00BFB3]">
                <span>Services</span>
                <FiChevronDown className="w-4 h-4" />
              </div>
              <div
                className={`fixed left-16 right-0 max-w-7xl bg-white shadow-xl border-t border-gray-100 transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <ServiceCard
                    icon="🩺"
                    title="Interventional Cardiology"
                    description="Interventional Cardiology is a branch of cardiology that focuses on diagnosing and treating cardiovascular diseases using catheter-based techniques"
                    href="/interventional-cardiology"
                  />
                  <ServiceCard
                    icon="🦵"
                    title="Diagnostic Services"
                    description="Diagnostic services in cardiology involve non-invasive and minimally invasive tests that allow us to evaluate your heart's condition."
                    href="/copy-of-interventional-cardiology"
                  />
                  <ServiceCard
                    icon="❤️"
                    title="Patient Education"
                    description="Understanding your heart health is crucial to making the right choices for your well-being. Through patient education, we provide you with"
                    href="/copy-of-diagnostic-services"
                  />
                  <ServiceCard
                    icon="❤️"
                    title="Preventive Cardiology"
                    description="Preventive care focuses on identifying and managing risk factors before they lead to serious heart conditions. This proactive approach helps you maintain optimal heart health and avoid potentially life-threatening events such as heart attacks, strokes, and heart failure."
                    href="/copy-of-patient-education"
                  />
                  <ServiceCard
                    icon="❤️"
                    title="Telehealth Services "
                    description="Telehealth allows you to meet with your healthcare provider remotely through secure video calls, phone calls, or other digital platforms. This technology ensures that you receive high-quality medical care from the comfort and safety of your home, especially if you're managing a chronic condition, have mobility issues, or are looking to avoid unnecessary trips to the clinic."
                    href="/copy-of-patient-education-1"
                  />
                </div>
              </div>
            </li> */}
          </ul>

          {/* Contact & Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <FiPhone className="w-5 h-5" />
              <a href="tel:+916262555075" className="font-medium">
                +91 6262 555 075
              </a>
            </div>
            <div className="flex gap-4">
              <Link
                href={"/contact"}
                className="bg-blue-400 text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
              >
                Schedule an contact
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="lg:hidden absolute top-16 left-0 w-full bg-white z-50 shadow-lg p-6 max-h-[80vh] overflow-y-auto">
            <li>
              <Link href="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/employers" className="block py-2">
                Employers
              </Link>
            </li>
            <li>
              <Link href="/candidates" className="block py-2">
                Candidates
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/job" className="block py-2">
                Job
              </Link>
            </li>
            {/* <li>
              <button
                className="flex items-center gap-2 w-full py-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <FiChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="ml-4 space-y-3 ">
                  <ServiceCard
                    icon="🩺"
                    title="Interventional Cardiology"
                    description="Interventional Cardiology is a branch of cardiology that focuses on diagnosing and treating cardiovascular diseases using catheter-based techniques"
                    href="/interventional-cardiology"
                  />
                  <ServiceCard
                    icon="🦵"
                    title="Diagnostic Services"
                    description="Diagnostic services in cardiology involve non-invasive and minimally invasive tests that allow us to evaluate your heart's condition."
                    href="/copy-of-interventional-cardiology"
                  />
                  <ServiceCard
                    icon="❤️"
                    title="Patient Education"
                    description="Understanding your heart health is crucial to making the right choices for your well-being. Through patient education, we provide you with"
                    href="/copy-of-diagnostic-services"
                  />
                  <ServiceCard
                    icon="❤️"
                    title="Preventive Cardiology"
                    description="Preventive care focuses on identifying and managing risk factors before they lead to serious heart conditions. This proactive approach helps you maintain optimal heart health and avoid potentially life-threatening events such as heart attacks, strokes, and heart failure."
                    href="/copy-of-patient-education"
                  />
                  <ServiceCard
                    icon="❤️"
                    title="Telehealth Services "
                    description="Telehealth allows you to meet with your healthcare provider remotely through secure video calls, phone calls, or other digital platforms. This technology ensures that you receive high-quality medical care from the comfort and safety of your home, especially if you're managing a chronic condition, have mobility issues, or are looking to avoid unnecessary trips to the clinic."
                    href="/copy-of-patient-education-1"
                  />
                </div>
              )}
            </li> */}

            <li>
              <div className="flex items-center gap-2 my-2">
                <FiPhone className="w-5 h-5" />
                <span href="tel:+916262555075" className="font-medium">
                  +91 6262 555 075
                </span>
              </div>
            </li>

            <div className="flex gap-4">
              <Link
                href={"/contact"}
                className="bg-[#00BFB3] text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
              >
                Schedule an contact
              </Link>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

const ServiceCard = ({ icon, title, description, href }) => (
  <Link
    href={href}
    className="group block p-4 rounded-lg hover:bg-[#00BFB3] transition-all"
  >
    <div className="flex items-start gap-4">
      <span className="text-3xl">{icon}</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  </Link>
);

export default Navbar;

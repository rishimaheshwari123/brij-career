"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";

import logo from "@/assets/logo.png";
const Footer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <footer className="bg-[#040232] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src={logo} alt="not found" className="w-[70px]" />

          <p className="text-white mt-3">
            Office 510, B wing, Galleria Complex, Hiranandani Gardens, Powai,
            Mumbai 400076
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-white">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/employers" className="hover:text-white">
                Employers
              </Link>
            </li>
            <li>
              <Link href="/candidates" className="hover:text-white">
                Candidates
              </Link>
            </li>
            <li>
              <Link href="/job" className="hover:text-white">
                Job
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
          <p className="flex items-center gap-2 text-white">
            <FaPhoneAlt /> 91 9202553151
          </p>
          <p className="flex items-center gap-2 text-white">
            <MdOutlineMail /> brij.dubai@gmail.com
          </p>

          <p className="flex items-start gap-2 text-white mt-4">
            <FaMapMarkerAlt className="mt-1" />
            Office 510, B wing, Galleria Complex, Hiranandani Gardens, Powai,
            Mumbai 400076
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-gray-700 pt-6 text-center text-white">
        <p>Developed By I Next Ets </p>
        <Link href="#" className="hover:text-white">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SiMaplibre } from "react-icons/si";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const TopHeader = () => {
  return (
    <>
      <Fade direction="right" triggerOnce>
        <div className="bg-[#040232] text-white p-3 hidden md:block h-[50px] ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 px-4">
            <div className="flex flex-wrap items-center space-x-6">
              {/* <Zoom triggerOnce>
                <div className="flex items-center space-x-2">
                  <FiMapPin className="text-xl text-red-600 animate-pulse" />
                  <span className="font-semibold">
                    Office 510, B wing, Galleria Complex, Hiranandani Gardens,
                    Powai, Mumbai 400076
                  </span>
                </div>
              </Zoom> */}
              <Zoom triggerOnce delay={100}>
                <div className="hidden md:flex items-center space-x-2">
                  <FiPhone className="text-xl text-green-600" />
                  <a
                    href="tel:+919202553151"
                    className="font-semibold hover:underline"
                  >
                    91 9202553151
                  </a>
                </div>
              </Zoom>

              <Zoom triggerOnce delay={200}>
                <div className="flex items-center space-x-2">
                  <FiMail className="text-xl text-blue-600" />
                  <a
                    href="mailto:HR@brijinternationalservices.com"
                    className="font-semibold hover:underline"
                  >
                    HR@brijinternationalservices.com{" "}
                  </a>
                </div>
              </Zoom>
            </div>

            <div className="flex space-x-4">
              <Zoom triggerOnce>
                <Link href="/" aria-label="Facebook">
                  <FaFacebook
                    size={22}
                    className="text-blue-600 hover:scale-125 transition-transform duration-300"
                  />
                </Link>
              </Zoom>
              <Zoom triggerOnce delay={100}>
                <Link href="/" aria-label="Instagram">
                  <FaInstagram
                    size={22}
                    className="text-pink-600 hover:scale-125 transition-transform duration-300"
                  />
                </Link>
              </Zoom>
              {/* <Zoom triggerOnce delay={200}>
                <Link
                  href="https://www.youtube.com/user/Wix"
                  aria-label="YouTube"
                >
                  <FaYoutube
                    size={22}
                    className="text-red-600 hover:scale-125 transition-transform duration-300"
                  />
                </Link>
              </Zoom> */}
              <Zoom triggerOnce delay={300}>
                <Link
                  href="https://www.google.com/maps?q=Office+510,+B+wing,+Galleria+Complex,+Hiranandani+Gardens,+Powai,+Mumbai+400076&z=17&hl=en"
                  aria-label="Map"
                >
                  <SiMaplibre
                    size={22}
                    className="text-green-600 hover:scale-125 transition-transform duration-300"
                  />
                </Link>
              </Zoom>
            </div>
          </div>
        </div>
      </Fade>

      {/* Mobile Header */}
      <div className="bg-[#c5dee4] text-black p-4 md:hidden">
        <div className="flex flex-wrap items-center justify-between space-x-4">
          <div className="flex items-center space-x-2">
            <FiMail className="text-xl text-blue-600" />
            <a
              href="mailto:HR@brijinternationalservices.com"
              className="font-semibold hover:underline"
            >
              HR@brijinternationalservices.com{" "}
            </a>
          </div>
        </div>

        <div className="flex justify-between mt-3">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-xl text-green-600" />
            <a
              href="tel:+919202553151"
              className="font-semibold hover:underline"
            >
              91 9202553151
            </a>
          </div>

          <div className="flex space-x-4">
            <Zoom triggerOnce>
              <Link href="" aria-label="Facebook">
                <FaFacebook
                  size={22}
                  className="text-blue-600 hover:scale-125 transition-transform duration-300"
                />
              </Link>
            </Zoom>
            <Zoom triggerOnce delay={100}>
              <Link href="" aria-label="Instagram">
                <FaInstagram
                  size={22}
                  className="text-pink-600 hover:scale-125 transition-transform duration-300"
                />
              </Link>
            </Zoom>

            <Zoom triggerOnce delay={300}>
              <Link
                href="https://www.google.com/maps?q=Office+510,+B+wing,+Galleria+Complex,+Hiranandani+Gardens,+Powai,+Mumbai+400076&z=17&hl=en"
                aria-label="Map"
              >
                <SiMaplibre
                  size={22}
                  className="text-green-600 hover:scale-125 transition-transform duration-300"
                />
              </Link>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;

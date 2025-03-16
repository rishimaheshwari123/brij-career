import { FaBuilding, FaMapMarkerAlt, FaUserTie, FaGlobe } from "react-icons/fa";
import anand from "@/assets/anand.png";
import brij from "@/assets/brij.jpg";
import prachi from "@/assets/prachi.jpg";
import mustfa from "@/assets/mustfa.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <br />
      <br />
      <br />
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-[#040232] tracking-wide">
          Brij International Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto flex items-center justify-center mt-4">
          Bridging the gap between skilled professionals and global businesses.
        </p>
      </div>

      {/* Introduction */}
      <div className="mt-10 text-center max-w-4xl mx-auto text-gray-800 text-lg leading-relaxed">
        <p>
          Brij International Services is a premier recruitment agency in India,
          dedicated to ethically outsourcing talented professionals worldwide.
          For over 8 years, we have been connecting businesses with skilled
          individuals, ensuring the right person for the right job.
        </p>
        <p className="mt-4">
          Our commitment to ethical hiring and a meticulous recruitment process
          makes us a trusted partner for global businesses. We align with our
          clients and candidates, eliminating unethical procedures and ensuring
          a seamless recruitment experience.
        </p>
      </div>

      {/* Company Management */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-[#040232] text-center mb-10">
          Company Management
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Mr. Brijesh Tiwari",
              role: "Founder - Brij International Services",
              image: brij,
            },
            {
              name: "Mrs. Prachi",
              location: "Mumbai, India",
              role: "CEO - Brij International Services",
              image: prachi,
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 max-w-sm text-center"
            >
              <Image
                src={person.image}
                alt={person.name}
                className="w-64 h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                {person.location && (
                  <p className="text-sm text-gray-500 mt-1">
                    {person.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Partners */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-[#040232] text-center mb-10">
          Strategic Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              name: "Mr. Mustafa Belkhayate",
              location: "Morocco",
              role: "Hydrokken - Strategic Partner",
              image: mustfa,
            },
            {
              name: "Mr. Anand Kumar Jha",
              location: "Dubai, UAE",
              role: "Rshmy Technical Services - Strategic Partner",
              image: anand,
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 max-w-sm text-center"
            >
              <Image
                src={person.image}
                alt={person.name}
                className="w- h-[50vh] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.role}</p>
                {person.location && (
                  <p className="text-sm text-gray-500 mt-1">
                    {person.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Locations */}
      <div className="mt-20">
        <h2 className="text-4xl font-bold text-[#040232] text-center flex justify-center items-center gap-2">
          <FaBuilding className="text-[#040232]" /> Our Offices
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              location: "Mumbai, India",
              address:
                "Office 510, B Wing, Galleria Complex, Hiranandani Gardens, Powai, Mumbai 400076",
            },
            {
              location: "Bhopal, India",
              address:
                "404, Wing B4, Katara Hills, Bhopal (MP) - India, 462002",
            },
            {
              location: "Dubai, UAE",
              address: "Nooraniyah, Office No.:152, Abu Hail ,Dubai UAE",
            },
          ].map((office, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg border-l-4 border-[#040232] transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaMapMarkerAlt className="text-[#040232] mr-2" />{" "}
                {office.location}
              </h3>
              <p className="text-gray-600 mt-2">{office.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recruitment Info */}
      <div className="mt-20 text-center">
        <p className="text-lg font-semibold text-gray-800 bg-blue-100 p-4 rounded-lg shadow-md inline-block">
          🚀 We specialize in ethical and transparent global recruitment
          services.
        </p>
      </div>
    </div>
  );
}

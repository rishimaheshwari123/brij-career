import { FaBuilding, FaMapMarkerAlt, FaUserTie, FaGlobe } from "react-icons/fa";
import anand from "@/assets/anand.jpg";
import brij from "@/assets/brij.jpg";
import prachi from "@/assets/prachi.jpg";
import mustfa from "@/assets/mustfa.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-12 px-6 mt-20">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-[#040232] mb-4">
          Brij International Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          <FaGlobe className="inline-block text-[#040232] mr-2" />
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

      {/* Partners Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[#040232] text-center">
          Strategic Partners
        </h2>
        <div className="mt-10 grid md:grid-cols-4 gap-8">
          {[
            {
              name: "Mr. Brijesh Tiwari",
              location: "",
              role: "Founder - Brij International Services",
              image: brij,
            },
            {
              name: "Mrs. Prachi",
              location: "Mumbai, India",
              role: "CEO - Brij International Services",
              image: prachi,
            },
            {
              name: "Mr. Anand Kumar Jha",
              location: "Dubai, UAE",
              role: "Rshmy Technical Services - Strategic Partner",
              image: anand,
            },
            {
              name: "Mr. Mustafa Belkhayate",
              location: "Morocco",
              role: "Hydrokken - Strategic Partner",
              image: mustfa,
              is: true,
            },
          ].map((partner, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 h-[55vh] flex flex-col"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                className={`w-full h-[45vh] object-cover`}
              />
              <div className="bg-gray-800 text-white text-center p-3 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold">{partner.name}</h3>
                <p className="text-sm font-medium">{partner.role}</p>
                <p className="text-sm">{partner.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Locations */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[#040232] text-center">
          <FaBuilding className="inline-block mr-2" /> Our Offices
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
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
          ].map((office, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300"
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
      <div className="mt-16 text-center">
        <p className="text-lg font-semibold text-gray-800 bg-blue-100 p-4 rounded-lg shadow-md">
          🚀 We specialize in ethical and transparent global recruitment
          services.
        </p>
      </div>
    </div>
  );
}

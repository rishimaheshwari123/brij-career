import { FaBuilding, FaMapMarkerAlt, FaUserTie, FaGlobe } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className=" min-h-screen max-w-7xl mx-auto py-10 px-6 mt-20">
      {/* Main Container */}
      <div className=" bg-white  p-8">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#040232] text-center mb-2">
          Brij International Services
        </h1>
        <p className="text-lg text-gray-700 text-center">
          <FaGlobe className="inline-block text-[#040232] mr-2" />
          Strategic Partners from across the Globe
        </p>

        {/* Partners Section */}

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { name: "Mr. Fayze", location: "Dubai" },
            { name: "Mr. Mustafa Belkhayate", location: "Morocco" },
            { name: "Mr. Gaybean", location: "Spain" },
          ].map((partner, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-5 rounded-lg text-center transform hover:scale-105 transition duration-300"
            >
              <FaUserTie className="text-[#040232] text-3xl mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                {partner.name}
              </h3>
              <p className="text-gray-600">{partner.location}</p>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        {/* Office Locations */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-[#040232] text-center">
            <FaBuilding className="inline-block mr-2" />
            Our Offices
          </h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Mumbai Office */}
            <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaMapMarkerAlt className="text-[#040232] mr-2" /> Mumbai, India
              </h3>
              <p className="text-gray-600 mt-2">
                Office 510, B Wing, Galleria Complex, <br />
                Hiranandani Gardens, Powai, Mumbai 400076
              </p>
            </div>

            {/* Bhopal Office */}
            <div className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                <FaMapMarkerAlt className="text-[#040232] mr-2" /> Bhopal, India
              </h3>
              <p className="text-gray-600 mt-2">
                404, Wing B4, Katara Hills, <br />
                Bhopal (MP) - India, 462002
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* Recruitment Info */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-800 bg-blue-100 p-4 rounded-lg shadow-md">
            🚀 We specialize in **recruitment services** globally.
          </p>
        </div>
      </div>
    </div>
  );
}

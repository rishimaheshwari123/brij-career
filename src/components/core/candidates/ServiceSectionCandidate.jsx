import Image from "next/image";
import handshakeImage from "@/assets/s5.jpg"; // Replace with actual image path
import { FaChevronRight } from "react-icons/fa";

const points = [
  "Career advice, interview preparation, CV writing, visa guidance",
  "Job search assistance, resumé submission, interview preparation",
  "Overseas job opportunities in over 100 countries around the world",
  "Assistance with relocation and accommodation options abroad",
  "Personalized service from start to finish",
];

export default function ServiceSectionCandidate() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        <div>
          <Image
            src={handshakeImage}
            alt="Handshake"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find and reach your dream job
          </h2>
          <div className="mt-6 space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
                  <FaChevronRight size={14} />
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import handshakeImage from "@/assets/s4.jpg"; // Replace with actual image path
import { FaChevronRight } from "react-icons/fa";

const points = [
  "Turnkey Recruitment and Large Volume Hiring",
  "Rapidly expanding to Malaysia, Africa and other countries",
  "Robust recruitment processes to avoid time lags",
  "Strategic partners offering end to end recruitment solutions",
  "Experts in documentation, visa and immigration services",
];

export default function ServiceSection2() {
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
            What can Brij International Jobs do for You?
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

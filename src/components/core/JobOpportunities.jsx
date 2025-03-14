"use client";
import job from "@/assets/hero.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function JobOpportunities() {
  const locations = [
    { city: "Bahrain", country: "Bahrain" },
    { city: "Dubai", country: "UAE" },
    { city: "Doha", country: "Qatar" },
    { city: "Riyadh", country: "Saudi Arabia" },
    { city: "Kuwait City", country: "Kuwait" },
  ];

  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0E1621] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section with Full Height */}
        <div className="relative w-full md:w-1/2 h-full min-h-[500px]">
          <Image
            src={job}
            alt="Job Opportunities"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-6">
            Discover overseas job opportunities in{" "}
            <span className="text-blue-400">
              {locations[locationIndex].city},{" "}
              {locations[locationIndex].country}
            </span>
          </h2>

          {/* Job Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Banking",
              "Engineering",
              "Telecom",
              "Medical",
              "Oil and Gas",
              "Financial Services",
              "Construction",
              "Hospitality",
              "Insurance",
              "IT",
              "Automotive",
              "Travel",
              "Logistics",
              "Infrastructure",
              "FMCG",
              "Retail",
              "Pharmaceuticals",
            ].map((job, index) => (
              <div key={index} className="flex items-center gap-2 text-lg">
                <span className="text-[#040232]">➜</span>
                {job}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

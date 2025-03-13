"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import womenWithTablet from "@/assets/career.jpg"; // Replace with actual image path

const faqs = [
  {
    question: "Success starts here",
    answer:
      "We're not like other agencies that are only focused on getting you a job or visa. We're here to help you achieve your goals and live your dream. You'll get advice from experts on how to secure a better future for yourself - be it abroad or in India.",
  },
  {
    question: "International experience is worth it",
    answer:
      "The world is shrinking day by day with all the advancements in technology, making it much easier for people to work abroad. With our help, you can find the perfect opportunity and explore the world without having to worry about anything else.",
  },
  {
    question: "Start your journey today",
    answer:
      "We're here for you every step of the way - from finding a company that's right for you and your goals, to getting a visa that's accepted worldwide. All you have to do is fill out our form and we'll take care of the rest!",
  },
];

export default function CareerSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Brij International Jobs is the leading overseas career counseling
            firm for job opportunities in{" "}
            <span className="text-[#040232]">
              {locations[locationIndex].city},{" "}
              {locations[locationIndex].country}
            </span>
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md cursor-pointer transition"
              >
                {/* Question */}
                <div
                  className="flex items-center justify-between px-6 py-4 rounded-full hover:bg-gray-100"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-gray-700 font-medium">{faq.question}</p>
                  <div className="text-gray-700">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src={womenWithTablet}
            alt="Career Counseling"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

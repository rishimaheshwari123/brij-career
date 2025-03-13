import Contact from "@/components/core/Contact";
import ExpertiseSection from "@/components/core/ExpertiseSection";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="h-20"></div>
      <div className="text-center my-16">
        <p className="font-bold text-2xl lg:text-4xl">
          Going global has never been easier
        </p>
        <br />
        <p>
          We offer a range of services to help you find your dream job abroad,
          including career counseling, job search, visa guidance and more
        </p>
      </div>
      <ExpertiseSection />
      <Contact />
    </div>
  );
};

export default page;

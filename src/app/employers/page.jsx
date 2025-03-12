import Contact from "@/components/core/Contact";
import EmpHere from "@/components/core/employers/EmpHere";
import ServiceSection2 from "@/components/core/employers/ServiceSection2";
import ServicesSection from "@/components/core/employers/ServicesSection";
import JobOpportunities from "@/components/core/JobOpportunities";
import React from "react";

const page = () => {
  return (
    <div>
      <EmpHere />
      <ServicesSection />
      <ServiceSection2 />
      <JobOpportunities />
      <Contact />
    </div>
  );
};

export default page;

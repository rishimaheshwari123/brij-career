import CandidatesHero from "@/components/core/candidates/CandidatesHero";
import CareerSection from "@/components/core/candidates/CareerSection";
import ServiceSectionCandidate from "@/components/core/candidates/ServiceSectionCandidate";
import StatsSection from "@/components/core/candidates/StatsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CandidatesHero />
      <CareerSection />
      <StatsSection />
      <ServiceSectionCandidate />
    </div>
  );
};

export default page;

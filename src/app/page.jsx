import ExpertiseSection from "@/components/core/ExpertiseSection";
import HeroSection from "@/components/core/HeroSection";
import JobOpportunities from "@/components/core/JobOpportunities";
import OurClients from "@/components/core/OurClients";

const page = () => {
  return (
    <div className="">
      <HeroSection />
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
      <OurClients />

      <div className="text-center my-16">
        <p className="font-bold text-2xl lg:text-4xl">Find your perfect fit</p>
        <br />
        <p>
          We offer a range of services to help you find your dream job abroad,
          including career counseling, job search, visa guidance and more
        </p>
      </div>

      <JobOpportunities />
    </div>
  );
};

export default page;

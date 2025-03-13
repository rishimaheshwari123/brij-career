import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-[#00a0aa]/30 ">
      <div className=" w-[98vw] top-0 lg:rounded-br-[250px] overflow-hidden -z-50 ">
        <video autoPlay muted loop className="w-full h-[90vh] object-cover">
          <source src="/slider.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-[98vw] lg:rounded-br-[250px] bg-black bg-opacity-65"></div>

        <div
          className="absolute inset-0 flex flex-col justify-center mt-20 px-6 lg:px-16 text-white  
        lg:items-start lg:text-left sm:items-center sm:text-center"
        >
          <h1 className="text-4xl lg:text-6xl font-bold ">
            Feel local. Go global.
          </h1>
          <br />
          <br />
          <p className="text-lg lg:text-xl mt-2 max-w-lg">
            It's not just about finding you a job. When it comes to overseas
            career counseling and visa guidance, no one does it better than us.
          </p>

          <br />
          <br />
          <div className="mt-4 flex flex-col lg:flex-row gap-2">
            <Link
              href={"/job"}
              className="bg-[#040232] text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
            >
              Find Your Perfect Job{" "}
            </Link>
            <a
              href="tel:+91 6262 555 075"
              className="bg-[#040232] text-center text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
            >
              +91 6262 555 075
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

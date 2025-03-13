import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-[#00a0aa]/30">
      <div className="w-[98vw] top-0 lg:rounded-br-[250px] overflow-hidden -z-50">
        <video autoPlay muted loop className="w-full h-[90vh] object-cover">
          <source src="/slider.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 w-[98vw] lg:rounded-br-[250px] bg-black bg-opacity-65"></div>

        <div
          className="absolute inset-0 flex flex-col justify-center mt-10 px-6 lg:px-16 text-white  
          lg:items-start lg:text-left sm:items-center sm:text-center"
        >
          {/* "Your Career House Since 2017" Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Your <span className="text-[#c0915a]">Career House</span>
            </h2>
            <h3 className="text-2xl lg:text-4xl font-semibold text-white mt-1">
              Since 2017
            </h3>
          </div>

          <br />

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-4">
            Feel local. Go global.
          </h1>

          <br />

          {/* Description */}
          <p className="text-lg lg:text-xl mt-2 max-w-lg text-white">
            Our mission is to bridge the gap between skilled professionals and
            global businesses
          </p>

          <br />

          {/* Buttons */}
          <div className="mt-4 flex flex-col lg:flex-row gap-2">
            <Link
              href={"/job"}
              className="bg-[#040232] text-center text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
            >
              Find Your Perfect Job
            </Link>
            <a
              href="tel:919202553151"
              className="bg-[#040232] text-center text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
            >
              91 9202553151
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

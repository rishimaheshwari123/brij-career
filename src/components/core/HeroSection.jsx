import Link from "next/link";
import React from "react";
import Image from "next/image";
import backgroundImage from "@/assets/emp.jpg"; // Ensure correct path

const HeroSection = () => {
  return (
    <div className="relative bg-[#00a0aa]/30">
      <div className="relative w-[98vw] h-[90vh] lg:rounded-br-[250px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Team Meeting"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div
          className="absolute inset-0 flex flex-col justify-center mt-10 px-6 lg:px-16 text-white  
          lg:items-start lg:text-left sm:items-center sm:text-center"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Your <span className="text-[#c0915a]">Career House</span>
            </h2>
            <h3 className="text-2xl lg:text-4xl font-semibold text-white mt-1">
              Since 2017
            </h3>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-4">
            Feel local. Go global.
          </h1>

          <p className="text-lg lg:text-xl mt-2 max-w-lg text-white">
            Our mission is to bridge the gap between skilled professionals and
            global businesses.
          </p>

          <div className="mt-4 flex flex-col lg:flex-row gap-2">
            <Link
              href="/job"
              className="bg-[#040232] text-center text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
            >
              Find Your Perfect Job
            </Link>
            <a
              href="tel:919202553151"
              className="bg-[#040232] text-center text-white px-6 py-2.5 rounded-md hover:bg-[#00a69b] transition-colors font-medium"
            >
              +91 9202553151
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

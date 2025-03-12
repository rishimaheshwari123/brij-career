import Image from "next/image";
import backgroundImage from "@/assets/candidate.jpg";
import Link from "next/link";

export default function CandidatesHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-start bg-black/50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Team Meeting"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Make your move to a better life{" "}
        </h1>
        <p className="text-lg md:text-xl mb-6">
          At Brij International Jobs, we empower people with the opportunity to
          pursue their dreams and make a move to better life.
        </p>
        <br />
        <Link
          href={"/job"}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
        >
          Find Your Perfect Job →
        </Link>
      </div>
    </section>
  );
}

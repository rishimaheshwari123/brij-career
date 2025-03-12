import Image from "next/image";
import bg from "@/assets/bg1.jpg";
import Link from "next/link";
export default function ExpertiseSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative text-center">
        <h3 className="text-lg text-blue-400 font-semibold">What We Do</h3>
        <h2 className="text-4xl font-bold mb-6">Areas of Expertise</h2>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <ExpertiseItem title="Banking and Financial" />
            <ExpertiseItem title="Sales and Account Management" />
            <ExpertiseItem title="Engineering and Technicians" />
          </div>
          <div className="space-y-4">
            <ExpertiseItem title="Retail, Ecommerce, FMCG" />
            <ExpertiseItem title="Support and Operation" />
            <ExpertiseItem title="Logistics & Oil and Gas" />
          </div>
        </div>

        {/* Upload CV Button */}
        <Link
          href={"/contact"}
          className="mt-8 w-fit bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg flex items-center justify-center gap-2"
        >
          Contact US <span className="text-lg">➜</span>
        </Link>
      </div>
    </section>
  );
}

function ExpertiseItem({ title }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white bg-opacity-10 border border-white rounded-lg">
      <span className="text-lg font-medium">{title}</span>
      <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
        <span className="text-white text-xl">➜</span>
      </div>
    </div>
  );
}

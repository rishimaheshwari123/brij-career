import Image from "next/image";
import bg from "@/assets/bg1.jpg";
import Link from "next/link";

const expertiseList = [
  "Property, Engineering, Construction & Manufacturing",
  "IT & Data Center",
  "Creative, Arts, Design & Media",
  "Training, Education & Coach's",
  "Oil & Gas",
  "Financial Services",
  "Banking & Finance",
  "Sales, Retails & Marketing",
  "Finance And Business",
  "Charity & Voluntary Work",
  "Health Care",
  "Restaurant, Hospitality & Event Management",
  "Senior ID Engineer",
  "Project & Construction Manager",
  "Auditor",
];

export default function ExpertiseSection() {
  return (
    <section className="relative w-full h-full py-20 flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>

      <div className="relative text-center">
        <h2 className="text-4xl font-bold mb-6">Areas of Expertise</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseList.map((title, index) => (
            <ExpertiseItem key={index} title={title} />
          ))}
        </div>

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
    <Link href="/job" className="block">
      <div className="flex items-center justify-between px-6 py-3 bg-white bg-opacity-10 border border-white rounded-lg cursor-pointer hover:bg-opacity-20">
        <span className="text-lg font-medium">{title}</span>
        <div className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
          <span className="text-white text-xl">➜</span>
        </div>
      </div>
    </Link>
  );
}

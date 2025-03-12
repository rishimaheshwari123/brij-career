import Image from "next/image";
import officeImage from "@/assets/s1.jpg";
import diversityImage from "@/assets/s2.jpg";
import cityImage from "@/assets/s3.jpg";

const services = [
  {
    title: "End To End Recruitment",
    description:
      "We cover all aspects of the hiring process, from identifying job openings to onboarding new hires. We source candidates, conduct interviews, evaluate résumés, and make final hiring decisions. End-to-end recruitment ensures that you are able to attract and hire the best talent for your organization.",
    image: officeImage,
    linkText: "READ MORE",
  },
  {
    title: "Diversity Inclusion",
    description:
      "Diversity and inclusion is about celebrating and valuing the differences in individuals. It creates a more inclusive and respectful workplace for all employees. Workforce diversity has accelerated in growing organizations, and we are here to build you your diverse team.",
    image: diversityImage,
    linkText: "VIEW JOB LISTINGS",
  },
  {
    title: "New Geographies",
    description:
      "Hiring in new geographies can be a challenging but rewarding process for a company looking to expand its operations. It requires careful planning, consideration of cultural differences, labor laws, and availability of qualified candidates.",
    image: cityImage,
    linkText: "GET IN TOUCH",
  },
];

export default function ServicesSection() {
  return (
    <div className="py-16 bg-gray-200">
      <section className=" max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We’re here to make your life easier
          </h2>
          <div className="w-12 h-1 bg-blue-500 mx-auto my-4"></div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-3">{service.description}</p>
                {/* <a
                  href="#"
                  className="text-blue-500 font-semibold mt-4 inline-block"
                >
                  {service.linkText} →
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

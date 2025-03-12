export default function SubNavbar() {
  return (
    <div className="fixed top-1 left-0 right-0 z-50">
      <div className="max-w-[94%] mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Addresses */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Office+510,+B+wing,+Galleria+Complex,+Hiranandani+Gardens,+Powai,+Mumbai+400076"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-1 rounded-lg shadow cursor-pointer"
          >
            Office 510, B wing, Galleria Complex, Hiranandani Gardens, Powai,
            Mumbai 400076
          </a>

          <a
            href="mailto:brij.dubai@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-1 rounded-lg shadow cursor-pointer"
          >
            brij.dubai@gmail.com
          </a>
        </div>

        {/* Contact & Buttons */}
        <div className="mt-2 md:mt-0 flex items-center gap-4">
          <a
            href="tel:+916262555075"
            className="bg-white text-black px-4 py-1 rounded-lg shadow font-semibold"
          >
            +91 6262 555 075
          </a>

          <a
            href="/contact"
            className="bg-blue-400 text-white px-4 py-1 rounded-lg shadow font-semibold"
          >
            Contact With Us
          </a>
        </div>
      </div>
    </div>
  );
}

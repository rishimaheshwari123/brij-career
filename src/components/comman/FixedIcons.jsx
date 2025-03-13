import { FaPhone, FaWhatsapp } from "react-icons/fa";

const FixedIcons = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
      {/* Phone Icon */}
      <a
        href="tel:+919202553151"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
      >
        <FaPhone size={24} />
      </a>

      {/* WhatsApp Icon */}
      {/* <a
        href="https://wa.me/919202553151"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a> */}
    </div>
  );
};

export default FixedIcons;

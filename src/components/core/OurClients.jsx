"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import icm from "@/assets/icm.jpeg";
import gtc from "@/assets/gtc.jpeg";
import ingot from "@/assets/ingot.png";
import eldura from "@/assets/eldorado.jpeg";
import qutar from "@/assets/qatar.png";
import hot from "@/assets/hot.jpg";
import xs from "@/assets/xs.png";
import rak from "@/assets/rak.png";
import tss from "@/assets/tss.jpeg";
import Swissquote from "@/assets/swish.png";

const clients = [
  { name: "ICM Capital", location: "London UK", logo: icm },
  { name: "GTC FX", location: "Dubai UAE", logo: gtc },
  { name: "Ingot Brokers", location: "Cyprus Europe", logo: ingot },
  { name: "Eldorado Hedge Fund", location: "DIFC Dubai UAE", logo: eldura },
  { name: "Qatar Energy", location: "Doha Qatar", logo: qutar },
  { name: "Hot Forex", location: "Cyprus", logo: hot },
  { name: "XS.Com", location: "Jordan", logo: xs },
  { name: "Rak Bank", location: "Dubai UAE", logo: rak },
  { name: "TSS Think Software Solution", location: "Dubai UAE", logo: tss },
  { name: "Swissquote", location: "Zurich Switzerland", logo: Swissquote },
];

export default function OurClients() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Our Clients</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="w-40 h-40 relative">
              <Image
                src={client.logo}
                alt={client.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-lg font-bold mt-3 ">{client.name}</p>
            <p className="text-sm text-gray-500 ">{client.location}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import {
  Car,
  Users,
  Truck,
  ArrowRight,
  Plane,
  Bus,
  Zap,
  Warehouse,
  ShieldCheck,
} from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const serviceData = [
  {
    title: "Premium Car Rental",
    desc: "Our vehicles are equipped with plush interiors, creating the perfect atmosphere for your special day and high-profile corporate needs.",
    icon: <Car size={24} />,
    color: "group-hover:bg-orange-600",
    subs: ["Airport Transport", "VIP cabs", "Events"],
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
  },
  {
    title: "Employee Transport",
    desc: "Ventuorange into this domain in 2001, providing reliable, tech-enabled commute solutions for India's leading corporate sectors.",
    icon: <Users size={24} />,
    color: "group-hover:bg-slate-900",
    subs: ["Cab Service", "Bus Service", "Shuttle Service"],
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
  },
  {
    title: "Logistics Transport",
    desc: "Seamless supply chain management and heavy-duty transportation tailoorange for enterprise-scale logistics and distribution.",
    icon: <Truck size={24} />,
    color: "group-hover:bg-orange-700",
    subs: ["Last-Mile", "Warehousing", "B2B Freight"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">
              Solutions
            </span>
            <span className="h-[1px] w-8 bg-orange-600" />
          </motion.div>
          <h2 className="text-3xl md:text-3xl font-black tracking-tight uppercase text-slate-900">
            Our <span className="text-orange-600">Services</span>
          </h2>
        </div>

        {/* Swiper Container */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: ".swiper-prev-btn",
            nextEl: ".swiper-next-btn",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 !overflow-visible"
        >
          {serviceData.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="group relative bg-white rounded-[3rem] p-8 h-[550px] border border-slate-100 shadow shadow-slate-200/50 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2">
                {/* Top Section */}
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-8 transition-all duration-500 ${service.color} group-hover:text-white group-hover:shadow group-hover:shadow-orange-200`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black  tracking-tighter uppercase text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm mb-6">
                    {service.desc}
                  </p>

                  {/* Sub-services Chips */}
                  <div className="flex flex-wrap gap-2">
                    {service.subs.map((sub, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:border-orange-100 group-hover:text-orange-600 transition-colors"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Image & CTA */}
                <div className="mt-8 relative h-40 rounded-[2rem] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-6">
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1 !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 25px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
};

export default Services;

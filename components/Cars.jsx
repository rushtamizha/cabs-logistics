"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ShieldCheck, Zap, Users, Star, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    id: "ev",
    name: "EV",
    img: "/cars/1.png",
    tagline: "Sustainable Solutions",
    icon: <Leaf size={16} />,
  },
  {
    id: "standard",
    name: "Standard",
    img: "/cars/5.png",
    tagline: "Daily cabs Reliability",
    icon: <ShieldCheck size={16} />,
  },
  {
    id: "premium",
    name: "Premium",
    img: "/cars/4.png",
    tagline: "Executive Travel",
    icon: <Zap size={16} />,
  },
  {
    id: "muv",
    name: "MUV",
    img: "/cars/3.png",
    tagline: "Group Logistics",
    icon: <Users size={16} />,
  },
  {
    id: "luxury",
    name: "Luxury",
    img: "/cars/2.png",
    tagline: "VVIP Protocol",
    icon: <Star size={16} />,
  },
];

const Cars = () => {
  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">Our cabs</span>
            <span className="h-[1px] w-8 bg-orange-600" />
          </motion.div>
          <h2 className="text-3xl md:text-3xl font-black tracking-tight uppercase text-slate-900">
            cabs <span className="text-orange-600">Categories</span>
          </h2>
        </div>

        {/* --- DOCK SELECTION (Hidden on Mobile) --- */}
        <div className="hidden lg:flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat)}
                className={`relative px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all z-10 flex items-center gap-3 ${
                  selected.id === cat.id ? "text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {selected.id === cat.id && (
                  <motion.div
                    layoutId="cabsPill"
                    className="absolute inset-0 bg-orange-600 rounded-full -z-10 shadow-lg shadow-orange-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* --- MOBILE CARDS (Swiper) --- */}
        <div className="lg:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides
            autoplay={{ delay: 4000 }}
            className="pb-14"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div className="bg-white rounded-3xl border border-slate-200  overflow-hidden h-full">
                  <div className="h-48 overflow-hidden p-2 ">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div className="p-8">
                    <div className="text-orange-600 font-bold uppercase tracking-widest text-[9px] mb-2">{cat.tagline}</div>
                    <h3 className="text-2xl font-black uppercase text-slate-900 mb-4">{cat.name} Series</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">Professional logistics and transport solutions for corporate clients.</p>
                    <button className="flex items-center gap-2 text-orange-600 font-black uppercase text-[10px] tracking-widest">
                      Inquire Now <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- DESKTOP SHOWCASE (Horizontal Split) --- */}
        <div className="hidden lg:block h-[550px] bg-white rounded-3xl border border-slate-200 shadow overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 h-full"
            >
              {/* Image Side */}
              <div className="relative h-full overflow-hidden  p-4">
                <motion.img
                  key={selected.img}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={selected.img}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-6 py-2 rounded-full border border-white/20 shadow-xl">
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Available Nationwide</span>
                </div>
              </div>

              {/* Text Side */}
              <div className="p-16 md:p-20 flex flex-col justify-center">
                <div className="text-orange-600 font-bold uppercase tracking-[4px] text-[11px] mb-4">
                  {selected.tagline}
                </div>
                <h3 className="text-5xl font-black tracking-tight uppercase text-slate-900 mb-6">
                  {selected.name} <span className="text-slate-300">Edition</span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-md font-medium">
                  Experience professional-grade {selected.name.toLowerCase()} services tailoorange for modern business needs. Our cabs is maintained to global safety and hygiene standards.
                </p>
                <div className="flex items-center gap-6">
                  <button className="bg-orange-600 text-white px-10 py-5 rounded-xl font-black uppercase text-xs tracking-widest shadow-lg shadow-orange-500/30 hover:bg-orange-700 transition-all active:scale-95">
                    Reserve Now
                  </button>
                  
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: #cbd5e1 !important; opacity: 1 !important; }
        .swiper-pagination-bullet-active { background: #2563eb !important; width: 20px !important; border-radius: 4px !important; }
      `}</style>
    </section>
  );
};

export default Cars;
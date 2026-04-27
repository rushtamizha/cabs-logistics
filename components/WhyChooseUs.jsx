
"use client"

import React from 'react';
import { Shield, Settings, Users, Zap, Leaf, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
const WhyChooseUs = () => {
  const pillars = [
    {
      id: "01",
      title: "Two Decades of Experience",
      desc: "Since 2020, we have adapted to evolving enterprise needs, establishing GGV as a leader in corporate mobility.",
      icon: <Shield size={18} className="text-orange-600" />,
      img: "/why/01.avif",
    },
    {
      id: "02",
      title: "Customized End-to-End Solutions",
      desc: "From premium executive rentals to complex employee logistics, we design transport solutions tailored to your scale.",
      icon: <Settings size={18} className="text-orange-600" />,
      img: "/why/02.avif",
    },
    {
      id: "03",
      title: "Proactive Management Team",
      desc: "Our leadership brings deep industry passion, innovating constantly to maintain our reputation as a top-tier partner.",
      icon: <Users size={18} className="text-orange-600" />,
      img: "/why/03.avif",
    },
    {
      id: "04",
      title: "Real-time Tracking & Safety",
      desc: "We leverage cutting-edge GPS technology and automated billing to ensure full transparency and safety.",
      icon: <Zap size={18} className="text-orange-600" />,
      img: "/why/04.avif",
    },
    {
      id: "05",
      title: "Eco-friendly Fleet Options",
      desc: "Offering electric and low-emission vehicles to help clients achieve sustainability goals without compromise.",
      icon: <Leaf size={18} className="text-orange-600" />,
      img: "/why/05.avif",
    },
    {
      id: "06",
      title: "24/7 Reliable Operations",
      desc: "With a dedicated control room and 24/7 support, we ensure your mobility needs are met with absolute reliability.",
      icon: <Clock size={18} className="text-orange-600" />,
      img: "/why/06.avif",
    },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pillars.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow shadow-slate-200/50 transition-all duration-500 ">
              
              {/* Image with Ultra Rounding */}
              <div className="relative h-56 w-full rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md h-10 w-10 rounded-2xl flex items-center justify-center  font-black text-orange-600 shadow-sm">
                  {item.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="px-4 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    {item.icon}
                  </div>
                  <h3 className=" text-xl  text-slate-900 font-black  tracking-tighter uppercase ">
                    {item.title}
                  </h3>
                </div>
                <p className=" text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Plane, 
  Car, 
  Zap, 
  PhoneCall, 
  Briefcase,
  ChevronRight 
} from 'lucide-react';

const services = [
  {
    title: "Employee Transport",
    desc: "24/7 managed daily commute solutions for corporate staff with real-time tracking.",
    icon: <Users size={24} />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Airport Transfers",
    desc: "Reliable, punctual pickups and drops for professionals and frequent travelers.",
    icon: <Plane size={24} />,
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Premium Travel",
    desc: "Luxury sedans and executive cars for VIPs, high-profile events, and hotels.",
    icon: <Car size={24} />,
    color: "bg-slate-900 text-white"
  },
  {
    title: "Electric Vehicles",
    desc: "Sustainable mobility solutions with our modern fleet of zero-emission EVs.",
    icon: <Zap size={24} />,
    color: "bg-orange-600 text-white"
  },
  {
    title: "Cabs on Call",
    desc: "Quick and efficient spot rentals available for immediate city travel needs.",
    icon: <PhoneCall size={24} />,
    color: "bg-slate-50 text-slate-600"
  },
  {
    title: "Corporate Rentals",
    desc: "Tailor-made long-term and short-term car rental plans for businesses.",
    icon: <Briefcase size={24} />,
    color: "bg-orange-50 text-orange-600"
  }
];

const WhatWeOffer = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[4px] text-orange-600 mb-4 block">
              Our Capabilities
            </span>
            <h2 className=" text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
              What We <span className="text-orange-600  underline decoration-slate-200">Offer</span>
            </h2>
          </div>
          <p className="font-sans text-slate-500 text-lg leading-relaxed max-w-xl border-l-2 border-slate-100 pl-8">
            GGV is a full-service transportation company offering unique solutions for all your logistics needs. 
            Backed by 15+ years of expertise, we ensure your business or personal travel is seamless and professional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-orange-100 hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500 ${service.color}`}>
                {service.icon}
              </div>
              
              <h3 className=" text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              
              <p className="font-sans text-slate-500 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>

            
            </motion.div>
          ))}
        </div>

        {/* Bottom Logistics Banner */}
        <div className="mt-16 p-8 rounded-[2rem] bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-orange-600 flex items-center justify-center text-white">
              <Zap size={20} />
            </div>
            <p className="text-white font-sans font-medium">
              Looking for Industrial Logistics & Container Transport? 
              <span className="text-orange-400 block text-xs uppercase tracking-widest mt-1">We handle PAN India Freight</span>
            </p>
          </div>
         
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;
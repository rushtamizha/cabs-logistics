"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  History, 
  Settings2, 
  UserCheck, 
  ShieldAlert, 
  Leaf, 
  Clock 
} from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "Two Decades of Experience",
    desc: "Since 1998, we have consistently understood and adapted to evolving customer needs, establishing Cabs&logistics as a leading provider.",
    icon: <History size={24} />,
  },
  {
    id: "02",
    title: "Customized End-to-End Solutions",
    desc: "We design transport solutions tailoorange to your unique requirements — from car rentals to complex logistics.",
    icon: <Settings2 size={24} />,
  },
  {
    id: "03",
    title: "Proactive Management Team",
    desc: "Our leadership brings rich experience and passion for excellence, constantly innovating to maintain our reputation.",
    icon: <UserCheck size={24} />,
  },
  {
    id: "04",
    title: "Real-time Tracking & Safety",
    desc: "We leverage cutting-edge technology for automated billing and enhanced safety — ensuring full transparency.",
    icon: <ShieldAlert size={24} />,
  },
  {
    id: "05",
    title: "Eco-friendly cabs Options",
    desc: "We offer a growing cabs of electric and low-emission vehicles, helping clients achieve sustainability goals.",
    icon: <Leaf size={24} />,
  },
  {
    id: "06",
    title: "24/7 Reliable Operations",
    desc: "With a dedicated control room and round-the-clock support, we ensure your needs are met with absolute reliability.",
    icon: <Clock size={24} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">Why Cabs&logistics</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 mb-6 leading-none">
            Why Customers <br />
            <span className="text-orange-600">Choose Us</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg border-l-4 border-orange-600 pl-6 py-2">
            Six pillars that make Cabs&logistics the most trusted name in employee mobility across India.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-100">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border-r border-b border-slate-100 group hover:bg-slate-50 transition-colors relative overflow-hidden"
            >
              {/* Pillar Number */}
              <span className="absolute -right-4 -bottom-4 text-9xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                {item.id}
              </span>

              <div className="relative z-10">
                <div className="h-12 w-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-4 flex items-center gap-3">
                  <span className="text-orange-600 text-xs font-black">{item.id}</span>
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Trust Bar */}
        <div className="mt-20 p-8 bg-slate-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white uppercase">
                    Corp
                  </div>
                ))}
             </div>
             <div>
                <p className="text-white font-black text-sm uppercase tracking-tight">200+ Corporate Clients</p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Trusted Nationwide</p>
             </div>
          </div>
          <button className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 hover:text-white transition-all">
            Experience the difference <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

// Add ArrowRight to your lucide imports
import { ArrowRight } from "lucide-react";

export default WhyChooseUs;
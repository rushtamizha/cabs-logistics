"use client";
import React from "react";
import { motion } from "framer-motion";
import { scanFace, Mail, ArrowUpRight } from "lucide-react";

const leaders = [
  {
    name: "G. Panchatcharam",
    role: "Co-founder & CEO",
    category: "Executive",
  },
  {
    name: "G. Suresh Kumar",
    role: "Co-founder & President",
    category: "Executive",
  },
  {
    name: "Agnello G Fernandes",
    role: "COO — Employee Transport",
    category: "Operations",
  },
  {
    name: "Avasarala Srinivasa Rao",
    role: "COO — Premium Car Rentals",
    category: "Operations",
  },
  {
    name: "V. Sajju Kumar",
    role: "AVP — Operations",
    category: "Management",
  },
  {
    name: "M. Pandimanian",
    role: "AVP — Finance",
    category: "Management",
  },
];

const Leadership = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-orange-600" />
              <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">Governance</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-slate-900 leading-none">
              Meet Our <span className="text-orange-600">Leaders</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-xs text-sm leading-relaxed border-l-2 border-slate-200 pl-6">
            An experienced management team driving innovation in Pan-India corporate logistics.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 bg-slate-100 rounded-lg">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                        {leader.category}
                      </span>
                    </div>
                    <button className="text-slate-300 group-hover:text-orange-600 transition-colors">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2 leading-tight">
                    {leader.name}
                  </h3>
                  <p className="text-orange-600 font-bold uppercase tracking-wider text-[11px]">
                    {leader.role}
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-slate-50 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center text-white hover:bg-orange-600 transition-colors">
                    <scanFace size={14} />
                  </a>
                  <a href="#" className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-orange-600 hover:text-white transition-colors">
                    <Mail size={14} />
                  </a>
                </div>
              </div>

              {/* Decorative background element */}
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <span className="text-8xl font-black pointer-events-none select-none">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Leadership;
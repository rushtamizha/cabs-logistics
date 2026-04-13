"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Compass, Globe, Shield } from "lucide-react";

const Purpose = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-12 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[6px] text-[10px]">Our Strategic Core</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-[0.85]">
            Purpose <span className="block text-slate-300">& Direction</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group p-12 rounded-[3rem] bg-slate-900 text-white overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="h-14 w-14 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-orange-500/20">
                <Target size={28} />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Our Vision</h3>
              <p className="text-slate-300 text-xl leading-relaxed font-medium">
                To become a <span className="text-white">fully automated</span> best-in-class, end-to-end travel and transport solutions organization with a <span className="text-orange-400">Pan India presence</span>.
              </p>
            </div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={300} strokeWidth={1} />
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-12 rounded-[3rem] border border-slate-100 bg-slate-50 flex flex-col"
          >
            <div className="h-14 w-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-8 text-orange-600 shadow-sm">
              <Compass size={28} />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">Our Mission</h3>
            <p className="text-slate-500 text-lg leading-relaxed font-medium mb-8">
              We strive to provide end-to-end travel and transport solutions to our customers with <span className="text-slate-900 font-bold">true value and sincerity</span>.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-auto">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-orange-600">
                  <Shield size={16} />
                  <span className="font-black uppercase text-[10px] tracking-widest">Responsibility</span>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">Stakeholder Care</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-orange-600">
                  <Globe size={16} />
                  <span className="font-black uppercase text-[10px] tracking-widest">Reach</span>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">PAN INDIA Network</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Tagline / Commitment */}
        <div className="mt-16 pt-12 border-t border-slate-100 flex flex-wrap gap-8 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[4px] text-slate-400">Driven by</span>
            <div className="flex gap-6">
              <span className="text-sm font-black uppercase text-slate-900">Professionalism</span>
              <span className="text-sm font-black uppercase text-slate-900">Technology</span>
              <span className="text-sm font-black uppercase text-slate-900">Sincerity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
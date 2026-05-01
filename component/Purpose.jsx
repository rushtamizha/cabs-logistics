"use client";
import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, CheckCircle2 } from "lucide-react";

const Purpose = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* VISION CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-orange-500/20 transition-all duration-500"
          >
            <div className="h-16 w-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
              <Eye className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900 mb-6">Our Vision</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              To emerge as India’s most trusted and future-ready mobility partner by redefining transportation through innovation, sustainability, and service excellence.
            </p>
            <p className="text-slate-500 text-sm ">
              "We envision a smarter and greener future where businesses experience seamless, technology-enabled mobility solutions across every city in India."
            </p>
          </motion.div>

          {/* MISSION CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative p-10 rounded-[3rem] bg-slate-900 border border-slate-800 transition-all duration-500"
          >
            <div className="h-16 w-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-500/20">
              <Target className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              To deliver end-to-end corporate mobility and logistics solutions that are safe, scalable, sustainable, and powered by innovation.
            </p>
            
            {/* Mission Checklist */}
            <div className="grid grid-cols-1 gap-4">
              {[
                "Advanced Tech Integration",
                "Eco-Friendly EV Mobility",
                "Professional Chauffeur Excellence",
                "Reliable Staff Transportation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm font-bold uppercase tracking-wider">
                  <CheckCircle2 className="text-orange-500" size={18} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Closing Vision Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
            Driven by <span className="text-orange-500 text-4xl ">Trust</span>. Powered by <span className="text-orange-500 text-4xl ">Technology</span>. Delivered with <span className="text-orange-500 text-4xl ">Excellence</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Purpose;
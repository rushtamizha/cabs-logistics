"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Map, Users, Car, Globe } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 5, suffix: '+', icon: <Trophy size={18} /> },
  { label: 'Trips Per Day', value: 10000, suffix: '+', icon: <Map size={18} /> },
  { label: 'cabs Size', value: 2000, suffix: '+', icon: <Car size={18} /> },
  { label: 'Daily Commuters', value: 40000, suffix: '+', icon: <Users size={18} /> },
];

const Milestones = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="h-[1px] w-6 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[3px] text-[10px]">Legacy</span>
            <span className="h-[1px] w-6 bg-orange-600" />
          </motion.div>
          <h2 className="text-4xl font-black  tracking-tighter uppercase text-slate-900 leading-none">
            Our <span className="text-orange-600">Milestones</span>
          </h2>
        </div>

        {/* The Glass Bento Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatStrip key={index} stat={stat} index={index} />
          ))}
          
          {/* PAN India Full-Width Strip */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-4 flex items-center justify-between p-6 rounded-[2rem] bg-slate-900 text-white shadow-xl shadow-slate-200 mt-4 overflow-hidden relative group"
          >
            <div className="flex items-center gap-5 z-10">
              <div className="h-12 w-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-2xl font-black  tracking-tighter uppercase leading-none">PAN India Presence</h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Reliable network across the subcontinent</p>
              </div>
            </div>
            <div className="hidden md:block opacity-10 group-hover:opacity-20 transition-opacity">
               <Globe size={120} strokeWidth={1} />
            </div>
            <div className="z-10 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest">
              Verified
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatStrip = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-center gap-4 p-5 rounded-[1.8rem] bg-white border border-slate-100 shadow-xs hover:shadow-sm hover:border-orange-100 transition-all group"
    >
      <div className="h-11 w-11 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
        {stat.icon}
      </div>
      
      <div>
        <div className="flex items-baseline gap-0.5 leading-none">
          <span className="text-2xl font-black tracking-tighter text-slate-900 ">
            {count.toLocaleString()}
          </span>
          <span className="text-lg font-black text-orange-600">{stat.suffix}</span>
        </div>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
};

export default Milestones;
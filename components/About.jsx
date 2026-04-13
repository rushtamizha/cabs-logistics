"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, TrendingUp, MapPin, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-orange-50 rounded-full blur-[100px] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Visual Assets */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80"
                alt="Cabs&logistics cabs"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Floating Achievement Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-0 md:right-10 bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-4"
            >
              <div className="h-14 w-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                <TrendingUp size={28} />
              </div>
              <div>
                <div className="text-2xl font-black  tracking-tighter text-slate-900">
                  ₹1.2 Billion
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Annual Turnover
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="lg:w-1/2 space-y-8 ">
            <div className="flex flex-col items-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-2"
              >
                <span className="h-[1px] w-6 bg-orange-600" />
                <span className="text-orange-600 font-bold uppercase tracking-[3px] text-[10px]">
                  About
                </span>
                <span className="h-[1px] w-6 bg-orange-600" />
              </motion.div>
              <h2 className="text-3xl font-black  tracking-tighter uppercase text-slate-900 leading-none">
                Cabs&logistics <span className="text-orange-600"> Smart Mobility</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-slate-600"
            >
              <p className="leading-relaxed font-medium">
                With **28 years of excellence**, Cabs&logistics Smart Mobility Private
                Limited is a leading provider of integrated transportation
                solutions for the corporate sector.
              </p>

              {/* Mini Bento Grid for Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <InfoChip
                  icon={<MapPin size={16} />}
                  text="Pan-India Presence"
                />
                <InfoChip icon={<UsersIcon />} text="300+ Dedicated Staff" />
                <InfoChip
                  icon={<ShieldCheck size={16} />}
                  text="Corporate Excellence"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700"
                >
                  <Leaf size={16} />
                  <span className="text-[11px] font-black uppercase tracking-wider">
                    Investing in EV cabs
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoChip = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
    <div className="text-orange-600 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-[11px] font-black uppercase tracking-wider text-slate-700">
      {text}
    </span>
  </div>
);

const UsersIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default About;

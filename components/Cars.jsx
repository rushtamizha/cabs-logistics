"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'ev', name: 'EV', title: 'Electric Vehicles', description: 'Eco-friendly and sustainable mobility solutions for the modern enterprise. Our EV fleet combines silent comfort with zero-emission performance.', image: '/cars/1.png' },
  { id: 'standard', name: 'Standard', title: 'Standard Sedan', description: 'Reliable and cost-effective daily commutes. Perfect for individual staff transportation and routine city transit.', image: '/cars/2.png' },
  { id: 'premium', name: 'Premium', title: 'Premium Sedan', description: 'Elevated comfort for mid-level management and client pickups. Feature-rich interiors for a productive journey.', image: '/cars/3.png' },
  { id: 'muv', name: 'MUV', title: 'Multi-Utility Vehicle', description: 'Spacious and versatile transportation for groups and families. Ideal for team outings, airport pickups with luggage, and group travel.', image: '/cars/4.png' },
  { id: 'luxury', name: 'Luxury', title: 'Luxury Segment', description: 'Top-tier executive travel. Experience the pinnacle of comfort and prestige for senior leadership and high-profile guests.', image: '/cars/5.png' }
];

const CarCategories = () => {
  const [activeTab, setActiveTab] = useState(categories[3]);

  return (
    <section className="py-20 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
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

        {/* FIXED NAVIGATION: added whitespace-nowrap and flex-nowrap */}
        <div className="flex flex-nowrap justify-start md:justify-center overflow-x-auto no-scrollbar gap-6 md:gap-16 border-b border-slate-200 pb-4 mb-16 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat)}
              // Added flex-shrink-0 to ensure items don't disappear on small screens
              className="flex flex-col items-center min-w-[70px] md:min-w-[80px] flex-shrink-0 group relative"
            >
              <div className={`w-14 h-8 md:w-16 md:h-10 mb-2 transition-all duration-300 ${activeTab.id === cat.id ? 'scale-110 grayscale-0' : 'grayscale opacity-50 group-hover:opacity-100'}`}>
                <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
              </div>
              <span className={`text-[11px] md:text-sm font-bold uppercase tracking-wider transition-colors ${activeTab.id === cat.id ? 'text-slate-900' : 'text-slate-400'}`}>
                {cat.name}
              </span>
              {activeTab.id === cat.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-orange-600 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[350px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id + "-img"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex justify-center"
            >
              <img 
                src={activeTab.image} 
                alt={activeTab.title} 
                className="w-full max-w-[320px] md:max-w-[500px] object-contain   rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id + "-text"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-center md:text-left"
            >
              <h3 className=" text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 uppercase tracking-tighter">
                {activeTab.name}
              </h3>
              <p className="font-sans text-slate-500 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0 ">
                {activeTab.description}
              </p>
              <div className="mt-8">
                <button className="w-full md:w-auto bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors">
                  Book {activeTab.name} Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CarCategories;
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, ShieldCheck, Globe, Zap, Truck } from 'lucide-react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://www.tripkartz.com/wp-content/themes/tripkartz-theme/assets/employee-transport-1.webp',
    title: ["Premium", "Mobility"],
    subtitle: 'Luxury travel solutions for corporate leaders and 24/7 employee transportation.',
    accent: '5+ Years of Industry Expertise'
  },
  {
    image: 'https://www.tripkartz.com/wp-content/themes/tripkartz-theme/assets/corporate-desktop-image.webp',
    title: ["Container", "Logistics"],
    subtitle: 'Safe and timely containerized freight solutions for industries across India.',
    accent: 'Safe. Reliable. Pan-India.'
  },
  {
    image: 'https://hurryupcabs.com/assets/top-cities/Untitled%20design%20-%202025-09-04T165139.692.webp',
    title: ["Executive", "Cabs"],
    subtitle: 'Showroom maintained luxury sedans for VIP events and airport transfers.',
    accent: 'Showroom Standard Fleet'
  }
];

const Hero = () => {
  const WHATSAPP_NUMBER = "919943098822";

  return (
    // Changed h-[100vh] to h-[60vh] for half-screen appearance
    <section className="relative h-[65vh] md:h-[60vh] min-h-[500px] w-full overflow-hidden bg-slate-900">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => {
          const waMessage = `Hello GGV! I'm interested in your ${slide.title.join(' ')} services.`;
          const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIcomponents(waMessage)}`;

          return (
            <SwiperSlide key={index} className="relative overflow-hidden">
              {/* Background with Zoom Effect */}
              <motion.div 
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 8, ease: "linear" }}
                className="absolute inset-0 z-0"
              >
                <img 
                  src={slide.image} 
                  alt={slide.title.join(' ')} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
              </motion.div>

              {/* Content - Adjusted padding for shorter height */}
              <div className="relative z-10 flex h-full items-center max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-4xl text-white pt-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <span className="h-[2px] w-8 bg-orange-600" />
                    <span className="text-orange-400 font-bold uppercase tracking-[4px] text-[10px]">
                      {slide.accent}
                    </span>
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    // Slightly reduced font sizes for better fit in half-screen
                    className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-6"
                  >
                    {slide.title[0]} <br />
                    <span className="text-orange-600 ">{slide.title[1]}</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-sm md:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed border-l-2 border-orange-600/30 pl-6"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link href="/contact" className="w-full sm:w-auto">
                      <button className="w-full bg-orange-600 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95 group">
                        Book Service <Phone size={14} className="group-hover:rotate-12 transition-transform" />
                      </button>
                    </Link>
                    
                    <a 
                      href={waLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
                    >
                      <MessageCircle size={18} className="text-orange-400" /> 
                      WhatsApp
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Simplified Corporate Trust Indicators for smaller height */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center gap-8 bg-slate-950/20 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
        <HeroFeature icon={<ShieldCheck size={16}/>} title="Safety First" />
        <div className="h-4 w-px bg-white/10" />
        <HeroFeature icon={<Globe size={16}/>} title="Pan-India" />
        <div className="h-4 w-px bg-white/10" />
        <HeroFeature icon={<Truck size={16}/>} title="200+ Fleet" />
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3 !important;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

const HeroFeature = ({ icon, title }) => (
  <div className="flex items-center gap-3 text-white/50 hover:text-white transition-colors">
    <div className="text-orange-500">
      {icon}
    </div>
    <span className="text-[8px] font-bold uppercase tracking-[2px]">{title}</span>
  </div>
);

export default Hero;
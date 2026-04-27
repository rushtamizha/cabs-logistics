"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, ShieldCheck, Globe, Zap } from 'lucide-react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  // {
  //   image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80',
  //   title: ["Enterprise", "Logistics"],
  //   subtitle: 'Streamlining Global Supply Chains with precision and integrity.',
  //   accent: 'Fast. Secure. Reliable.'
  // },
    {
    image: '/d0c7bb52-1e30-49f0-931c-de6f656d3c18.jpg',
    title: ["Premium", "cabs"],
    subtitle: 'Luxury travel solutions for corporate leaders and executive teams.',
    accent: 'Comfort Beyond Boundaries.'
  },
  {
    image: '/dc93600e-ba06-4e0e-a1df-1e0bfb88488a.jpg',
    title: ["Premium", "cabs"],
    subtitle: 'Luxury travel solutions for corporate leaders and executive teams.',
    accent: 'Comfort Beyond Boundaries.'
  },
];

const Hero = () => {
  const WHATSAPP_NUMBER = "919943098822"; // Your number here

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-slate-900">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={2000}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => {
          // Constructing the WhatsApp URL with a pre-filled message
          const waMessage = `Hello Cabs&logistics! I am interested in your ${slide.title.join(' ')} services. Please provide more details.`;
          const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

          return (
            <SwiperSlide key={index} className="relative overflow-hidden">
              {/* Background Image */}
              <motion.div 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0 z-0"
              >
                <img 
                  src={slide.image} 
                  alt={slide.title.join(' ')} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
              </motion.div>

              {/* Content Container */}
              <div className="relative z-10 flex h-full items-center max-w-7xl mx-auto px-6 md:px-12">
                <div className="max-w-3xl text-white pt-20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 mb-6 md:mb-8"
                  >
                    <span className="h-px w-10 bg-orange-600" />
                    <span className="text-orange-400 font-bold uppercase tracking-[4px] text-[10px]">
                      {slide.accent}
                    </span>
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    /* leading-tight (1.25) on mobile, leading-[0.9] on desktop */
                    className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-tight md:leading-[0.9] mb-6"
                  >
                    {slide.title[0]} <br />
                    <span className="text-orange-600">{slide.title[1]}</span>
                  </motion.h1>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-base md:text-xl text-slate-300 font-medium mb-10 max-w-lg leading-relaxed border-l-2 border-white/10 pl-6"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    {/* Internal Redirect to Contact Page */}
                    <Link href="/contact" className="w-full sm:w-auto">
                      <button className="w-full bg-orange-600 hover:bg-white hover:text-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 transition-all active:scale-95 group">
                        Get in Touch <Phone size={16} className="group-hover:rotate-12 transition-transform" />
                      </button>
                    </Link>
                    
                    {/* External Redirect to WhatsApp */}
                    <a 
                      href={waLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
                    >
                      <MessageCircle size={20} className="text-green-400" /> 
                      Chat on WhatsApp
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Trust Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center gap-12">
        <HeroFeature icon={<ShieldCheck size={20}/>} title="Secure" />
        <div className="h-1 w-1 rounded-full bg-white/20" />
        <HeroFeature icon={<Globe size={20}/>} title="Global" />
        <div className="h-1 w-1 rounded-full bg-white/20" />
        <HeroFeature icon={<Zap size={20}/>} title="Instant" />
      </div>
    </section>
  );
};

const HeroFeature = ({ icon, title }) => (
  <div className="flex items-center gap-3 text-white/50 hover:text-white transition-colors">
    <div className="p-2 rounded-xl bg-white/5 border border-white/10">
      {icon}
    </div>
    <span className="text-[9px] font-black uppercase tracking-[3px]">{title}</span>
  </div>
);

export default Hero;
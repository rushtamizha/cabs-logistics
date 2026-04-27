"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Bala",
    role: "Event Organiser",
    company: "ALERT Being Awards",
    content: "On behalf of our entire team, I extend my deepest gratitude for your generous sponsorship and unwavering support in making the ALERT BEING AWARDS – 8th Edition a success.",
    initial: "A"
  },
  {
    name: "Wellsfargo Bangalore",
    role: "Transport Desk",
    company: "Wellsfargo",
    content: "We would like to extend sincere appreciation to your team and drivers for the exceptional support provided during the challenges posed by heavy traffic and rains in the city.",
    initial: "W"
  },
  {
    name: "Walmart Admin Team",
    role: "Admin Team",
    company: "Walmart",
    content: "Thanks for your wonderful support on arranging vehicles for BCP in CBE office due to heavy rainfall in Chennai city. Appreciate all your efforts and hard work.",
    initial: "W"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Business Standard Typography */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">
              Testimonials 
            </span>
            <span className="h-[1px] w-8 bg-orange-600" />
          </motion.div>
          <h2 className="text-3xl md:text-3xl font-black tracking-tight uppercase text-slate-900">
            Client
 <span className="text-orange-600">  Feedback
</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              {/* The Perfect Box */}
              <div className="flex flex-col h-full bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md">
                
                {/* Quote Icon */}
                <div className="text-orange-100 mb-6">
                  <Quote size={32} fill="currentColor" />
                </div>

                {/* Content - Matches heights automatically */}
                <div className="flex-grow">
                  <p className="font-sans text-slate-600 leading-relaxed text-sm md:text-base italic">
                    "{item.content}"
                  </p>
                </div>

                {/* Author Info - Pushed to bottom */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-xs">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className="font-serif text-slate-900 font-bold text-sm uppercase">
                      {item.name}
                    </h4>
                    <p className="font-sans text-orange-600 text-[10px] font-bold uppercase tracking-wide">
                      {item.company} • {item.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* Minimal pagination styling to match the clean UI */
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #cbd5e1 !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
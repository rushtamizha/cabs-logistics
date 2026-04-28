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
    name: "Bala Raja",
    role: "Event Organiser",
    company: "ALERT Being Awards",
    content: "Big thanks to the GGV team! Their support for our 8th Edition awards was seamless. The cars were clean and the drivers were very polite. Highly recommended for events.",
    initial: "B",
    rating: 5
  },
  {
    name: "Sandeep Verma",
    role: "Facility Manager",
    company: "Tech Mahindra",
    content: "Been using GGV for our night shift employees. The GPS tracking gives us peace of mind regarding safety. 24/7 support is actually reachable and helpful.",
    initial: "S",
    rating: 5
  },
  {
    name: "Karthik Raja",
    role: "Travel Lead",
    company: "Infosys",
    content: "Excellent service for VIP pickups. The premium sedans are spotless and the chauffeurs know the city routes like the back of their hand. Very professional.",
    initial: "K",
    rating: 5
  },
  {
    name: "Priya Raghavan",
    role: "Operations",
    company: "Global Logistics",
    content: "Switched to GGV for our container freight. The transition was smooth and their industrial delivery timing is spot on. Very dependable logistics partner.",
    initial: "P",
    rating: 4
  },
  {
    name: "Siddharth Nair",
    role: "Director",
    company: "Wedding Tales",
    content: "Handled a 50-car fleet for a high-profile wedding without a single delay. The coordination was perfect. Made my job as an organizer much easier!",
    initial: "S",
    rating: 5
  },
  {
    name: "Rajesh Kannan",
    role: "Ops Manager",
    company: "Cognizant",
    content: "Amazing support during the heavy rains in Chennai. They mobilized vehicles at short notice for our BCP requirements. Saved us a lot of trouble.",
    initial: "R",
    rating: 5
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
                  <p className=" text-slate-600 leading-relaxed text-sm md:text-base ">
                    "{item.content}"
                  </p>
                </div>

                {/* Author Info - Pushed to bottom */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-xs">
                    {item.initial}
                  </div>
                  <div>
                    <h4 className=" text-slate-900 font-bold text-sm uppercase">
                      {item.name}
                    </h4>
                    <p className=" text-orange-600 text-[10px] font-bold uppercase tracking-wide">
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
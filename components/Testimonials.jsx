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
    content: "On behalf of our entire team, I extend my deepest gratitude for your generous sponsorship and unwavering support in making the ALERT BEING AWARDS – 8th Edition a seamless and successful event.",
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
    content: "Thanks for your wonderful support on arranging vehicles for BCP in CBE office due to heavy rainfall in Chennai city. Appreciate all your efforts and hard work for helping us.",
    initial: "W"
  },
  {
    name: "Sandeep Verma",
    role: "Facility Manager",
    company: "Tech Mahindra",
    content: "GGV has been our go-to partner for employee transport. Their 24/7 support and GPS-tracked vehicles have significantly improved our late-night shift safety compliance.",
    initial: "T"
  },
  {
    name: "Priya Raghavan",
    role: "Operations Head",
    company: "Global Logistics Corp",
    content: "The transition to GGV for our containerized freight was smooth. Their professional approach to logistics and timely industrial deliveries is highly commendable.",
    initial: "G"
  },
  {
    name: "Karthik Raja",
    role: "Travel Coordinator",
    company: "Infosys Bangalore",
    content: "Exceptional service for our VIP client pickups. The premium sedans are always spotless, and the chauffeurs are extremely professional and well-versed with city routes.",
    initial: "I"
  },
  {
    name: "Meera Deshmukh",
    role: "HR Director",
    company: "Standard Chartered",
    content: "Reliability is key for our executive travel, and GGV never fails. Their spot rental service is quick, and the billing process is transparent and corporate-friendly.",
    initial: "S"
  },
  {
    name: "Arjun Reddy",
    role: "Procurement Lead",
    company: "Apollo Hospitals",
    content: "During the recent logistics surge, GGV provided flexible container transport solutions that kept our supply chain moving. A truly dependable logistics partner.",
    initial: "A"
  },
  {
    name: "Siddharth Nair",
    role: "Event Director",
    company: "Wedding Tales",
    content: "Managing a 50-car bridal fleet is no small task. GGV handled our high-profile wedding event with zero delays. The coordination was absolutely perfect.",
    initial: "W"
  },
  {
    name: "Anjali Gupta",
    role: "Admin Manager",
    company: "HCL Technologies",
    content: "Their commitment to safety audits and vehicle maintenance stands out. GGV's employee shuttle service has the highest feedback rating from our staff.",
    initial: "H"
  },
  {
    name: "Vikram Seth",
    role: "Regional Head",
    company: "Amazon Logistics",
    content: "GGV's customized logistics plans helped us manage peak season deliveries effectively. Their pan-India network is a huge asset for our distribution.",
    initial: "A"
  },
  {
    name: "Rajesh Kannan",
    role: "Operations Manager",
    company: "Cognizant Chennai",
    content: "Excellent support during emergency BCP situations. GGV's ability to mobilize vehicles at short notice during heavy rains saved our project deadlines.",
    initial: "C"
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
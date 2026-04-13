"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

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
    company: "Wellsfargo Bangalore",
    content: "We would like to extend sincere appreciation to you, your team and drivers for the exceptional support provided on Monday during the challenges posed by heavy traffic and rains in the city.",
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
    name: "Client Name",
    role: "Operations",
    company: "Corporate India",
    content: "The commitment to ensuring the turnaround of the cabs for the logouts played a crucial role in managing the situation to ensure employees are safely transported.",
    initial: "C"
  },{
    name: "Bala",
    role: "Event Organiser",
    company: "ALERT Being Awards",
    content: "On behalf of our entire team, I extend my deepest gratitude for your generous sponsorship and unwavering support in making the ALERT BEING AWARDS – 8th Edition a seamless and successful event.",
    initial: "A"
  },
  {
    name: "Wellsfargo Bangalore",
    role: "Transport Desk",
    company: "Wellsfargo Bangalore",
    content: "We would like to extend sincere appreciation to you, your team and drivers for the exceptional support provided on Monday during the challenges posed by heavy traffic and rains in the city.",
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
    name: "Client Name",
    role: "Operations",
    company: "Corporate India",
    content: "The commitment to ensuring the turnaround of the cabs for the logouts played a crucial role in managing the situation to ensure employees are safely transported.",
    initial: "C"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-[1px] w-8 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">Testimonials</span>
            <span className="h-[1px] w-8 bg-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 text-center uppercase">
            Client <span className="text-orange-600">Feedback</span>
          </h2>
        </div>

        {/* Swiper Container */}
        <div className="relative pb-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoHeight={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
        
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            // Force cards to stretch to equal height
            className="!overflow-visible flex"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto flex">
                <div className="w-full bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="h-12 w-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                        <Quote size={20} fill="currentColor" />
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>
                    </div>

                    <p className="text-slate-600 font-medium leading-relaxed text-[15px] ">
                      "{item.content}"
                    </p>
                  </div>

                  <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-black text-sm">
                      {item.initial}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black text-[13px] uppercase tracking-tight">{item.name}</h4>
                      <p className="text-orange-600 font-bold text-[9px] uppercase tracking-wider leading-tight">
                        {item.company} • {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* 1. Reset Swiper wrapper to allow flex stretching */
        .swiper-wrapper {
          display: flex !important;
        }

        /* 2. Positioning Pagination clearly below the cards */
        .swiper-pagination {
          position: absolute !important;
          bottom: 0px !important;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }

        /* 3. Clean Enterprise Pagination Style */
        .swiper-pagination-bullet { 
          background: #cbd5e1 !important; 
          opacity: 1 !important; 
          margin: 0 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active { 
          background: #2563eb !important; 
          width: 24px !important; 
          border-radius: 4px !important; 
        }
      `}</style>
    </section>
  );
};

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#facc15" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default Testimonials;
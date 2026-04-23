"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

const clients = [
  { name: 'Client 1', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQF2GKiBwNHwvg/company-logo_200_200/B4DZWlEzO3GcAI-/0/1742231254432/alten_india_logo?e=2147483647&v=beta&t=k1wOAABWpNewhhdoXvhn9jeHs7r7WRDKEA-b8mKAA5E' },
  { name: 'Client 2', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTKFj1o8qxUB9rCPSgrpyVp5wW3ldMniF8A&s' },
  { name: 'Client 3', logo: 'https://media.licdn.com/dms/image/v2/C510BAQFcc-qYWBcMYw/company-logo_200_200/company-logo_200_200/0/1630594875453?e=2147483647&v=beta&t=ipWZJ8W6Xb44O4h-5j7iDp-PzWQKBcooelAQNNFdnk0' },
  { name: 'Client 4', logo: 'https://media.licdn.com/dms/image/v2/C560BAQGLWAfpQ2mfdg/company-logo_200_200/company-logo_200_200/0/1671182609019/rideriver_logo?e=2147483647&v=beta&t=WLjOKXTQdz5exsHbJKoCzTZ-9qyirERlQL43aIR59KE' },
  { name: 'Client 5', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFccalKO4J4Xg/company-logo_200_200/company-logo_200_200/0/1633664191965?e=2147483647&v=beta&t=yaL3Nm9MVE-Q06hzbVyj8NJbjucaz2TPh3V7kgE84ZE' },
  { name: 'Client 6', logo: 'https://media.licdn.com/dms/image/v2/D560BAQExV-c002IJ2w/company-logo_200_200/company-logo_200_200/0/1686819096389?e=2147483647&v=beta&t=U79tYrYsZA1KCh_XHG-cge39aVLYsgNYtBUGE90-rys' },{ name: 'Client 7', logo: 'https://static-asset.inc42.com/logo/apna.png' },{ name: 'Client 8', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_jVFjYJqT5zFvfJAaB35islVPPA9JAi-aw&s' },
];

const Clients = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="h-[1px] w-6 bg-orange-600" />
            <span className="text-orange-600 font-bold uppercase tracking-[3px] text-[10px]">Trusted By</span>
            <span className="h-[1px] w-6 bg-orange-600" />
          </motion.div>
          <h2 className="text-3xl font-black  tracking-tighter uppercase text-slate-900 leading-none">
            Our <span className="text-orange-600">Partners</span>
          </h2>
        </div>

        <div className="relative">
          {/* Gradient Overlays for smooth fade-in/out effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={5}
            loop={true}
            speed={4000} // Speed for linear movement
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="flex items-center !ease-linear"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center py-4">
                <div className="group relative grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-10 md:h-12 w-auto object-contain opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* Forces Swiper to move at a constant linear speed without easing */
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Clients;
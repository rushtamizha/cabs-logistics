"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';

const clients = [
  { 
    name: 'Alten India', 
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQF2GKiBwNHwvg/company-logo_200_200/B4DZWlEzO3GcAI-/0/1742231254432/alten_india_logo?e=2147483647&v=beta&t=k1wOAABWpNewhhdoXvhn9jeHs7r7WRDKEA-b8mKAA5E' 
  },
  { 
    name: 'Wells Fargo', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Wells_Fargo_Logo_%282020%29.svg/250px-Wells_Fargo_Logo_%282020%29.svg.png' 
  },
  { 
    name: 'Walmart', 
    logo: 'https://www.vusion.com/wp-content/uploads/2024/12/Image-de-retombee-Site-Web-9-768x511.png.webp' 
  },
  { 
    name: 'Formula Corporate', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTKFj1o8qxUB9rCPSgrpyVp5wW3ldMniF8A&s' // Placeholder for Formula 
  },
  { 
    name: 'Travelbridge India', 
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQFcc-qYWBcMYw/company-logo_200_200/company-logo_200_200/0/1630594875453?e=2147483647&v=beta&t=ipWZJ8W6Xb44O4h-5j7iDp-PzWQKBcooelAQNNFdnk0' 
  },
  { 
    name: 'RIVA Mobility', 
    logo: 'https://www.riva-ev.nl/logo.png' 
  },
  { 
    name: 'Crouzet Mechatronics', 
    logo: 'https://logo.clearbit.com/crouzet.com' 
  },
  { 
    name: 'ApnaTime Tech', 
    logo: 'https://static-asset.inc42.com/logo/apna.png' 
  },
  { 
    name: 'Maxime Technologies', 
    logo: 'https://logo.clearbit.com/maxime.io' 
  },
  { 
    name: 'Alert Being', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_jVFjYJqT5zFvfJAaB35islVPPA9JAi-aw&s' 
  },
  { 
    name: 'Vijay & Co', 
    logo: 'https://ui-avatars.com/api/?name=Vijay+Co&background=0f172a&color=fff&size=200' // Elegant fallback for local firms
  },
  { 
    name: 'Corporate India', 
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFccalKO4J4Xg/company-logo_200_200/company-logo_200_200/0/1633664191965?e=2147483647&v=beta&t=yaL3Nm9MVE-Q06hzbVyj8NJbjucaz2TPh3V7kgE84ZE' 
  },
];
const Clients = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="h-[2px] w-8 bg-orange-600" />
            <span className="text-orange-600 font-sans font-bold uppercase tracking-[4px] text-[10px]">Strategic Partners</span>
            <span className="h-[2px] w-8 bg-orange-600" />
          </motion.div>
          <h2 className=" text-3xl md:text-4xl font-black tracking-tighter uppercase text-slate-900 leading-none">
            Trusted by <span className="text-orange-600 ">Industry Leaders</span>
          </h2>
        </div>

        <div className="relative">
          {/* Edge Gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="flex items-center !ease-linear py-4"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <div className="group flex items-center flex-col  gap-4   transition-all duration-500 cursor-default">
                  {/* Logo */}
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-8 md:h-10 w-auto object-contain  "
                  />
                  {/* Name */}
                  <span className=" text-sm font-black uppercase tracking-tighter text-slate-500  transition-colors whitespace-nowrap">
                    {client.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        /* Continuous marquee effect */
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Clients;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Car, Bus, Heart, Plane, ShieldCheck, Map, MessageSquare, Truck, Package } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const services = [
  {
    title: "Premium Car Rental",
    subtitle: "Luxury & Executive",
    desc: "Executive-class travel for corporate leadership. Our fleet includes top-tier sedans and SUVs maintained to showroom standards.",
    icon: <Car size={24} />,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
    features: ["VIP Chauffeurs", "5+ Years Expertise", "GPS Tracked"]
  },
  {
    title: "Logistics & Container",
    subtitle: "Industrial Freight",
    desc: "Safe and reliable containerized transport for industrial cargo and corporate freight across our Pan-India network.",
    icon: <Truck size={24} />,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop",
    features: ["Secure Freight", "Timely Delivery", "Safety Audited"]
  },
  {
    title: "Employee Transport",
    subtitle: "Corporate Daily Commute",
    desc: "Seamless 24/7 managed commute solutions. Scalable fleet from 12-seaters to luxury coaches for staff transit.",
    icon: <Bus size={24} />,
    image: "https://www.tripkartz.com/wp-content/themes/tripkartz-theme/assets/who-we-are.webp",
    features: ["Shift Management", "Panic Buttons", "Compliance Tracking"]
  },
  {
    title: "Wedding & Events",
    subtitle: "Tailor-made mobility",
    desc: "Custom mobility plans for large-scale events, conferences, and luxury bridal fleets with coordinated arrivals.",
    icon: <Heart size={24} />,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    features: ["Valet Support", "24/7 Desk", "Event Branding"]
  }
];

const ServicesPage = () => {
  const WHATSAPP_NUMBER = "919943098822";

  const handleServiceEnquiry = (serviceTitle) => {
    const message = `*Service Enquiry - GGV Cabs & Logistics*%0A` +
                    `--------------------------%0A` +
                    `Interested in: *${serviceTitle}*%0A` +
                    `Please share pricing and fleet availability.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-orange-600" />
              <span className="text-orange-600 font-sans font-bold uppercase tracking-[4px] text-[11px]">Value Added Services</span>
            </div>
            <h1 className=" text-6xl md:text-8xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9] mb-8">
              Driving Success <br />
              <span className="text-orange-600 ">Together.</span>
            </h1>
            <p className="font-sans text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              Founded on 15+ years of industry expertise, GGV delivers seamless mobility and logistics solutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Text Below Image */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                {/* Image Container */}
                <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <div className="h-14 w-14 bg-white/90 backdrop-blur-md text-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section (Below Image) */}
                <div className="px-2">
                  <p className="text-orange-600 font-sans font-bold uppercase tracking-[3px] text-[10px] mb-3">
                    {service.subtitle}
                  </p>
                  <h3 className=" text-4xl font-black uppercase text-slate-900 mb-4 tracking-tighter">
                    {service.title}
                  </h3>
                  <p className=" text-slate-500 leading-relaxed mb-6 max-w-lg ">
                    "{service.desc}"
                  </p>

                  {/* Features Chips */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full">
                        <ShieldCheck size={14} className="text-orange-600" />
                        <span className="text-[10px] font-bold uppercase tracking-tight text-slate-600">{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handleServiceEnquiry(service.title)}
                    className="w-full md:w-auto bg-slate-900 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg active:scale-95 group/btn"
                  >
                    <span className="font-black uppercase text-[11px] tracking-[2px]">Book {service.title}</span>
                    <MessageSquare size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* Stats Bar */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem icon={<Map size={24} />} label="Pan India" value="Network" />
            <StatItem icon={<ShieldCheck size={24} />} label="Safety first" value="Protocols" />
            <StatItem icon={<Package size={24} />} label="Container" value="Logistics" />
            <StatItem icon={<Bus size={24} />} label="Corporate" value="Shuttles" />
          </div>
        </div>
      </section>
    </main>
  );
};

const StatItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
      {icon}
    </div>
    <div>
      <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mb-1">{label}</p>
      <p className="text-slate-900 font-black uppercase text-xl tracking-tighter">{value}</p>
    </div>
  </div>
);

export default ServicesPage;
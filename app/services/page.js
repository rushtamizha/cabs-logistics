"use client";
import React from "react";
import { motion } from "framer-motion";
import { Car, Bus, Gift, Plane, ShieldCheck, Map, MessageSquare } from "lucide-react";
import Milestones from "@/components/Milestones";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const services = [
  {
    title: "Premium Car Rental",
    subtitle: "Luxury Sedans",
    desc: "Executive-class travel for corporate leadership. Our cabs includes top-tier sedans maintained to showroom standards.",
    icon: <Car size={24} />,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
    features: ["Chauffeur Driven", "Mineral Water", "GPS Tracked"]
  },
  {
    title: "Bus & Shuttle",
    subtitle: "Group Travel",
    desc: "Efficient mobility for employee daily commutes. Scalable cabs from 12-seaters to luxury coaches.",
    icon: <Bus size={24} />,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop",
    features: ["Automated Routing", "Shift Management", "Panic Buttons"]
  },
  {
    title: "Wedding & Events",
    subtitle: "Special cabs",
    desc: "Seamless logistics for your most important days. We coordinate cabs movements for large guest lists.",
    icon: <Gift size={24} />,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
    features: ["Coordinated Arrivals", "Valet Support", "24/7 Desk"]
  },
  {
    title: "Airport & Outstation",
    subtitle: "Reliable Travel",
    desc: "Punctual transfers and long-distance travel. Real-time flight monitoring and dedicated outstation drivers.",
    icon: <Plane size={24} />,
    image: "https://zoomcabs.in/wp-content/uploads/2026/02/05-1.jpg",
    features: ["Zero Waiting Time", "Flight Tracking", "Fixed Pricing"]
  }
];

const ServicesPage = () => {
  const WHATSAPP_NUMBER = "919943098822";

  const handleServiceEnquiry = (serviceTitle) => {
    const message = `*Service Enquiry - Cabs&logistics*%0A` +
                    `--------------------------%0A` +
                    `I am interested in: *${serviceTitle}*%0A` +
                    `Please share more details regarding pricing and availability.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-8 bg-orange-600" />
              <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">What we do</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9] mb-8">
              Integrated <br />
              <span className="text-orange-600">Mobility</span> Solutions.
            </h1>
          </div>
        </div>
      </section>

      <Milestones />

      {/* Services Grid with Image Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden bg-slate-900"
              >
                {/* Background Image with Zoom Effect */}
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="h-full w-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full z-10 p-10 md:p-14 flex flex-col justify-end">
                  <div className="h-14 w-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20 group-hover:rotate-6 transition-transform">
                    {service.icon}
                  </div>
                  
                  <p className="text-orange-400 font-black uppercase tracking-[4px] text-[10px] mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="text-4xl font-black uppercase tracking-tight text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 font-medium leading-relaxed mb-8 max-w-sm">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-4 pb-10 border-b border-white/10">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-orange-500" />
                        <span className="text-[10px] font-black uppercase tracking-tight text-slate-100">{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* WhatsApp CTA */}
                  <button 
                    onClick={() => handleServiceEnquiry(service.title)}
                    className="mt-10 w-full bg-white hover:bg-orange-600 text-slate-900 hover:text-white rounded-2xl py-5 flex items-center justify-center gap-3 transition-all duration-300 group/btn"
                  >
                    <span className="font-black uppercase text-[10px] tracking-[3px]">Enquire via WhatsApp</span>
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
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem icon={<Map size={24} />} label="Pan India" value="Network" />
            <StatItem icon={<ShieldCheck size={24} />} label="Safety first" value="Protocols" />
            <StatItem icon={<Plane size={24} />} label="Airport" value="Concierge" />
            <StatItem icon={<Bus size={24} />} label="Corporate" value="Shuttles" />
          </div>
        </div>
      </section>
    </main>
  );
};

const StatItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center text-center space-y-4">
    <div className="h-12 w-12 rounded-full border border-slate-800 flex items-center justify-center text-orange-500">
      {icon}
    </div>
    <div>
      <p className="text-slate-500 font-black uppercase tracking-widest text-[9px]">{label}</p>
      <p className="text-white font-black uppercase text-xl tracking-tighter">{value}</p>
    </div>
  </div>
);

export default ServicesPage;
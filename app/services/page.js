"use client";
import React from "react";
import { motion } from "framer-motion";
import { Car, Bus, Heart , Plane, ShieldCheck, Map, MessageSquare, Truck, Globe, Award } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const services = [
  {
    title: "Employee Transportation (ETS)",
    subtitle: "Daily Corporate Commute",
    desc: "Reliable solutions for IT parks and manufacturing. Our structured operations ensure safe, punctual, and efficient commute services for your workforce.",
    icon: <Bus size={24} />,
    image: "https://www.tripkartz.com/wp-content/themes/tripkartz-theme/assets/who-we-are.webp",
    features: ["Shift Management", "Panic Buttons", "Real-time Tracking"]
  },
  {
    title: "Corporate Car Rentals",
    subtitle: "Executive Mobility",
    desc: "Professional chauffeur-driven services for executives, meetings, and events. Premium comfort paired with showroom-standard reliability.",
    icon: <Car size={24} />,
    image: "https://indiantravelhouse.com/wp-content/uploads/2024/05/40619957-21a4-40a8-a086-18b4c02ba9fc.jpg",
    features: ["Professional Chauffeurs", "VIP Comfort", "Corporate Billing"]
  },
  {
    title: "Airport Transfers",
    subtitle: "24/7 Coordination",
    desc: "Punctual pickup and drop services for corporate clients and VIP guests with real-time coordination and zero waiting time.",
    icon: <Plane size={24} />,
    image: "https://www.ruby-services.com/en/images/5-good-reasons-to-use-a-limo-service-for-your-airport-transfers_pd40106w2440h1500rcrop_559.jpg",
    features: ["Flight Monitoring", "Meet & Greet", "Punctual Service"]
  },
  {
    title: "Outstation Car Rental",
    subtitle: "Pan-India Travel",
    desc: "Safe outstation services across India. Ideal for business trips, site visits, and multi-city corporate travel requirements.",
    icon: <Globe size={24} />,
    image: "https://shreeganeshcab.com/images/16.Mumbai%20Outstation%20Cabs.webp",
    features: ["Verified Drivers", "Interstate Permits", "24/7 Support"]
  },
  {
    title: "Premium & Executive Rentals",
    subtitle: "Luxury Fleet",
    desc: "High-end luxury vehicles dedicated to executive movement, high-profile corporate events, and special business occasions.",
    icon: <Award size={24} />,
    image: "https://www.wticabs.com:3001/global/app/v1/aws/getImage/blogimages/1767002443014_Corporate_Car_Rentals_for_CXOs_Premium_Mobility_Without_Fleet_Hassles.jpg",
    features: ["Luxury Sedans", "Immaculate Fleet", "VIP Protocols"]
  },{

title: "Wedding & Events",

subtitle: "Tailor-made mobility",

desc: "Custom mobility plans for large-scale events, conferences, and luxury bridal fleets with coordinated arrivals.",

icon: <Heart size={24} />,

image: "https://hurryupcabs.com/assets/top-cities/Untitled%20design%20-%202025-09-04T165139.692.webp",

features: ["Valet Support", "24/7 Desk", "Event Branding"]

}
];

const ServicesPage = () => {
  const WHATSAPP_NUMBER = "919943098822";

  const handleServiceEnquiry = (serviceTitle) => {
    const message = `*Service Enquiry - GGV Cabs & Logistics*%0A` +
                    `--------------------------%0A` +
                    `I am interested in: *${serviceTitle}*%0A` +
                    `Please share pricing details and vehicle availability.`;
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
              <span className="text-orange-600 font-sans font-bold uppercase tracking-[4px] text-[11px]">Solutions for Businesses</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9] mb-8">
              Integrated <br />
              <span className="text-orange-600">Mobility</span> Solutions.
            </h1>
            <p className="font-sans text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed">
              GGV Cabs & Logistics delivers dependable, safe, and cost-effective transportation tailored to your specific business needs across India.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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

                {/* Content Section */}
                <div className="px-2">
                  <p className="text-orange-600 font-sans font-bold uppercase tracking-[3px] text-[10px] mb-3">
                    {service.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-4 tracking-tighter">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6 max-w-lg">
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
                  
                  {/* WhatsApp Enquire Button */}
                  <button 
                    onClick={() => handleServiceEnquiry(service.title)}
                    className="w-full md:w-auto bg-slate-900 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg active:scale-95 group/btn"
                  >
                    <span className="font-black uppercase text-[11px] tracking-[2px]">Enquire via WhatsApp</span>
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
            <StatItem icon={<Truck size={24} />} label="Industrial" value="Logistics" />
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
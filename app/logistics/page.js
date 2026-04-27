"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Truck, 
  Warehouse, 
  Package, 
  ShieldCheck, 
  Globe, 
  BarChart3, 
  MessageSquare,
  Navigation
} from "lucide-react";
import Milestones from "@/components/Milestones";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

const logisticsSolutions = [
  // {
  //   title: "Freight Forwarding",
  //   subtitle: "Global Transport",
  //   desc: "Seamless air, sea, and land freight solutions. We handle complex customs clearances and international documentation for your global cargo.",
  //   icon: <Globe size={24} />,
  //   image: "https://arrowshipping.in/images/services/freight-forwarding.webp",
  //   features: ["Customs Brokerage", "Real-time Tracking", "Multi-modal Paths"]
  // },
  // {
  //   title: "Smart Warehousing",
  //   subtitle: "Secure Storage",
  //   desc: "Tech-enabled storage solutions with real-time inventory management. Our facilities are optimized for safety and rapid distribution.",
  //   icon: <Warehouse size={24} />,
  //   image: "https://www.b2eautomation.com/content/warehouse-box-moving-robots.png",
  //   features: ["Climate Control", "WMS Integration", "24/7 Surveillance"]
  // },
  {
    title: "Last-Mile Delivery",
    subtitle: "Local Logistics",
    desc: "Precision delivery services that bridge the gap between your warehouse and the customer's doorstep with speed and reliability.",
    icon: <Package size={24} />,
    image: "https://www.sarvamlogistics.com/images/last-mile-rural-india.webp",
    features: ["Route Optimization", "Proof of Delivery", "Same-day Service"]
  },
  // {
  //   title: "Corporate Supply",
  //   subtitle: "B2B Solutions",
  //   desc: "End-to-end supply chain management for large-scale enterprises. We optimize your procurement and distribution cycles.",
  //   icon: <BarChart3 size={24} />,
  //   image: "https://simplisales.com/_next/image?url=https%3A%2F%2Fblog.simplisales.io%2Fwp-content%2Fuploads%2F2024%2F12%2Fblog-What-is-B2B-Supply-Chain-Management-SCM_%403x-scaled.webp&w=3840&q=75",
  //   features: ["Procurement Support", "Vendor Management", "Cost orangeuction"]
  // }
];

const LogisticsPage = () => {
  const WHATSAPP_NUMBER = "919943098822";

  const handleLogisticsEnquiry = (solutionTitle) => {
    const message = `*Logistics Enquiry - Cabs&logistics*%0A` +
                    `--------------------------%0A` +
                    `Solution: *${solutionTitle}*%0A` +
                    `Please provide a consultation regarding our supply chain needs.`;
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
              <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">Supply Chain</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9] mb-8">
              Reliable <br />
              <span className="text-orange-600">Logistics</span> Network.
            </h1>
            <p className="text-slate-500 font-medium text-lg leading-relaxed border-l-4 border-orange-600 pl-6">
              Optimizing the movement of goods with precision, technology, and 
              unmatched efficiency across the subcontinent and beyond.
            </p>
          </div>
        </div>
      </section>

      <Milestones />

      {/* Logistics Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {logisticsSolutions.map((solution, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative h-[600px] rounded-[3rem] overflow-hidden bg-slate-900"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="h-full w-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full z-10 p-10 md:p-14 flex flex-col justify-end">
                  <div className="h-14 w-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20 group-hover:rotate-6 transition-transform">
                    {solution.icon}
                  </div>
                  
                  <p className="text-orange-400 font-black uppercase tracking-[4px] text-[10px] mb-2">
                    {solution.subtitle}
                  </p>
                  <h3 className="text-4xl font-black uppercase tracking-tight text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-slate-300 font-medium leading-relaxed mb-8 max-w-sm">
                    {solution.desc}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-4 pb-10 border-b border-white/10">
                    {solution.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-orange-500" />
                        <span className="text-[10px] font-black uppercase tracking-tight text-slate-100">{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* WhatsApp CTA */}
                  <button 
                    onClick={() => handleLogisticsEnquiry(solution.title)}
                    className="mt-10 w-full bg-white hover:bg-orange-600 text-slate-900 hover:text-white rounded-2xl py-5 flex items-center justify-center gap-3 transition-all duration-300 group/btn"
                  >
                    <span className="font-black uppercase text-[10px] tracking-[3px]">Consult with Experts</span>
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

      {/* Corporate Trust Bar */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatItem icon={<Truck size={24} />} label="Vast cabs" value="Transport" />
            <StatItem icon={<Navigation size={24} />} label="Live Track" value="Precision" />
            <StatItem icon={<Warehouse size={24} />} label="Secure" value="Facilities" />
            <StatItem icon={<Package size={24} />} label="On-Time" value="Delivery" />
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

export default LogisticsPage;
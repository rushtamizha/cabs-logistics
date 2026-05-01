"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Globe } from "lucide-react";

const clients = [
  { name: 'Alten India', logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQF2GKiBwNHwvg/company-logo_200_200/B4DZWlEzO3GcAI-/0/1742231254432/alten_india_logo?e=2147483647&v=beta&t=k1wOAABWpNewhhdoXvhn9jeHs7r7WRDKEA-b8mKAA5E' },
  { name: 'Formula Corporate', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTKFj1o8qxUB9rCPSgrpyVp5wW3ldMniF8A&s' },
  { name: 'Travelbridge India', logo: 'https://media.licdn.com/dms/image/v2/C510BAQFcc-qYWBcMYw/company-logo_200_200/company-logo_200_200/0/1630594875453?e=2147483647&v=beta&t=ipWZJ8W6Xb44O4h-5j7iDp-PzWQKBcooelAQNNFdnk0' },
  { name: 'RIVA Mobility', logo: 'https://www.riva-ev.nl/logo.png' },
  { name: 'Crouzet Mechatronics', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwOkJUlaElclVBpbZIha8JiBbVxeer34qDQ&s' },
  { name: 'ApnaTime Tech', logo: 'https://static-asset.inc42.com/logo/apna.png' },
  { name: 'Maxime Technologies', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFccalKO4J4Xg/company-logo_200_200/company-logo_200_200/0/1633664191965?e=2147483647&v=beta&t=yaL3Nm9MVE-Q06hzbVyj8NJbjucaz2TPh3V7kgE84ZE' },
  { name: 'Vijay & Co', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_jVFjYJqT5zFvfJAaB35islVPPA9JAi-aw&s' },
  { name: 'TVS', logo: 'https://www.logo.wine/a/logo/TVS_Motor_Company/TVS_Motor_Company-Logo.wine.svg' },
  { name: 'Techno plast', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ZeKVi4PLf-YHTUoExTMvqq_H0jWr_bXsQA&s' },
  { name: 'Kaynes - Pochampalli', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEmRCGYN84gqKpyNBLi584ILijI3Auuukq4g&s' },
  { name: 'Refex mobility limited', logo: 'https://refexmobility.com/wp-content/uploads/2025/07/Logo-1.png' },
  { name: 'Fortuner hotel', logo: 'https://hotelfortuner.in/wp-content/uploads/2023/04/cropped-Hotel_Fortuner_Logo-removebg-preview-1-150x150.png' },
  { name: 'LA Classic hotel', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIruze_jZt5C9lFG8McKmOroi4878Bbb4SSw&s' },
];

const ClientsPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-600 font-black uppercase tracking-[4px] text-[11px] mb-4 block">
            Our Network
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-none mb-6">
            Trusted by <span className="text-orange-600">Industry Leaders</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            We provide seamless mobility and logistics solutions to global corporations, 
            premium hotels, and manufacturing giants across India.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="text-orange-600" />, label: "Compliance", val: "100% Audited" },
            { icon: <Users className="text-orange-600" />, label: "Daily Commuters", val: "10,000+" },
            { icon: <Globe className="text-orange-600" />, label: "Presence", val: "Pan-India" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 flex items-center gap-6 shadow-sm">
              <div className="h-14 w-14 bg-orange-50 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                <p className="text-xl font-black text-slate-900">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-900/5 transition-all flex flex-col items-center justify-center aspect-square"
            >
              <div className="h-24 w-full relative flex items-center justify-center overflow-hidden">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="mt-6 text-[10px] font-black uppercase tracking-[2px] text-slate-400 group-hover:text-orange-600 transition-colors text-center">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      
    </main>
  );
};

export default ClientsPage;
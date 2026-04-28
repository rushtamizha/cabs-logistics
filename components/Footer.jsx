"use client";
import React from "react";
import { Mail, Phone, MapPin, Globe, ShieldCheck } from "lucide-react";

const socialLinks = [
  {
    name: "Linkedin",
    href: "#",
    path: (
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
    ),
  },
  {
    name: "Facebook",
    href: "#",
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
];

const footerLinks = [
  {
    title: "Our Services",
    links: [
      { name: "Employee Transport (ETS)", href: "/services" },
      { name: "Corporate Car Rentals", href: "/services" },
      { name: "Airport Transfers", href: "/services" },
      { name: "Logistics Solutions", href: "/services" },
    ],
  },
  {
    title: "Presence",
    links: [
      { name: "Bangalore", href: "#" },
      { name: "Chennai", href: "#" },
      { name: "Hosur & Krishnagiri", href: "#" },
      { name: "Hyderabad & Delhi", href: "#" },
    ],
  }
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Primary Contact */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-xl  flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="GGV Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase text-white">
                GGV CABS<span className="text-orange-600"> & LOGISTICS</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-medium">
              GGV Cabs & Logistics is a trusted Pan-India provider of corporate mobility. 
              Since 2020, we have specialized in safe, chauffeur-driven rentals and 24/7 employee 
              transportation solutions tailored to modern business needs.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {social.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex lg:justify-end items-center">
            <div className="grid sm:grid-cols-2 gap-8 w-full max-w-md">
              <div className="space-y-2">
                <p className="text-orange-500 font-black uppercase tracking-[3px] text-[10px]">Support 24/7</p>
                <p className="text-xl font-bold text-white">+91 99430 98822</p>
              </div>
              <div className="space-y-2">
                <p className="text-orange-500 font-black uppercase tracking-[3px] text-[10px]">Operations Email</p>
                <p className="text-xl font-bold text-white">sales@ggvcabs.co.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Regional Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* Quick Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="font-black uppercase tracking-[3px] text-[10px] text-orange-500">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="text-slate-400 hover:text-white text-sm font-bold transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Office 1 & 2 */}
          <div className="space-y-8">
            <div>
              <h4 className="font-black uppercase tracking-[3px] text-[10px] text-orange-500 mb-4">Registered Office</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                No-1/78D, Puliyur, Pochampalli,<br />
                Krishnagiri, Tamil Nadu – 635201
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[3px] text-[10px] text-orange-500 mb-4">Bangalore Office</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                No-07, 7th Cross, CT Bed,<br />
                Banashankari 2nd Stage, Bangalore – 560070
              </p>
            </div>
          </div>

          {/* Office 3 & 4 */}
          <div className="space-y-8">
            <div>
              <h4 className="font-black uppercase tracking-[3px] text-[10px] text-orange-500 mb-4">Hosur Office</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                No-22, Kothagondapalli, Royakottai Road,<br />
                Hosur, Krishnagiri, TN – 635109
              </p>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-[3px] text-[10px] text-orange-500 mb-4">Chennai Office</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                No-1/22, 2nd Floor, Mangadu Main Road,<br />
                Kovur, Chennai – 600128
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
             <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
              © 2026 GGV Cabs & Logistics. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-500 text-[9px] font-bold uppercase tracking-widest">
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> Safety Audited</span>
            <span className="flex items-center gap-1"><Globe size={12} /> Pan-India Network</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
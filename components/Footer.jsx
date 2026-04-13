"use client";
import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Zap 
} from "lucide-react";

const socialLinks = [
  { 
    name: 'Facebook', 
    href: '#', 
    path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> 
  },
  { 
    name: 'Twitter', 
    href: '#', 
    path: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/> 
  },
  { 
    name: 'Linkedin', 
    href: '#', 
    path: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/> 
  }
];

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Corporate cabs", href: "#" },
      { name: "Airport Transfers", href: "#" },
      { name: "Employee Transport", href: "#" },
      { name: "Event Logistics", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Milestones", href: "#" },
      { name: "Safety Protocol", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "#" },
      { name: "Contact Desk", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section: Brand & Quick Contact Info */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-xl   transition-all duration-300 group-hover:scale-110">
              <img
                src="/logo.jpg"
                alt="Wepzite Digital Logo"
                className="h-full w-full object-cover"
              />
            </div>
              <h2 className="text-3xl font-black tracking-tighter uppercase  text-white">
                cabs<span className="text-orange-500"> & logistics</span>
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-medium">
              Since 2020, we have delivered premium transportation solutions for leading corporates. With an in-house fleet ranging from executive cars to Volvo coaches, we provide 100% reliable employee, school, and B2B logistics services. Currently operating across Chennai, Coimbatore, Hosur, and Bangalore, we bridge the gap between Tier-1 hubs and Tier-3 cities
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  aria-label={social.name}
                  className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all duration-300"
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
                    <p className="text-orange-500 font-black uppercase tracking-widest text-[10px]">Quick Support</p>
                    <p className="text-xl font-bold text-white tracking-tight">+91 99430 98822</p>
                </div>
                <div className="space-y-2">
                    <p className="text-orange-500 font-black uppercase tracking-widest text-[10px]">Operations Email</p>
                    <p className="text-xl font-bold text-white tracking-tight">sales@ggvcabs.co.in</p>
                </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Links & Detailed Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="font-black uppercase tracking-[3px] text-[10px] text-orange-500">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a  className="text-slate-400 hover:text-white text-sm font-bold transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Headquarters Location Info */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <h4 className="font-black uppercase tracking-[3px] text-[10px] text-orange-500">Regional HQ</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-slate-800 flex shrink-0 items-center justify-center text-orange-500">
                  <MapPin size={18} />
                </div>
                <p className="text-slate-400 text-sm font-medium leading-relaxed"> No- 1/78d, Puliyur,
                  <br/> Pochampalli, Krishnagiri, 
                  <br/>
                Tamilnadu,  635201
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © 2026 Cabs&logistics Logistics. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
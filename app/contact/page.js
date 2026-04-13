"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, MapPin, Send, Zap } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "Premium Car Rental",
    message: "",
  });

  const WHATSAPP_NUMBER = "919943098822"; // Replace with your actual number

  const handleWhatsAppredirect = (e) => {
    e.preventDefault();

    // Encoding the message for a professional look in WhatsApp
    const text = `*New Enquiry - Cabs&logistics*%0A` +
                 `--------------------------%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Company:* ${formData.company}%0A` +
                 `*Service:* ${formData.service}%0A` +
                 `*Message:* ${formData.message}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-[1px] w-8 bg-orange-600" />
                <span className="text-orange-600 font-black uppercase tracking-[4px] text-[10px]">Contact Us</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-slate-900 leading-[0.85] mb-8">
                Get in <br />
                <span className="text-orange-600">Touch.</span>
              </h1>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                Ready to optimize your cabs? Reach out to our 24/7 operations desk.
              </p>
            </div>

            <div className="space-y-8">
              <ContactDetail 
                icon={<Phone size={20} />} 
                label="Direct Line" 
                value="+91 99430 98822" 
              />
              <ContactDetail 
                icon={<Mail size={20} />} 
                label="Email Address" 
                value="sales@ggvcabs.co.in" 
              />
              <ContactDetail 
                icon={<MapPin size={20} />} 
                label="Headquarters" 
                value="No- 1/78d, Puliyur,
Pochampalli, Krishnagiri,
Tamilnadu, 635201" 
              />
            </div>
          </div>

          {/* Right Side: Enquiry Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-sm"
            >
              <form onSubmit={handleWhatsAppredirect} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-orange-500 transition-colors font-bold text-slate-900"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Company Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enterprise Ltd"
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-orange-500 transition-colors font-bold text-slate-900"
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Service Interested In</label>
                  <select 
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-orange-500 transition-colors font-bold text-slate-900 appearance-none"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Premium Car Rental</option>
                    <option>Bus & Shuttle</option>
                    <option>Logistics Hub</option>
                    <option>Corporate Supply</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                  <textarea 
                    required
                    rows="4"
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-orange-500 transition-colors font-bold text-slate-900 resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-slate-900 text-white rounded-2xl py-5 flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-orange-500/20 group"
                >
                  <span className="font-black uppercase text-xs tracking-[3px]">Send to WhatsApp</span>
                  <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
};

const ContactDetail = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 group">
    <div className="h-12 w-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
      <p className="text-slate-900 font-black text-lg tracking-tight uppercase">{value}</p>
    </div>
  </div>
);

export default ContactPage;
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, User, Phone, MapPin, Building2, CarFront, Calendar } from "lucide-react";

const ContactPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    service: "Employee Transportation (ETS)",
    requirement: "Daily Commute",
    fleet: "Sedan"
  });

  const WHATSAPP_NUMBER = "919943098822";

  useEffect(() => {
    const initialTimeout = setTimeout(() => setIsVisible(true), 10000);
    const interval = setInterval(() => {
      if (!isSubmitted) setIsVisible(true);
    }, 120000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Detailed Business Enquiry*%0A` +
                    `--------------------------%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Company:* ${formData.company}%0A` +
                    `*Service:* ${formData.service}%0A` +
                    `*Type:* ${formData.requirement}%0A` +
                    `*Fleet:* ${formData.fleet}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsVisible(false), 4000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 z-[9999] flex items-center justify-center md:block px-4"
        >
          {/* Overlay for mobile to focus on the form */}
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm md:hidden" onClick={() => setIsVisible(false)} />

          <div className="bg-white rounded-[2rem] shadow-2xl  overflow-hidden w-full max-w-[500px] relative z-10">
            
            {/* Header */}
            <div className="bg-slate-900 p-8 text-white relative">
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Business <span className="text-orange-500">Enquiry Form</span>
              </h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">
                Pan-India Corporate Mobility & Logistics
              </p>
            </div>

            <div className="p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-4 top-4 text-slate-400" size={18} />
                      <input required type="text" placeholder="Full Name"
                        className="w-full text-slate-700 bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                        onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <Phone className="absolute left-4 top-4 text-slate-400" size={18} />
                      <input required type="tel" placeholder="Contact Number"
                        className="w-full text-slate-700 bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="relative">
                    <Building2 className="absolute left-4 top-4 text-slate-400" size={18} />
                    <input required type="text" placeholder="Company / Organization Name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none text-slate-700"
                      onChange={(e) => setFormData({...formData, company: e.target.value})} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Service Category</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 text-slate-400" size={18} />
                        <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl py-4 pl-12 pr-4 text-sm appearance-none focus:ring-2 focus:ring-orange-500/20 outline-none"
                          onChange={(e) => setFormData({...formData, service: e.target.value})}>
                          <option>Employee Transportation (ETS)</option>
                          <option>Corporate Car Rental</option>
                          <option>Logistics & Container</option>
                          <option>Airport Transfers</option>
                          <option>Outstation Travel</option>
                        </select>
                      </div>
                    </div>

                    {/* Fleet Preference */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Vehicle Preference</label>
                      <div className="relative">
                        <CarFront className="absolute left-4 top-4 text-slate-400" size={18} />
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-sm appearance-none focus:ring-2 text-slate-700 focus:ring-orange-500/20 outline-none"
                          onChange={(e) => setFormData({...formData, fleet: e.target.value})}>
                          <option>Standard Sedan</option>
                          <option>Premium SUV (Crysta/Innova)</option>
                          <option>Executive Luxury</option>
                          <option>Bus / Tempo Traveller</option>
                          <option>Container Truck</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit"
                    className="w-full bg-orange-600 hover:bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[2px] flex items-center justify-center gap-3 shadow-xl shadow-orange-100 transition-all active:scale-95 mt-4"
                  >
                    Request Business Quote <Send size={16} />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="h-20 w-20 bg-green-50 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-slate-900">Request Received</h4>
                  <p className="text-slate-500 text-sm max-w-[250px] mx-auto leading-relaxed">
                    Our corporate relations team will analyze your requirements and contact you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
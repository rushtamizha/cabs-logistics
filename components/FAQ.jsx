"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What corporate transportation services do you offer?",
    answer:
      "We provide a comprehensive suite of mobility solutions, including premium executive car rentals, 24/7 employee transportation, specialized school transit, and industrial logistics management tailored for enterprise needs.",
  },
  {
    question: "Which regions do you currently operate in?",
    answer:
      "Our primary strategic hubs are located in Chennai, Coimbatore, Hosur, and Bangalore. However, we specialize in pan-India connectivity, providing seamless services to Tier-3 cities based on specific corporate requirements.",
  },
  {
    question: "What makes your fleet management different from competitors?",
    answer:
      "Unlike many aggregators, we maintain an extensive in-house fleet. This includes everything from high-end executive cars and coaches to luxury Volvo buses, allowing us to guarantee vehicle quality, safety, and 100% punctuality.",
  },
  {
    question: "How do you handle logistics for Tier-3 or remote locations?",
    answer:
      "Based on our headquarters in Bangalore, we have deep-rooted expertise in regional corridors. We leverage our in-house infrastructure to bridge the gap between major metros and remote industrial zones across India.",
  },
  {
    question: "Do you offer automated billing for corporate partners?",
    answer:
      "Yes. We provide flexible credit periods and automated, GST-compliant invoicing for our registered corporate partners to streamline accounting and ensure a transparent, professional experience.",
  },
];
const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Side: Header Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col items-center text-center mb-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-4"
              >
                <span className="h-[1px] w-8 bg-orange-600" />
                <span className="text-orange-600 font-bold uppercase tracking-[4px] text-[10px]">
                  FAQ
                </span>
                <span className="h-[1px] w-8 bg-orange-600" />
              </motion.div>
              <h2 className="text-3xl md:text-3xl font-black tracking-tight uppercase text-slate-900">
                Frequently <span className="text-orange-600">ASKED</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium text-lg leading-relaxed  text-center">
              Everything you need to know about our corporate logistics and
              cabs management services.
            </p>

            <div className="pt-2 hidden lg:flex">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 inline-block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                    <MessageCircle size={20} />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase text-sm tracking-tight">
                    Still have questions?
                  </h4>
                </div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">
                  Our team is ready to assist you 24/7.
                </p>
                <button className="w-full bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-orange-600 transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group border rounded-2xl transition-all duration-300 ${
                  activeIdx === index
                    ? "border-orange-200 bg-orange-50/30"
                    : "border-slate-100 bg-white"
                }`}
              >
                <button
                  onClick={() => setActiveIdx(activeIdx === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-[15px] font-black uppercase tracking-tight transition-colors ${
                      activeIdx === index
                        ? "text-orange-600"
                        : "text-slate-700 group-hover:text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 transition-transform duration-300 ${activeIdx === index ? "rotate-180" : "rotate-0"}`}
                  >
                    {activeIdx === index ? (
                      <div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white">
                        <Minus size={16} strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600">
                        <Plus size={16} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIdx === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-500 text-[15px] leading-relaxed font-medium">
                        <div className="pt-2 border-t border-orange-100/50">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from "react";
import Purpose from "@/components/Purpose";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "About Us | GGV Cabs & Logistics",
  description: "Learn about GGV Cabs & Logistics' mission to provide safe, scalable, and sustainable corporate transport solutions across India.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-400 font-bold uppercase tracking-[3px] text-[9px]">Our Story</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-8">
              Moving <br />
              <span className="text-orange-500">Corporate India</span> <br />
              Since 2020.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Redefining mobility through innovation and operational excellence. 
              From our roots in Tamil Nadu to a pan-India network, we deliver trust, safety, and excellence.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        </div>
      </section>

      {/* 2. Strategic Core (Updated with Vision & Mission) */}
      <Purpose />

      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </main>
  );
}
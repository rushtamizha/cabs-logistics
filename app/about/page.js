import React from "react";
import Purpose from "@/components/Purpose";
import Leadership from "@/components/Leadership";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

// Metadata for SEO - Essential for Enterprise sites
export const metadata = {
  title: "About Us | Cabs&logistics Logistics",
  description: "Learn about Cabs&logistics's mission to provide automated, end-to-end corporate transport solutions across India.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Hero Section (Introduction) */}
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
              Since 1998.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              From our roots in Tamil Nadu to a pan-India network, we combine 
              two decades of logistics expertise with next-gen automation to 
              orangeefine employee mobility.
            </p>
          </div>
        </div>

        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        </div>
      </section>

      {/* 2. Strategic Core (Vision & Mission) */}
      <Purpose />

      {/* 3. The Pillars (Why Choose Us) */}
      <WhyChooseUs />

      {/* 5. Client Testimonials */}
      <Testimonials />

      {/* 6. FAQ Section */}
      <FAQ />

      
    </main>
  );
}
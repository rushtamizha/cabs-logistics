"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Truck, Users } from "lucide-react";

// The same data structure used in your dynamic [slug] page
const blogPosts = [
  {
    slug: "safety-standards",
    title: "Safety Beyond the Seatbelt",
    excerpt: "Discover how GGV Cabs prioritizes passenger security through 24/7 GPS tracking and SOS response support.",
    category: "Safety & Compliance",
    icon: <Shield className="text-orange-600" />,
    readTime: "5 min read"
  },
  {
    slug: "corporate-mobility",
    title: "Optimizing Workforce Efficiency",
    excerpt: "Learn how our structured ETS solutions and route optimization help IT and manufacturing giants save time.",
    category: "Corporate Mobility",
    icon: <Users className="text-orange-600" />,
    readTime: "4 min read"
  },
  {
    slug: "logistics-solutions",
    title: "Redefining Last-Mile Logistics",
    excerpt: "Explore our technology-driven delivery solutions serving e-commerce and industrial sectors across India.",
    category: "Logistics",
    icon: <Truck className="text-orange-600" />,
    readTime: "6 min read"
  }
];

const BlogListing = () => {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-orange-600 font-black uppercase tracking-[4px] text-[11px] mb-4 block">
            GGV Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-none mb-6">
            Our <span className="text-orange-600">Expertise</span> in Motion
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            Stay updated with the latest trends in corporate mobility, safety innovations, and pan-India logistics solutions.
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-900/5 transition-all overflow-hidden flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="h-12 w-12 bg-orange-50 rounded-2xl flex items-center justify-center">
                    {post.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>

              <Link 
                href={`/blog/${post.slug}`}
                className="bg-slate-900 group-hover:bg-orange-600 p-6 flex items-center justify-between text-white transition-all"
              >
                <span className="font-black uppercase text-[10px] tracking-[2px]">Read Article</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogListing;
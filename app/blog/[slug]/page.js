import { ShieldCheck, Truck, Users, Clock, GpsFixed } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts = {
  "safety-standards": {
    title: "Safety Beyond the Seatbelt",
    subtitle: "Our Zero-Compromise Policy",
    category: "Safety & Compliance",
    content: "At GGV Cabs & Logistics, safety is at the core of every operation. We prioritize passenger and cargo security through advanced safety protocols.",
    icon: <Clock className="text-orange-600" />,
    features: ["24/7 GPS Live Tracking", "SOS Response Support", "Driver Background Checks"]
  },
  "corporate-mobility": {
    title: "Optimizing Workforce Efficiency",
    subtitle: "Smart ETS Solutions",
    category: "Corporate Mobility",
    content: "We provide structured and dependable staff transportation solutions for IT companies and manufacturing units.",
    icon: <Users className="text-orange-600" />,
    features: ["Route Optimization", "Women Employee Safety Protocols", "EV Fleet Options"]
  },
  "logistics-solutions": {
    title: "Redefining Last-Mile Logistics",
    subtitle: "Delivered with Excellence",
    category: "Logistics",
    content: "Our logistics division supports e-commerce and industrial operations with fast, reliable delivery services.",
    icon: <Truck className="text-orange-600" />,
    features: ["Scheduled Delivery", "Point-to-Point Movement", "Customized Logistics Plans"]
  }
};

// 1. Make the function async to handle params
export default async function BlogPost({ params }) {
  // 2. Await the params object
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mt-4 mb-8 text-slate-900">
          {post.title} <span className="text-orange-600">{post.subtitle}</span>
        </h1>

        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
          <p className="text-xl font-medium text-slate-900 mb-6">{post.content}</p>
          
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mt-10 mb-6">
            Key Service Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {post.features.map((feature, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="mb-4">{post.icon}</div>
                <p className="text-sm font-bold text-slate-900">{feature}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t pt-10">
            With 15+ years of domain expertise, GGV Cabs & Logistics continues to evolve with the changing demands of the industry.
          </p>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}
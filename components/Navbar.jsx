"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Car,
  Bus,
  Heart,
  Plane,
  Truck,
  Warehouse,
  Package,
  ShieldCheck,
  Users,
  Image as ImageIcon,
  BookOpen,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const WHATSAPP_NUMBER = "919943098822";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileOpen]);

  const handleContact = () => {
    const text =
      "Hello Cabs&logistics, I'd like to enquire about your transport services.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const services = [
    {
      name: "Premium Car Rental",
      desc: "Luxury sedans",
      icon: <Car size={20} />,
      link: "services",
    },
    {
      name: "Bus & Shuttle",
      desc: "Group travel",
      icon: <Bus size={20} />,
      link: "services",
    },
    {
      name: "Wedding & Events",
      desc: "Special cabs",
      icon: <Heart size={20} />,
      link: "services",
    },
    {
      name: "Airport & Outstation",
      desc: "Reliable travel",
      icon: <Plane size={20} />,
      link: "services",
    },
  ];

  const logistics = [
    {
      name: "Freight Forwarding",
      desc: "Global transport",
      icon: <Truck size={20} />,
      link: "logistics",
    },
    {
      name: "Warehousing",
      desc: "Secure storage",
      icon: <Warehouse size={20} />,
      link: "logistics",
    },
    {
      name: "Last-Mile Delivery",
      desc: "Local logistics",
      icon: <Package size={20} />,
      link: "logistics",
    },
    {
      name: "Corporate Supply",
      desc: "B2B solutions",
      icon: <ShieldCheck size={20} />,
      link: "logistics",
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "pt-2" : "pt-4 md:pt-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`relative z-[110] flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-2xl border ${
            scrolled || mobileOpen
              ? "bg-white shadow-md border-slate-200"
              : "bg-white/90 backdrop-blur-md border-white shadow-sm"
          }`}
        >
          {/* Logo - Updated to Cabs&logistics */}
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
            {/* Logo Image from Public Folder */}
            <div className="h-10 w-10 overflow-hidden rounded-xl   transition-all duration-300 group-hover:scale-110">
              <img
                src="/logo.jpg"
                alt="ggv cabs & logistics"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Brand Name */}
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase text-slate-900 leading-[0.8]">
                GG<span className="text-orange-600">V</span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[3px] text-slate-400 mt-1">
                Cabs & Logistics
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("services")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-bold transition-all ${activeMenu === "services" ? "text-orange-600" : "text-slate-600"}`}
              >
                Services{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "services" && <MegaMenu items={services} />}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("logistics")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-bold transition-all ${activeMenu === "logistics" ? "text-orange-600" : "text-slate-600"}`}
              >
                Logistics{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${activeMenu === "logistics" ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {activeMenu === "logistics" && <MegaMenu items={logistics} />}
              </AnimatePresence>
            </div>

          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex bg-slate-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold items-center gap-2 border border-slate-800 shadow-lg"
              >
                Reach Us <Phone size={16} />
              </motion.button>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 bg-slate-50 rounded-xl text-slate-900 border border-slate-200"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-md lg:hidden z-[90]"
              />
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="absolute top-full left-4 right-4 mt-3 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 lg:hidden z-[100] overflow-hidden"
              >
                <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
                  {/* Primary Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <MobileBento
                      href="/"
                      label="Home"
                      icon={<MapPin size={20} />}
                    />
                    <MobileBento
                      href="/about"
                      label="About"
                      icon={<Users size={20} />}
                    />
                  </div>

                  {/* Accordions */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                      Solutions
                    </p>
                    <MobileAccordion
                      label="Travel Services"
                      icon={<Car size={18} />}
                      items={services}
                      isOpen={expandedSection === "s"}
                      onClick={() =>
                        setExpandedSection(expandedSection === "s" ? null : "s")
                      }
                    />
                    <MobileAccordion
                      label="Logistics Hub"
                      icon={<Truck size={18} />}
                      items={logistics}
                      isOpen={expandedSection === "l"}
                      onClick={() =>
                        setExpandedSection(expandedSection === "l" ? null : "l")
                      }
                    />
                  </div>

                  {/* Secondary Grid */}
                  <div className="grid grid-cols-2 gap-3 hidden">
                    <MobileBento
                      href="/journey"
                      label="journey"
                      icon={<BookOpen size={20} />}
                    />
                    <MobileBento
                      href="/clients"
                      label="Clients"
                      icon={<ImageIcon size={20} />}
                    />
                  </div>

                  <Link href="/contact" className="w-full">
                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform group">
                      Get in Touch
                      <Phone
                        size={18}
                        className="group-hover:rotate-12 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// --- Sub-components ---

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors"
  >
    {children}
  </a>
);

const MegaMenu = ({ items }) => (
  <motion.div
    initial={{ opacity: 0, y: 15, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 15, scale: 0.95 }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 grid grid-cols-2 gap-4"
  >
    {items.map((item) => (
      <a
        key={item.name}
        href={`/${item.link}`}
        className="group p-4 rounded-2xl hover:bg-orange-50 transition-all border border-transparent hover:border-orange-100"
      >
        <div className="w-10 h-10 bg-slate-50 text-slate-500 rounded-xl flex items-center justify-center mb-3 group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">
          {item.icon}
        </div>
        <div className="font-bold text-slate-900 text-sm">{item.name}</div>
        <div className="text-[11px] text-slate-400 mt-1">{item.desc}</div>
      </a>
    ))}
  </motion.div>
);

const MobileBento = ({ href, label, icon }) => (
  <a
    href={href}
    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group active:bg-orange-50"
  >
    <div className="p-2 bg-white rounded-xl shadow-sm text-slate-400 group-active:text-orange-600">
      {icon}
    </div>
    <span className="text-xs font-black text-slate-900 uppercase tracking-tight">
      {label}
    </span>
  </a>
);

const MobileAccordion = ({ label, icon, isOpen, onClick, items }) => (
  <div
    className={`rounded-2xl border transition-all ${isOpen ? "bg-orange-50/50 border-orange-100" : "bg-white border-slate-100"}`}
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center p-4"
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-xl ${isOpen ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-400"}`}
        >
          {icon}
        </div>
        <span
          className={`font-bold text-sm ${isOpen ? "text-orange-900" : "text-slate-700"}`}
        >
          {label}
        </span>
      </div>
      <ChevronDown
        size={18}
        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-600" : "text-slate-300"}`}
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 space-y-2">
            {items.map((item) => (
              <a
                key={item.name}
                href={`/${item.link}`}
                className="flex items-center gap-4 p-3 rounded-xl bg-white border border-slate-50 shadow-sm"
              >
                <div className="text-orange-600 bg-orange-50 p-2 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[13px] font-bold text-slate-800">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-400">{item.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default Navbar;

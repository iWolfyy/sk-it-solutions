"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Removed ShieldCheck since it's no longer used

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Aceternity-style smart scroll detection
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      if (previous !== undefined) {
        let direction = current - previous;
        if (scrollYProgress.get() < 0.05) {
          setVisible(true);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
            setMobileMenuOpen(false);
          }
        }
      }
    }
  });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }, 
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Downloads", href: "/downloads"},
    { name: "Contact Us", href: "/contact-us"}
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4"
      >
        {/* Floating Glassmorphic Container */}
        <div className="w-full max-w-7xl bg-[#020817]/70 backdrop-blur-xl border border-slate-800/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-2xl px-6 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            {/* ─── MODIFIED: Icon replaced with <img> tag ─── */}
            <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl overflow-hidden shadow-lg shadow-blue-900/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <img 
                src="/logo.png" // <-- Replace with the path to your actual logo image
                alt="SK IT SOLUTIONS Logo" 
                className="w-full h-full object-contain p-0 scale-130" // Added padding to keep it looking clean inside the container
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-slate-100 tracking-tight">
                SK IT SOLUTIONS
              </span>
              <span className="text-[9px] text-blue-400 font-medium tracking-[0.2em] mt-0.5">
                NETWORK • SECURITY • CLOUD
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-slate-800/50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
          <a href="/contact-us">
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg shadow-blue-900/20 transition-all">
    Get a Free Consultation
  </Button>
</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-24 left-4 right-4 bg-[#020817]/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden"
            >
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.href}
                  className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px w-full bg-slate-800 my-2" />
              
              <a href="/contact-us">
              <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl">
                Get a Free Consultation
              </Button>
              </a>

            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
}
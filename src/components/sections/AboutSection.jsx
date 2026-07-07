import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white relative">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-wide uppercase mb-2 bg-blue-50 px-3 py-1 rounded-full">
          <ShieldCheck className="w-4 h-4" />
          About Our Company
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">About SK IT Solutions</h2>
        
        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
          <p>
            SK IT Solutions is a Sri Lankan IT service provider specializing in network infrastructure, cybersecurity, cloud solutions, and managed IT services.
          </p>
          <p>
            With 4+ years of experience, we help businesses operate securely and efficiently with the latest technologies and best practices.
          </p>
        </div>
        
        <Button className="bg-[#020817] hover:bg-blue-600 text-white mt-4 transition-colors shadow-lg">
          Read More About Us
        </Button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Clean, corporate geometric accents */}
        <div className="absolute -inset-4 bg-blue-50 rounded-[2rem] -z-10 transform rotate-3"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100/50 rounded-full -z-10"></div>

        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100 relative z-10">
          <img 
            src="https://plus.unsplash.com/premium_photo-1764692556161-9df60b922dd0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Server Rack" 
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
}
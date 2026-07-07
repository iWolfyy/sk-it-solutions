import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  BadgeCheck, 
  ThumbsUp, 
  CircleDollarSign, 
  Clock, 
  Headset,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Award,
  Server
} from "lucide-react";

export default function AboutUs() {
  // State for the Owner "Read More" expansion
  const [isOwnerExpanded, setIsOwnerExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-500/30 overflow-hidden">
      {/* 1. HERO PAGE HEADER */}
      <section className="relative pt-32 pb-20 px-6 bg-[#020817] overflow-hidden">
        
        {/* MAGIC UI: Flickering Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]">
          <FlickeringGrid
            className="absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#3b82f6"
            maxOpacity={0.15}
            flickerChance={0.3}
          />
        </div>

        {/* Dark gradient overlay to ensure text readability over the grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/40 via-transparent to-[#020817] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-400"
          >
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="text-slate-600">/</span>
            <span className="text-white">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100"
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1683134018612-560033455e43?q=80&w=870&auto=format&fit=crop" 
              alt="NOC Command Center" 
              className="w-full h-[350px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Who We Are</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                <strong className="text-slate-900 font-semibold">SK IT Solutions</strong> is a trusted IT solutions provider in Sri Lanka, delivering reliable, secure and cost-effective technology solutions for businesses of all sizes.
              </p>
              <p>
                Since our establishment, we have been committed to helping organizations leverage technology to improve productivity, security, and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES */}
      <section className="py-12 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Mission */}
            <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
              <div className="mb-4 text-blue-600">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide innovative and reliable IT solutions that empower businesses.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
              <div className="mb-4 text-blue-600">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be the most trusted IT solutions provider in Sri Lanka and beyond.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div variants={itemVariants} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
              <div className="mb-4 text-blue-600">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Values</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Integrity, Quality, Reliability and Customer Satisfaction are our core values.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Why Choose Us?</h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-slate-100 pt-12"
          >
            {/* Features mapping... */}
            <motion.div variants={itemVariants} className="text-center group border-r border-slate-100 last:border-0 lg:border-r-0 lg:relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-px lg:after:h-16 lg:after:bg-slate-200 lg:last:after:hidden">
              <div className="mx-auto flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <BadgeCheck className="w-8 h-8" />
              </div>
              <h4 className="text-slate-900 font-bold mb-2 text-sm">Certified Professionals</h4>
              <p className="text-slate-500 text-xs leading-relaxed px-2">Our team consists of highly certified and experienced professionals.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group border-r border-slate-100 last:border-0 md:border-r-0 lg:relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-px lg:after:h-16 lg:after:bg-slate-200 lg:last:after:hidden">
              <div className="mx-auto flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <ThumbsUp className="w-8 h-8" />
              </div>
              <h4 className="text-slate-900 font-bold mb-2 text-sm">Quality Service</h4>
              <p className="text-slate-500 text-xs leading-relaxed px-2">We maintain the highest standards to ensure flawless IT execution.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group border-r border-slate-100 last:border-0 lg:relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-px lg:after:h-16 lg:after:bg-slate-200 lg:last:after:hidden">
              <div className="mx-auto flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <CircleDollarSign className="w-8 h-8" />
              </div>
              <h4 className="text-slate-900 font-bold mb-2 text-sm">Affordable Pricing</h4>
              <p className="text-slate-500 text-xs leading-relaxed px-2">Enterprise-grade technology solutions scaled to fit your budget.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group border-r border-slate-100 last:border-0 md:border-r-0 lg:relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:w-px lg:after:h-16 lg:after:bg-slate-200 lg:last:after:hidden">
              <div className="mx-auto flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8" />
              </div>
              <h4 className="text-slate-900 font-bold mb-2 text-sm">On-time Delivery</h4>
              <p className="text-slate-500 text-xs leading-relaxed px-2">Strict adherence to project timelines to prevent downtime.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center group col-span-2 md:col-span-1 lg:col-span-1">
              <div className="mx-auto flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                <Headset className="w-8 h-8" />
              </div>
              <h4 className="text-slate-900 font-bold mb-2 text-sm">Customer Support</h4>
              <p className="text-slate-500 text-xs leading-relaxed px-2">Guarantee reliable access control, biometric systems, and our core values.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. MEET THE FOUNDER / OWNER SECTION */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start p-8 md:p-12">
              
              {/* Profile Image Column */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <img 
                    src="/sachith.jpg" 
                    alt="Sachith Kavishka - Founder" 
                    className="relative w-64 h-64 lg:w-full lg:h-auto max-w-[320px] aspect-square object-cover rounded-3xl border border-slate-200 shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">
                    Founder & Lead Engineer
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                    Sachith Kavishka
                  </h2>
                  <p className="text-lg text-slate-500 font-medium leading-relaxed">
                    A dedicated Network Administrator and Cybersecurity Specialist with extensive experience managing enterprise infrastructure, cloud migrations, and zero-trust security deployments.
                  </p>
                </div>

                {/* Expanding Content Section */}
                <AnimatePresence initial={false}>
                  {isOwnerExpanded && (
                    <motion.div 
                      key="expanded-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-8 py-6 border-t border-slate-100 mt-2">
                        
                        {/* Credentials & Education */}
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-slate-900 font-bold">
                            <GraduationCap className="w-5 h-5 text-blue-500" />
                            Academic Background
                          </h3>
                          <ul className="space-y-3 text-sm text-slate-600">
                            <li className="flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                              <span><strong>Master of Cybersecurity</strong> (In Reading) - Sri Lanka Institute of Information Technology [SLIIT].</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                              <span><strong>BSc Honors in Information Technology</strong> (Specialized in Computer Systems & Network Engineering).</span>
                            </li>
                          </ul>

                          <h3 className="flex items-center gap-2 text-slate-900 font-bold pt-4">
                            <Award className="w-5 h-5 text-blue-500" />
                            Certifications
                          </h3>
                          <ul className="space-y-2 text-sm text-slate-600">
                            <li>• Microsoft Azure Administrator (AZ104) </li>
                            <li>• CISCO Certified Networking Associate (CCNA/CCNAS) </li>
                            <li>• Fortinet Information Security Certified</li>
                          </ul>
                        </div>

                        {/* Core Competencies */}
                        <div className="space-y-4">
                          <h3 className="flex items-center gap-2 text-slate-900 font-bold">
                            <Server className="w-5 h-5 text-blue-500" />
                            Technical Expertise
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {["Server Admin (Win/Linux)", "Azure & AWS Cloud", "Fortinet Firewalls", "CISCO/Aruba Switches", "VMware/Hyper-V", "Endpoint Security"].map((skill, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700">
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          <p className="text-sm text-slate-600 pt-3 leading-relaxed border-l-2 border-blue-500 pl-4 mt-4 bg-slate-50 py-2 pr-2 rounded-r-lg">
                            Has actively led automated SIEM deployments, cloud transitions for endpoint security, and complex LAN/WAN restructuring projects for major corporate entities.
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Interactive Toggle Button */}
                <div className="mt-auto pt-6">
                  <Button 
                    onClick={() => setIsOwnerExpanded(!isOwnerExpanded)}
                    variant="outline"
                    className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    {isOwnerExpanded ? (
                      <>Read Less <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>Read Full Profile <ChevronDown className="w-4 h-4" /></>
                    )}
                  </Button>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
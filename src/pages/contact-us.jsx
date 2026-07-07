import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission execution
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+94 (78) 112 0031",
      subDetails: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "support.skitsolutions@gmail.com",
      subDetails: "Online support 24/7 available",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "70/1, Gampaha, Sri Lanka",
      subDetails: "Colombo 00100, Sri Lanka",
    },
    {
      icon: Clock,
      title: "Operation Hours",
      details: "Monday - Friday: 8:30 AM - 5:30 PM",
      subDetails: "Weekend: Closed",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* ─── 1. HERO PAGE HEADER (Dark Theme) ─── */}
      <section className="relative pt-40 pb-24 px-6 bg-[#020817] border-b border-slate-900 text-slate-300">
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

        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/40 via-transparent to-[#020817] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase"
          >
            Get In Touch
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Connect With Our <span className="text-blue-500">Experts</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 pt-2"
          >
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-300">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. MAIN HUB SECTION (Light Theme) ─── */}
      <section className="py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Contact Cards & Map View */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Let's start a conversation
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Have a question about our enterprise networking options, firewall deployment setups, or cloud structural designs? Drop a line and our infrastructure response unit will correspond shortly.
              </p>
            </div>

            {/* Structured Details Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 flex flex-col gap-3 hover:border-blue-100 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-0.5">{info.title}</h4>
                    <p className="text-slate-700 text-sm font-medium break-words">{info.details}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{info.subDetails}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* GOOGLE MAP ADDON HOUSING */}
            {/* GOOGLE MAP ADDON HOUSING */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/80 p-2 bg-slate-50 shadow-sm group">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.5362626351694!2d80.076809!3d6.945889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTYnNDUuMiJOIDgwwrAwNCczNi41IkU!5e0!3m2!1sen!2slk!4v1783338291930!5m2!1sen!2slk" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            </div>
          </div>

          {/* RIGHT COLUMN: Polished Contact Form Wrapper */}
          <div className="lg:col-span-7">
            <div className="border border-slate-200/80 bg-white shadow-xl shadow-slate-100 rounded-3xl p-6 md:p-10 relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-800">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-800">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-800">Subject</label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Infrastructure Modernization Inquiry"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-800">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us about your technical requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none placeholder:text-slate-400"
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-6 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-[0_8px_25px_rgba(37,99,235,0.25)]"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </motion.form>
                ) : (
                  /* Success Feedback Panel */
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-2xl font-extrabold text-slate-900">Message Dispatched</h3>
                      <p className="text-slate-500 text-sm max-w-sm">
                        Thank you for reaching out. Your documentation parameters have cleared transmission and landed safely within our operations queue.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
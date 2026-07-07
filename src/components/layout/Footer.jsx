import React from "react";
import { 
  MapPin, 
  Phone, 
  Mail
} from "lucide-react";
import { motion } from "framer-motion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-[#020817] relative text-slate-400 overflow-hidden border-t border-slate-800/60 pt-20 pb-8">
      {/* Top Border Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
      
      {/* MAGIC UI: Flickering Grid Background with a bottom-heavy radial mask */}
      <div className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_bottom,white_70%,transparent_100%)] opacity-30">
        <FlickeringGrid
          className="absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#3b82f6" // Corporate blue to match white/blue theme
          maxOpacity={0.2}
          flickerChance={0.2}
        />
      </div>

      {/* Background Depth Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020817] to-[#020817] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group">
              {/* ─── MODIFIED: Icon replaced with matching scaled image logo ─── */}
              <div className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl overflow-hidden shadow-lg shadow-blue-900/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="SK IT HISOLUTIONS Logo" 
                  className="w-full h-full object-contain p-0 scale-130 transition-transform duration-300 group-hover:scale-140" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none">SK IT SOLUTIONS</span>
                <span className="text-[8px] text-blue-400 font-medium tracking-[0.2em] mt-1">
                  NETWORK • SECURITY • CLOUD
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Securing your digital perimeter and optimizing IT infrastructure with enterprise-grade solutions and 24/7 proactive monitoring.
            </p>
            
            {/* Hardcoded Custom SVGs */}
            <div className="flex gap-4 pt-2">
              {/* LinkedIn */}
              <a href="#" className="bg-slate-900 border border-slate-800 p-2.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="bg-slate-900 border border-slate-800 p-2.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="bg-slate-900 border border-slate-800 p-2.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Our Team', 'Careers', 'Partner Program', 'Tech Blog'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Capabilities</h3>
            <ul className="space-y-4 text-sm">
              {['Network Infrastructure', 'Cybersecurity & Firewalls', 'Cloud Architecture', 'Server Management', '24/7 IT Support'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">Connect</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>70/1, Gampaha,<br/>Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+94 78 112 0031</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>support.skitsolutions@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono"
        >
          <div className="flex items-center gap-2 text-slate-500">
            <span>&copy; {currentYear} SK IT Solutions. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6 text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            
            <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-3 py-1.5 rounded-full ml-2 relative z-20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 uppercase tracking-widest text-[10px]">All Systems Operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { 
  Download, 
  MonitorSmartphone, 
  MonitorUp, 
  Shield, 
  Users, 
  Globe, // ─── SWAPPED OUT CHROME FOR GLOBE TO FIX VITE EXPORT ERROR ───
  FileBox, 
  Network, 
  LockKeyhole,
  MonitorDot
} from "lucide-react";

// Sidebar Categories mapped to icons
const categories = [
  { id: "All Downloads", icon: FileBox },
  { id: "Remote Support", icon: MonitorSmartphone },
  { id: "VPN Clients", icon: Shield },
  { id: "Security Tools", icon: LockKeyhole },
  { id: "Microsoft Tools", icon: Users },
  { id: "Browsers", icon: Globe },
  { id: "Utilities", icon: MonitorDot },
  { id: "Network Tools", icon: Network },
];

// Mocked Software Data based on the image
const softwareData = [
  {
    id: 1,
    name: "AnyDesk",
    category: "Remote Support",
    description: "Remote desktop software for fast and secure connections.",
    icon: MonitorSmartphone,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
  },
  {
    id: 2,
    name: "TeamViewer",
    category: "Remote Support",
    description: "Remote connectivity and support software.",
    icon: MonitorUp,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    id: 3,
    name: "FortiClient VPN",
    category: "VPN Clients",
    description: "Secure VPN client for Fortinet Firewalls.",
    icon: Shield,
    iconColor: "text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    id: 4,
    name: "Microsoft Teams",
    category: "Microsoft Tools",
    description: "Chat, meet, call and collaborate in one place.",
    icon: Users,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
  {
    id: 5,
    name: "Google Chrome",
    category: "Browsers",
    description: "Fast, secure and reliable web browser.",
    icon: Globe,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
  },
  {
    id: 6,
    name: "WireGuard",
    category: "VPN Clients",
    description: "Fast, modern, secure VPN tunnel.",
    icon: Network,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
  {
    id: 7,
    name: "Malwarebytes",
    category: "Security Tools",
    description: "Advanced endpoint protection and remediation.",
    icon: LockKeyhole,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  }
];

export default function Downloads() {
  const [activeCategory, setActiveCategory] = useState("All Downloads");

  // Filter software based on selected category
  const filteredSoftware = softwareData.filter(
    (app) => activeCategory === "All Downloads" || app.category === activeCategory
  );

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* ─── PAGE HEADER (Dark Theme to match the rest of the site) ─── */}
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

        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/40 via-transparent to-[#020817] pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Software Downloads
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-400"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white">Downloads</span>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT AREA (Based on image_7a71e5.png) ─── */}
      <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDEBAR: Categories */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-4 px-2">Categories</h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                    }`}
                  >
                    <category.icon className={`w-4 h-4 ${activeCategory === category.id ? "text-blue-100" : "text-slate-400"}`} />
                    {category.id}
                  </button>
                ))}
              </nav>
            </div>
          </div>

{/* RIGHT CONTENT: Download List */}
<div className="lg:col-span-9 min-h-[500px]">
  {/* We use a key bound to activeCategory on the container to smoothly reset the stagger group layout instantly on tap */}
  <motion.div 
    key={activeCategory}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.04 } // Crisp, high-speed cascading reveal
      }
    }}
    className="flex flex-col gap-3.5"
  >
    {filteredSoftware.length > 0 ? (
      filteredSoftware.map((app) => (
        <motion.div
          key={app.id}
          variants={{
            hidden: { opacity: 0, y: 12, filter: "blur(4px)" }, // Hardware accelerated smooth fade in
            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.35, ease: "easeOut" } }
          }}
          className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-500/30 transition-all duration-300 group"
        >
          {/* Left: Icon & Info */}
          <div className="flex items-center gap-4 md:gap-5">
            <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${app.iconBg} ${app.iconColor} group-hover:scale-105 transition-transform duration-300`}>
              <app.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-none mb-1.5 transition-colors group-hover:text-blue-600">
                {app.name}
              </h3>
              <p className="text-slate-500 text-sm font-light">
                {app.description}
              </p>
            </div>
          </div>

          {/* Right: Download Button */}
          <div className="shrink-0 sm:ml-auto">
            <Button 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-[0_4px_20px_rgba(37,99,235,0.25)]"
            >
              Download <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      ))
    ) : (
      // Clean, simple empty state transition fallback
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center bg-white border border-slate-200 border-dashed rounded-2xl"
      >
        <FileBox className="w-12 h-12 text-slate-300 mb-4" />
        <h3 className="text-lg font-bold text-slate-900 mb-1">No downloads available</h3>
        <p className="text-slate-500 text-sm">There are currently no files uploaded to this category.</p>
      </motion.div>
    )}
  </motion.div>
</div>

        </div>
      </section>
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FlickeringGrid } from "@/components/ui/flickering-grid"; // ─── NEW IMPORT ───
import { 
  Network, 
  Shield, 
  Cloud, 
  Server, 
  LockKeyhole, 
  Cctv, 
  Headset, 
  CloudFog, 
  Wifi 
} from "lucide-react";

const servicesData = [
  {
    icon: Network,
    title: "Network Solutions",
    description: "LAN/WAN design, structured cabling, network installation, troubleshooting and support."
  },
  {
    icon: Shield,
    title: "Firewall & Security",
    description: "Fortinet, Cisco, MikroTik firewall configuration, VPN, security policies & monitoring."
  },
  {
    icon: Cloud,
    title: "Microsoft 365",
    description: "Microsoft 365 setup, migration, Exchange Online, Teams, SharePoint & OneDrive."
  },
  {
    icon: Server,
    title: "Server Solutions",
    description: "Windows Server installation, Active Directory, DNS, DHCP, File Server & backup."
  },
  {
    icon: LockKeyhole,
    title: "Cybersecurity",
    description: "Vulnerability assessment, penetration testing, security audits, endpoint protection and monitoring."
  },
  {
    icon: Cctv,
    title: "CCTV & Security",
    description: "IP camera installation, access control, biometric systems, security monitoring."
  },
  {
    icon: Headset,
    title: "IT Support",
    description: "Remote & on-site support, helpdesk, maintenance and technical assistance."
  },
  {
    icon: CloudFog,
    title: "Cloud Solutions",
    description: "Cloud backup, disaster recovery, virtualization and cloud infrastructure."
  },
  {
    icon: Wifi,
    title: "Wi-Fi Solutions",
    description: "Wireless network setup, optimization, coverage and support."
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      {/* 1. PAGE HEADER (Dark Theme) */}
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
            Our Services
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-400"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white">Services</span>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES GRID (Light Theme) */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesData.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center"
              >
                {/* Icon Container */}
                <div className="mb-6 bg-blue-50 group-hover:bg-blue-600 p-4 rounded-2xl transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CTA BANNER */}
      <section className="pb-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#020817] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Subtle glow inside the banner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

            <div className="relative z-10 text-center md:text-left space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Need a Custom IT Solution?
              </h3>
              <p className="text-slate-400 text-sm md:text-base">
                We are ready to help your business with the best IT solutions.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-6 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
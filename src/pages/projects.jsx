import React from "react";
import { motion } from "framer-motion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Cloud, Network, ArrowRight, Server, LockKeyhole } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Zero-Trust Enterprise Perimeter",
    category: "Cybersecurity",
    client: "Global Finance Corp",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
    description: "Re-engineered perimeter security with a complete zero-trust architecture. We eliminated legacy VPN vulnerabilities, secured 10,000+ endpoints, and integrated AI-driven threat detection.",
    tech: ["Fortinet", "Cisco ISE", "CrowdStrike"],
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Hybrid Cloud Infrastructure",
    category: "Cloud Solutions",
    client: "TechFlow Systems",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
    description: "Orchestrated a seamless migration of 150+ on-premise servers to a hybrid AWS/Azure environment. Achieved zero operational downtime and reduced infrastructure costs by 40%.",
    tech: ["AWS", "Azure", "Terraform"],
    icon: Cloud,
  },
  {
    id: 3,
    title: "100G Fiber Datacenter Upgrade",
    category: "Networking",
    client: "National Logistics Hub",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
    description: "Completely overhauled the core switching infrastructure to 100Gbps fiber across 5 interconnected warehouses, resolving massive data bottlenecks and preparing for IoT expansion.",
    tech: ["Cisco Nexus", "Fiber Optic", "BGP"],
    icon: Network,
  },
  {
    id: 4,
    title: "Fault-Tolerant Server Cluster",
    category: "Infrastructure",
    client: "MediCare Hospital Network",
    image: "https://images.unsplash.com/photo-1597839219216-a773cb2473e4?q=80&w=1600&auto=format&fit=crop",
    description: "Deployed a highly available hyperconverged infrastructure (HCI) ensuring 24/7 uptime for critical patient records and seamless disaster recovery failover.",
    tech: ["VMware", "Windows Server", "SAN"],
    icon: Server,
  }
];

export default function Projects() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* ─── HERO SECTION (Kept Dark for Header Consistency) ─── */}
      <section className="relative pt-40 pb-24 px-6 bg-[#020817] border-b border-slate-900 text-slate-300">
        <div className="absolute inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,white,transparent_70%)]">
          <FlickeringGrid
            className="absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#3b82f6"
            maxOpacity={0.15}
            flickerChance={0.3}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide"
          >
            <LockKeyhole className="w-4 h-4" />
            Elite IT Deployments
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
          >
            Featured <span className="text-blue-500">Case Studies</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            A curated showcase of our most complex, secure, and high-performance infrastructure builds.
          </motion.p>
        </div>
      </section>

      {/* ─── EDITORIAL PROJECT SHOWCASE (Light Theme) ─── */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto space-y-40">
        {projectsData.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center relative group`}
            >
              
              {/* IMAGE BLOCK */}
              <div className="w-full lg:w-2/3 relative rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-100 shadow-xl">
                {/* Subtle blue overlay that fades out on hover */}
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[400px] lg:h-[650px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>

              {/* FLOATING GLASSMORPHIC CONTENT CARD (White Theme) */}
              <div 
                className={`w-full lg:w-5/12 relative z-20 -mt-20 lg:mt-0 ${
                  isEven ? 'lg:-ml-32' : 'lg:-mr-32'
                }`}
              >
                <div className="bg-white/90 backdrop-blur-2xl border border-slate-200 p-8 lg:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:border-blue-200 transition-colors duration-700">
                  
                  {/* Category & Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                      <project.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Client */}
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-2">
                    {project.title}
                  </h2>
                  <div className="text-sm font-mono text-slate-500 mb-6">
                    Client: <span className="text-slate-800 font-semibold">{project.client}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className="w-full sm:w-auto bg-slate-900 text-white hover:bg-blue-600 hover:text-white rounded-full px-8 py-6 text-sm font-bold transition-all group-hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)]">
                    Explore Architecture <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                </div>
              </div>

            </motion.div>
          );
        })}
      </section>

    </div>
  );
}
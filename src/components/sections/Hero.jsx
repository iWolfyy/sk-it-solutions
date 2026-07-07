import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { World } from "@/components/ui/globe.jsx";
import { globeConfig, sampleArcs } from "@/data/globeData";
import { motion } from "framer-motion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Hero() {
  // Pre-formatted international number and URL-encoded message payload
  const whatsappNumber = "94771120031"; 
  const initialMessage = encodeURIComponent(
    "Hello SK IT HiSolutions! I am interested in getting a free IT infrastructure or cybersecurity consultation for my business."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${initialMessage}`;

  return (
    <section className="relative pt-32 pb-20 px-6 bg-[#020817] text-white overflow-hidden min-h-screen flex items-center">
      
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

      {/* Dark gradient overlay to ensure text remains 100% readable over the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/40 via-transparent to-[#020817] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium">
            <ShieldCheck className="w-4 h-4" />
            <span>Advanced IT Infrastructure</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1]">
            Protecting Your Business with Reliable <span className="text-blue-500">IT & Cybersecurity</span> Solutions
          </h1>
          
          <p className="text-slate-400 text-lg max-w-lg">
            We provide professional IT services to help your business run securely, efficiently, and seamlessly.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
          <a href="/contact-us">
  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg shadow-blue-900/20 transition-all">
    Get a Free Consultation
  </Button>
</a>
            
            {/* FUNCTIONAL WHATSAPP BUTTON */}
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white px-8 transition-all"
              asChild
            >
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-green-500" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex items-center justify-center h-[500px] w-full md:h-[600px] overflow-hidden"
        >
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <World globeConfig={globeConfig} data={sampleArcs} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
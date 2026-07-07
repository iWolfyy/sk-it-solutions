import React from "react";
import { Users, Zap, BadgeDollarSign, Headset } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureBanner() {
  const features = [
    { icon: Users, text: "Experienced Team" },
    { icon: Zap, text: "Fast Response" },
    { icon: BadgeDollarSign, text: "Affordable Pricing" },
    { icon: Headset, text: "24/7 Support" },
  ];

  return (
    <section className="bg-slate-950 border-t border-slate-900 border-b py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300 text-sm font-medium">
        {features.map((Feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex items-center gap-3 justify-center group"
          >
            <Feature.icon className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300" /> 
            <span className="group-hover:text-white transition-colors">{Feature.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
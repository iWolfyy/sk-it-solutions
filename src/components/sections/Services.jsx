import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ChevronRight, Network, Lock, Cloud, Server, Cctv, Headset } from "lucide-react";
import { motion } from "framer-motion";

const servicesData = [
  { icon: Network, title: "Network Solutions", desc: "LAN/WAN Security" },
  { icon: Lock, title: "Firewall & Security", desc: "Configure Firewalls" },
  { icon: Cloud, title: "Microsoft 365", desc: "Exchange Security" },
  { icon: Server, title: "Server Solutions", desc: "Performance Security" },
  { icon: Cctv, title: "CCTV & Security", desc: "Perimeter Security" },
  { icon: Headset, title: "IT Support", desc: "Everyday Solutions" },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="h-full"
            >
              <Card className="bg-white border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group cursor-pointer text-center py-6 rounded-2xl h-full flex flex-col">
                <CardHeader className="p-0 pb-4">
                  <div className="mx-auto bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 p-4 rounded-full w-fit">
                    <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow flex flex-col">
                  <h3 className="font-semibold text-slate-900 mb-1">{service.title}</h3>
                  <p className="text-xs text-slate-500 mb-4 flex-grow">{service.desc}</p>
                  <span className="text-xs text-blue-600 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all mt-auto">
                    Learn More <ChevronRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
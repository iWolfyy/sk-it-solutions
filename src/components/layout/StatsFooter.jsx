import React from "react";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function StatsFooter() {
  return (
    <section className="bg-[#020817] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800">
        
        {/* Years of Experience */}
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white flex items-center justify-center">
            <NumberTicker value={4} className="text-white" />
            <span>+</span>
          </div>
          <div className="text-xs text-blue-400 font-medium tracking-wide uppercase">Years of Experience</div>
        </div>
        
        {/* Projects Completed */}
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white flex items-center justify-center">
            <NumberTicker value={150} className="text-white" />
            <span>+</span>
          </div>
          <div className="text-xs text-blue-400 font-medium tracking-wide uppercase">Projects Completed</div>
        </div>
        
        {/* Happy Clients */}
        <div className="space-y-2">
          <div className="text-3xl font-bold text-white flex items-center justify-center">
            <NumberTicker value={100} className="text-white" />
            <span>+</span>
          </div>
          <div className="text-xs text-blue-400 font-medium tracking-wide uppercase">Happy Clients</div>
        </div>
        
        {/* Support Available (Completely Static) */}
        <div className="space-y-2 border-r border-slate-800 md:border-none">
          <div className="text-3xl font-bold text-white flex items-center justify-center h-[36px]">
            <span>24/7</span>
          </div>
          <div className="text-xs text-blue-400 font-medium tracking-wide uppercase">Support Available</div>
        </div>

      </div>
    </section>
  );
}
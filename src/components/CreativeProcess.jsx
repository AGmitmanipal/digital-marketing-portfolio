import React from 'react';
import { 
  Compass, 
  Lightbulb, 
  Palette, 
  Send, 
  BarChart3, 
  ArrowRight, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { creativeProcessSteps } from '../data/portfolioData';

export default function CreativeProcess() {
  const iconMap = {
    Compass: Compass,
    Lightbulb: Lightbulb,
    Palette: Palette,
    Send: Send,
    BarChart3: BarChart3
  };

  return (
    <section id="process" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-[#D36135] block mb-2">
            Methodology • Strategy Into Action
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0F3324] tracking-tight">
            My Creative Process
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A6578] font-sans-clean leading-relaxed">
            From initial research and audience empathy to polished visuals and feedback analysis — a structured 5-step framework that turns raw ideas into compelling digital experiences.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {creativeProcessSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] || Sparkles;
            return (
              <div
                key={step.step}
                className="relative bg-[#FCFAF7] rounded-3xl p-6 border border-[#EDE5D4] hover:border-[#D36135] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-2xl bg-[#0F3324] text-[#FAF7F2] flex items-center justify-center font-display font-bold text-sm shadow-sm group-hover:bg-[#164331] group-hover:scale-105 transition-all">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#EDE5D4]/70 flex items-center justify-center text-[#D36135]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Label */}
                  <h3 className="font-display font-bold text-xl text-[#0F3324] mb-1 group-hover:text-[#D36135] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2B6E8D] block mb-3">
                    {step.label}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    {step.description}
                  </p>

                </div>

                {/* Deliverable Badge */}
                <div className="mt-6 pt-4 border-t border-[#EDE5D4]">
                  <span className="text-[10px] font-mono-code font-semibold uppercase tracking-wider text-[#6B7280] block mb-1">
                    Key Output
                  </span>
                  <span className="text-xs font-semibold text-[#0F3324] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    {step.deliverable}
                  </span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

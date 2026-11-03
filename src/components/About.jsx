import React from 'react';
import { Sparkles, Calendar, Layers, BookOpen, Compass, Heart, Award, ArrowUpRight } from 'lucide-react';
import { aboutContent } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      
      {/* Decorative hairline */}
      <div className="max-w-7xl mx-auto border-t border-[#EDE5D4] mb-20" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase font-bold tracking-widest text-[#D36135] block mb-2">
              About Me • Story & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#0F3324] leading-tight">
              {aboutContent.heading}
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#3A4350] font-sans-clean leading-relaxed">
            {aboutContent.paragraphs.map((p, idx) => (
              <p key={idx} className={idx === 0 ? "text-lg sm:text-xl font-medium text-[#0F3324]" : ""}>
                {p}
              </p>
            ))}

            {/* Core Values / Strengths pills */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4] text-center">
                <span className="block text-base sm:text-lg font-display font-bold text-[#0F3324]">Canva</span>
                <span className="text-[11px] uppercase tracking-wider text-[#D36135] font-semibold">Visual Design</span>
              </div>
              <div className="p-3 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4] text-center">
                <span className="block text-base sm:text-lg font-display font-bold text-[#0F3324] truncate" title="Filmora & Clipchamp">Filmora & Clipchamp</span>
                <span className="text-[11px] uppercase tracking-wider text-[#2B6E8D] font-semibold">Video Editing</span>
              </div>
              <div className="p-3 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4] text-center">
                <span className="block text-base sm:text-lg font-display font-bold text-[#0F3324]">Goonj MAHE</span>
                <span className="text-[11px] uppercase tracking-wider text-[#0F3324] font-semibold">Content Creator</span>
              </div>
              <div className="p-3 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4] text-center">
                <span className="block text-base sm:text-lg font-display font-bold text-[#0F3324]">MIT Manipal</span>
                <span className="text-[11px] uppercase tracking-wider text-[#D36135] font-semibold">ECE Undergrad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Photo Collage & Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 items-center">
          
          <div className="md:col-span-5 relative group">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#EDE5D4] bg-[#EDE5D4]">
              <img
                src="/images/goa-fontainhas.jpg"
                alt="Fontainhas Latin Quarter Portuguese Colonial Heritage Architecture in Panjim Goa"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-3 sm:-right-5 bg-[#FCFAF7] p-3 rounded-xl shadow-lg border border-[#EDE5D4] flex items-center gap-3 max-w-[260px]">
              <img
                src="/images/anil-ghode.jpg"
                alt="Anil alias Anay Amrish Ghode"
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-[#D36135] shrink-0"
              />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D36135] block">Goa Roots</span>
                <span className="text-xs font-semibold text-[#0F3324] block">Fontainhas, Panjim</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-[#FCFAF7] p-8 sm:p-12 rounded-3xl border border-[#EDE5D4] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2B6E8D]">
                <Compass className="w-4 h-4 text-[#D36135]" />
                Creative Strategy & Vision
              </span>
              <blockquote className="text-2xl sm:text-3xl font-editorial italic font-normal text-[#0F3324] leading-snug">
                “Engineering taught me how systems work and how to think rigorously; content creation taught me how people feel and what makes them stop scrolling.”
              </blockquote>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EDE5D4] text-xs text-[#5A6578]">
              <div>
                <strong className="block text-sm text-[#0F3324] font-semibold mb-1">Authentic Storytelling</strong>
                Focusing on real emotional connection, cultural richness, and engaging pacing rather than vanity hype.
              </div>
              <div>
                <strong className="block text-sm text-[#0F3324] font-semibold mb-1">Destination Marketing Focus</strong>
                Eager to help hospitality brands, eco-resorts, and tourism boards bring their authentic stories to digital life.
              </div>
            </div>
          </div>

        </div>

        {/* Creative Journey Timeline */}
        <div className="bg-[#FCFAF7] p-6 sm:p-12 rounded-3xl border border-[#EDE5D4] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#D36135] block mb-1">
                Evolution & Milestones
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0F3324]">
                The Creative Journey
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5A6578] mt-2 md:mt-0 max-w-md">
              A timeline reflecting the transition from curiosity-driven content experiments to purposeful digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative">
            {aboutContent.timeline.map((item, idx) => (
              <div key={idx} className="relative p-5 rounded-2xl bg-[#FAF7F2] border border-[#EDE5D4] flex flex-col justify-between group hover:border-[#D36135] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-2.5 py-1 bg-[#0F3324] text-[#FAF7F2] rounded-md">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono-code text-[#D36135] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-base text-[#0F3324] mb-2 group-hover:text-[#D36135] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#5A6578] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

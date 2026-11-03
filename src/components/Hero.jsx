import React from 'react';
import { ArrowDownRight, Compass, Sparkles, MapPin, Send, ExternalLink, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenLightbox }) {
  return (
    <section 
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-parchment"
    >
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#E07A5F]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-[#2B6E8D]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        
        {/* Top Editorial Eyebrow & Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EDE5D4] text-[#0F3324] border border-[#DFD3BD]">
            <MapPin className="w-3.5 h-3.5 text-[#D36135]" />
            Goa, India
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FCFAF7] text-[#4A5568] border border-[#EDE5D4]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            Available for Marketing & Content Roles
          </span>
          <span className="hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-[#2B6E8D] bg-[#E8F1F5] border border-[#D0E2EB]">
            ECE @ MIT Manipal • Content Creator @ Goonj MAHE
          </span>
        </div>

        {/* Main Grid: Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Big Editorial Typography & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* The 3 Core Badges requested in prompt */}
            <div className="flex flex-wrap gap-2">
              {personalInfo.roles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#0F3324] text-[#FAF7F2] rounded-lg shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-bold text-[#0F3324] tracking-tight leading-[1.08]">
              Turning Ideas <br className="hidden sm:inline" />
              Into <span className="font-editorial italic font-normal text-[#D36135]">Digital</span> Experiences.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#3A4350] font-sans-clean leading-relaxed max-w-2xl">
              Hey, I'm <strong className="text-[#0F3324] font-semibold">Anil alias Anay Amrish Ghode</strong> — a content creator and aspiring digital marketer passionate about storytelling, creativity, technology and building engaging digital experiences.
            </p>

            {/* Two Primary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#goa-campaign"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#0F3324] hover:bg-[#164331] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4 text-[#E07A5F] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#0F3324] bg-[#EDE5D4] hover:bg-[#DFD3BD] border border-[#DFD3BD] transition-all duration-300"
              >
                <Send className="w-4 h-4 text-[#D36135]" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Small Trust & Platforms Indicator */}
            <div className="pt-4 border-t border-[#EDE5D4] flex flex-wrap items-center gap-6 text-xs text-[#5A6578]">
              <div>
                <span className="font-semibold text-[#0F3324]">Channels Created:</span> Instagram • YouTube • LinkedIn
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#DFD3BD]" />
              <div>
                <span className="font-semibold text-[#0F3324]">Specialty:</span> Travel, Tourism & Visual Storytelling
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature (Goa Photography + Floating Badges) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FCFAF7] bg-[#EDE5D4] group">
                <img
                  src="/images/anil-ghode.jpg"
                  alt="Anil alias Anay Amrish Ghode - Content Creator & Aspiring Digital Marketer"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082116]/85 via-black/10 to-transparent" />

                {/* Overlay Text Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E07A5F] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Creator & Marketer</span>
                  </div>
                  <p className="font-display text-xl sm:text-2xl font-bold leading-snug">
                    Anil alias Anay Amrish Ghode
                  </p>
                  <p className="text-xs text-[#FAF7F2]/80 mt-1 font-sans-clean">
                    Goa, India • Turning Ideas Into Engaging Digital Experiences
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Canva Tourism Creative Sneak Peek */}
              <div 
                onClick={() => onOpenLightbox({
                  image: "/images/goa-creative-1.jpg",
                  title: "Discover the Hidden Beauty of Goa",
                  caption: "Original Canva destination poster created by Anil alias Anay Amrish Ghode"
                })}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FCFAF7] p-3 sm:p-4 rounded-2xl shadow-xl border border-[#EDE5D4] flex items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300 max-w-[240px]"
                title="Click to preview original Canva artwork"
              >
                <img
                  src="/images/goa-creative-1.jpg"
                  alt="Goa Tourism Poster Preview"
                  className="w-12 h-16 object-cover rounded-lg shadow-sm border border-[#DFD3BD]"
                />
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D36135] block">
                    Featured Work
                  </span>
                  <span className="text-xs font-semibold text-[#0F3324] line-clamp-1 block">
                    Goa Tourism Campaign
                  </span>
                  <span className="text-[11px] text-[#5A6578] flex items-center gap-1 mt-0.5">
                    Original Canva Art <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Engineering + Creativity pill */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-[#0F3324] text-[#FAF7F2] px-4 py-2.5 rounded-2xl shadow-lg border border-[#1F5740] flex items-center gap-2 text-xs font-semibold">
                <Sparkles className="w-4 h-4 text-[#E07A5F]" />
                <span>Tech Meets Storytelling</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Prompt */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between text-xs text-[#6B7280]">
        <span className="font-editorial italic text-sm text-[#0F3324]">
          "Creativity without strategy is art; creativity with strategy is marketing."
        </span>
        <a 
          href="#about"
          className="inline-flex items-center gap-1 text-[#0F3324] hover:text-[#D36135] transition-colors font-semibold uppercase tracking-wider text-[11px]"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>

    </section>
  );
}

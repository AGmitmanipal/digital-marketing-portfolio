import React, { useState } from 'react';
import { ZoomIn, Sparkles, Palette, Type, Compass, Download, ExternalLink, CheckCircle, Eye } from 'lucide-react';
import { featuredGoaCampaign } from '../data/portfolioData';

export default function GoaCampaign({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="goa-campaign" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0F3324] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E07A5F]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2B6E8D]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E07A5F] text-[#0F3324]">
              Featured Showcase Project
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#164331] text-[#FAF7F2] border border-[#2A7C55]">
              Designed in Canva
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-[#EDE5D4]/10 text-[#DFD3BD] border border-[#EDE5D4]/20">
              Self-Initiated Concept Project
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FCFAF7] tracking-tight leading-[1.1]">
            {featuredGoaCampaign.title}
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#EDE5D4] leading-relaxed font-sans-clean">
            {featuredGoaCampaign.overview}
          </p>

          <div className="mt-4 p-3.5 rounded-xl bg-[#164331]/80 border border-[#2A7C55]/50 flex items-center gap-3 text-xs text-[#DFD3BD]">
            <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>
              <strong>Authenticity Note:</strong> Both designs featured below are original creative works independently designed by Anil alias Anay Amrish Ghode using Canva to demonstrate destination marketing capabilities.
            </span>
          </div>
        </div>

        {/* The Two Prominent Creatives Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          
          {featuredGoaCampaign.creatives.map((creative, index) => (
            <div 
              key={creative.id}
              className="bg-[#164331]/90 rounded-3xl p-6 sm:p-8 border border-[#2A7C55]/40 shadow-2xl flex flex-col justify-between group hover:border-[#E07A5F]/60 transition-all duration-300"
            >
              
              {/* Creative Meta Header */}
              <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-[#2A7C55]/30">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] block">
                    Creative {index + 1} • {creative.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FCFAF7] mt-0.5">
                    {creative.title}
                  </h3>
                </div>
                <button
                  onClick={() => onOpenLightbox({
                    image: creative.image,
                    title: creative.headline,
                    caption: creative.description
                  })}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F3324] bg-[#EDE5D4] hover:bg-white transition-all shadow-md shrink-0"
                  title="Enlarge image in high-definition lightbox"
                >
                  <Eye className="w-3.5 h-3.5 text-[#D36135]" />
                  <span>Enlarge</span>
                </button>
              </div>

              {/* The Prominent Image Display - Preserving Original Aspect Ratio */}
              <div 
                onClick={() => onOpenLightbox({
                  image: creative.image,
                  title: creative.headline,
                  caption: creative.description
                })}
                className="relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border-2 border-[#FAF7F2]/20 bg-[#082116] flex items-center justify-center group/img"
              >
                {/* The Original Canva Design */}
                <img
                  src={creative.image}
                  alt={creative.headline}
                  className="w-full h-auto max-h-[640px] object-contain group-hover/img:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#082116]/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-4 py-2 bg-[#FCFAF7] text-[#0F3324] rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#D36135]" />
                    <span>Click to Enlarge Artwork</span>
                  </div>
                </div>

                {/* Format Badge */}
                <span className="absolute bottom-3 right-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-[#082116]/80 text-[#DFD3BD] rounded-md backdrop-blur-sm border border-white/10">
                  Canva Design
                </span>
              </div>

              {/* Creative Direction & Design Breakdown */}
              <div className="mt-6 space-y-5">
                
                {/* Rationale description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] mb-1.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" /> Creative Direction & Rationale
                  </h4>
                  <p className="text-sm text-[#DFD3BD] leading-relaxed">
                    {creative.description}
                  </p>
                </div>

                {/* Color Palette Chips */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] mb-2 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5" /> Intentional Color Palette
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {creative.palette.map((color, cIdx) => (
                      <div 
                        key={cIdx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0F3324] border border-[#2A7C55]/60 text-[11px] text-[#FAF7F2]"
                      >
                        <span 
                          className="w-3 h-3 rounded-full border border-white/20 shrink-0" 
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="font-medium">{color.name}</span>
                        <span className="font-mono-code text-[#DFD3BD]/70 text-[10px]">{color.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Elements Breakdown */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] mb-2 flex items-center gap-1.5">
                    <Type className="w-3.5 h-3.5" /> Key Visual & Strategic Elements
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#EDE5D4]">
                    {creative.designElements.map((elem, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-1.5">
                        <span className="text-[#10B981] mt-0.5 font-bold">•</span>
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Strategic Takeaway Card */}
        <div className="mt-16 bg-[#164331]/60 rounded-3xl p-8 border border-[#2A7C55]/40 text-center max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] block mb-2">
            Marketing Strategy Takeaway
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FCFAF7]">
            "Tourism marketing isn't just about showing pretty beaches — it's about evoking a feeling of homecoming."
          </h3>
          <p className="mt-3 text-sm text-[#DFD3BD] max-w-2xl mx-auto">
            By combining vintage poster nostalgia with authentic Goan countryside landscapes, these creatives speak directly to travelers seeking tranquility, slow living, and deep cultural immersion.
          </p>
        </div>

      </div>
    </section>
  );
}

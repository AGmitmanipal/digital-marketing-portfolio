import React from 'react';
import { Compass, Sparkles, Send, ArrowRight, Eye, Bookmark, MapPin } from 'lucide-react';
import { goaCreativeIdeas } from '../data/portfolioData';

export default function GoaCreativeConcepts({ onOpenLightbox }) {
  return (
    <section id="goa-vision" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Eyebrow & Main Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D36135] mb-2">
            <Compass className="w-4 h-4" />
            <span>Tourism & Hospitality Creative Direction</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0F3324] tracking-tight leading-[1.1]">
            Goa Is More Than Just a Destination. <br className="hidden sm:inline" />
            <span className="font-editorial italic font-normal text-[#D36135]">It's an Experience.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A5568] font-sans-clean leading-relaxed">
            As a local creator born and raised in Goa, I see a tremendous opportunity to redefine destination marketing. Beyond the typical coastal party narrative lies an untapped world of cultural heritage, monsoonal tranquility, spice hills, and culinary memory.
          </p>

          <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-semibold bg-[#EDE5D4] text-[#0F3324] border border-[#DFD3BD]">
            *Proposed Strategic Creative Concepts — Ready for Hospitality Brands & Tourism Initiatives
          </span>
        </div>

        {/* 6 Proposed Creative Ideas - Magazine Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goaCreativeIdeas.map((idea, idx) => (
            <div
              key={idea.id}
              className="group bg-[#FCFAF7] rounded-3xl overflow-hidden border border-[#EDE5D4] hover:border-[#D36135] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Visual Image Preview */}
                <div 
                  onClick={() => onOpenLightbox({
                    image: idea.image,
                    title: idea.title,
                    caption: `${idea.subtitle} (Goa Creative Concept by Anil alias Anay Amrish Ghode)`
                  })}
                  className="relative h-56 overflow-hidden bg-[#0F3324] cursor-pointer"
                >
                  <img
                    src={idea.image}
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082116]/80 via-transparent to-transparent" />
                  
                  {/* Category Chip */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#082116]/80 text-[#EDE5D4] backdrop-blur-sm border border-white/10">
                    {idea.tagline}
                  </span>

                  {/* Proposal badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded text-[10px] font-semibold bg-[#E07A5F] text-[#0F3324]">
                    Concept 0{idx + 1}
                  </span>

                  {/* Bottom title in preview */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-display font-bold text-lg leading-snug">
                      {idea.title}
                    </h3>
                  </div>
                </div>

                {/* Content description */}
                <div className="p-6 space-y-4">
                  <p className="text-sm font-medium text-[#0F3324] leading-relaxed">
                    {idea.subtitle}
                  </p>
                  
                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#EDE5D4] text-xs text-[#5A6578] space-y-1.5">
                    <div>
                      <strong className="text-[#0F3324] font-semibold block mb-0.5">Execution Format:</strong>
                      <span className="text-[#2B6E8D] font-medium">{idea.format}</span>
                    </div>
                    <div>
                      <strong className="text-[#0F3324] font-semibold block mb-0.5">Storytelling Angle:</strong>
                      <span>{idea.conceptAngle}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Card Footer with CTA link */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-[#EDE5D4] text-xs font-bold text-[#0F3324] group-hover:text-[#D36135] transition-colors"
                >
                  <span>Pitch This Campaign</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Section Bottom Banner & CTA Button */}
        <div className="mt-16 bg-[#0F3324] text-[#FAF7F2] rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] block">
              Collaborative Opportunities
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#FCFAF7]">
              Let's Tell Goa's Story Differently.
            </h3>
            <p className="text-xs sm:text-sm text-[#DFD3BD] leading-relaxed">
              Whether you are a boutique heritage stay, eco-tourism venture, culinary brand, or regional marketing agency — I bring fresh visual perspective and dedicated creative energy.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-[#0F3324] bg-[#FAF7F2] hover:bg-[#EDE5D4] shadow-lg hover:shadow-xl transition-all duration-300 shrink-0"
          >
            <span>Let's Tell Goa's Story Differently</span>
            <ArrowRight className="w-4 h-4 text-[#D36135]" />
          </a>
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  Palette, 
  Video, 
  Share2, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Lightbulb,
  Info
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsToolkit() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const icons = {
    "Graphic Design": Palette,
    "Video Editing": Video,
    "Social Media & Digital Marketing": Share2,
    "AI & Technology": Cpu
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#D36135] block mb-2">
              Capabilities & Tools • Transparent Breakdown
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0F3324] tracking-tight">
              My Skills & Creative Toolkit
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A6578] mt-3 md:mt-0 max-w-lg font-sans-clean">
            A transparent overview of tools and techniques I actively employ in content production, alongside foundational domains I am currently studying.
          </p>
        </div>

        {/* Transparency Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#FCFAF7] border border-[#EDE5D4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#2B6E8D] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              <strong className="text-[#0F3324]">Honest Skill Proficiency: </strong>
              Green badges highlight tools and skills with <strong>hands-on practical experience</strong> from producing actual channels. Orange badges denote <strong>foundational principles</strong> currently being studied.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs font-semibold">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Hands-on Used
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3D6] text-[#B06000] border border-[#FEEFC3]">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" /> Foundational / Learning
            </span>
          </div>
        </div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.map((category) => {
            const Icon = icons[category.category] || Sparkles;
            return (
              <div
                key={category.category}
                className="bg-[#FCFAF7] rounded-3xl p-6 sm:p-8 border border-[#EDE5D4] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F3324] text-[#FAF7F2] flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5 text-[#E07A5F]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-[#0F3324]">
                        {category.category}
                      </h3>
                      <p className="text-xs text-[#5A6578]">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => {
                      const isUsed = skill.status === 'used';
                      return (
                        <div
                          key={sIdx}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs transition-all ${
                            isUsed
                              ? 'bg-[#FAF7F2] text-[#0F3324] border border-[#DFD3BD] hover:border-[#10B981]'
                              : 'bg-[#FFF9F5] text-[#9A3412] border border-[#FDBA74]/60'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              isUsed ? 'bg-[#10B981]' : 'bg-[#F97316]'
                            }`}
                          />
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-[10px] text-[#6B7280] font-sans">
                            • {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Footer Insight */}
                <div className="mt-8 pt-4 border-t border-[#EDE5D4] flex items-center justify-between text-[11px] text-[#6B7280]">
                  <span>Applied across active channels & campaigns</span>
                  <span className="font-mono-code font-semibold text-[#0F3324]">
                    {category.skills.filter(s => s.status === 'used').length} Applied Tools
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

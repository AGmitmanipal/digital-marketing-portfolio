import React, { useEffect } from 'react';
import { X, Download, Printer, MapPin, Mail, Phone, ExternalLink, Award, BookOpen, Sparkles, Briefcase } from 'lucide-react';
import { personalInfo, skillsData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#082116]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#DFD3BD] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE5D4] bg-[#FCFAF7] sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0F3324]">
              Candidate Profile & Curriculum Vitae
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#164331] bg-[#EDE5D4] hover:bg-[#DFD3BD] rounded-lg transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0F3324] hover:bg-[#164331] rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Anil (Anay)</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6B7280] hover:text-[#0F3324] hover:bg-[#EDE5D4]/60 rounded-full transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#FAF7F2] text-[#242421] print:p-0 print:bg-white">

          {/* Header */}
          <div className="border-b border-[#EDE5D4] pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/images/anil-ghode.jpg"
                  alt="Anil alias Anay Amrish Ghode"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-[#D36135] shadow-sm shrink-0"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#0F3324]">
                    {personalInfo.name}
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-[#2B6E8D] mt-1">
                    Content Creator • Aspiring Digital Marketer • Creative Technologist
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-xs text-[#5A6578]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D36135]" /> Goa, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#D36135]" /> {personalInfo.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D36135]" /> {personalInfo.phoneDisplay}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-[#4A5568] leading-relaxed max-w-3xl">
              Electronics & Communication Engineering student at Manipal Institute of Technology with content creation experience at Goonj MAHE and a strong passion for creative brand storytelling, digital platforms, and visual communication. Seeking internship and entry opportunities in digital marketing, social media management, and travel/hospitality content creation.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D36135] flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4" /> Education
            </h2>
            <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EDE5D4]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-display font-semibold text-base text-[#0F3324]">
                    Bachelor of Technology (B.Tech) in Electronics and Communication Engineering
                  </h3>
                  <p className="text-sm text-[#4A5568]">Manipal Institute of Technology (MIT Manipal), Karnataka</p>
                </div>
                <span className="text-xs font-medium text-[#2B6E8D] mt-1 sm:mt-0 bg-[#EDE5D4]/60 px-2.5 py-1 rounded">
                  Pursuing (Engineering Undergrad)
                </span>
              </div>
            </div>
          </div>

          {/* Work / Content Creation Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D36135] flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4" /> Experience & Roles
            </h2>
            <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EDE5D4]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-display font-semibold text-base text-[#0F3324]">
                    Content Creator — Goonj MAHE
                  </h3>
                  <p className="text-xs text-[#2B6E8D] font-medium">Manipal Academy of Higher Education</p>
                </div>
                <span className="text-xs font-semibold text-[#D36135] mt-1 sm:mt-0 bg-[#EDE5D4]/70 px-2.5 py-1 rounded">
                  Aug 2025 – Sep 2025 · 2 mos
                </span>
              </div>
              <p className="text-xs text-[#5A6578] mt-1.5 font-medium">
                Focus: Social Media Content Creation, Communication Strategy & Campus Outreach
              </p>
              <ul className="list-disc list-inside text-xs text-[#4A5568] mt-2 space-y-1">
                <li>Spearheaded digital content creation and social media communication for Goonj MAHE initiatives and events.</li>
                <li>Created engaging audience-centric posts and visual communication media to maximize student participation across campus.</li>
                <li>Collaborated across teams to maintain consistent branding, tone, and strategic content planning.</li>
              </ul>
              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2.5 border-t border-[#EDE5D4]">
                <span className="text-[11px] text-[#5A6578] font-semibold mr-1">Skills:</span>
                {["Communication", "Social Media", "Content Creation", "Audience Engagement"].map((skill, idx) => (
                  <span key={idx} className="text-[11px] px-2 py-0.5 bg-[#FAF7F2] text-[#0F3324] border border-[#EDE5D4] rounded-md font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Independent Creative Projects & Channels */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D36135] flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" /> Independent Creative Projects & Channels
            </h2>
            <div className="space-y-4">

              {/* Goa Campaign */}
              <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EDE5D4]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-display font-semibold text-base text-[#0F3324]">
                    "Discover Goa – Beyond the Beaches" (Canva Tourism Creative Concept)
                  </h3>
                  <span className="text-xs text-[#164331] font-semibold bg-[#EDE5D4] px-2 py-0.5 rounded">
                    Self-Initiated Concept
                  </span>
                </div>
                <p className="text-xs text-[#5A6578] mt-1">Design Tool: Canva | Focus: Tourism Marketing & Visual Branding</p>
                <ul className="list-disc list-inside text-xs text-[#4A5568] mt-2 space-y-1">
                  <li>Created original vintage travel-poster and slow-living tourism creatives in Canva promoting Goa's heritage and hinterlands.</li>
                  <li>Applied editorial typography, intentional color theory (ocean teal, sunset ochre, terraced green), and atmospheric composition.</li>
                </ul>
              </div>

              {/* Math Lovers */}
              <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EDE5D4]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-display font-semibold text-base text-[#0F3324]">
                    Math Lovers (@mathlovers3421) — Instagram Educational Brand
                  </h3>
                  <span className="text-xs text-[#2B6E8D] font-medium">Independent Creator</span>
                </div>
                <p className="text-xs text-[#5A6578] mt-1">Focus: Short-form Video Production, Visual Mathematics, Concept Breakdown</p>
                <ul className="list-disc list-inside text-xs text-[#4A5568] mt-2 space-y-1">
                  <li>Produced Instagram reels and educational carousels exploring geometry, calculus intuition, and mathematical patterns in nature.</li>
                  <li>Developed pacing, hook writing, aesthetic visual overlays, and audio sync for short-form retention.</li>
                </ul>
              </div>

              {/* Math Lovers (YouTube) */}
              <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EDE5D4]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-display font-semibold text-base text-[#0F3324]">
                    Math Lovers (@curiouslearner9231) — YouTube Channel
                  </h3>
                  <span className="text-xs text-[#2B6E8D] font-medium">Technical Creator</span>
                </div>
                <p className="text-xs text-[#5A6578] mt-1">Focus: Long-Form Technical Tutorials, Data Structures & Algorithms</p>
                <ul className="list-disc list-inside text-xs text-[#4A5568] mt-2 space-y-1">
                  <li>Produced comprehensive whiteboard explainers on Binary Trees, Balanced Trees, and mathematical proofs.</li>
                  <li>Managed full production cycle: script ideation, recording, Filmora & Clipchamp video editing, and click-worthy thumbnail design.</li>
                </ul>
              </div>

              {/* LinkedIn */}
              <div className="bg-[#FCFAF7] p-4 rounded-xl border border-[#EDE5D4]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="font-display font-semibold text-base text-[#0F3324]">
                    LinkedIn Professional Content (@anay-ghode)
                  </h3>
                  <span className="text-xs text-[#2B6E8D] font-medium">Content & Insights</span>
                </div>
                <p className="text-xs text-[#5A6578] mt-1">Focus: Engineering Insights, Developer Tooling, Career Reflections</p>
                <ul className="list-disc list-inside text-xs text-[#4A5568] mt-2 space-y-1">
                  <li>Authored structured articles and technical takeaways bridging engineering principles with communication strategy.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Categorized Skills */}
          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold text-[#D36135] flex items-center gap-2 mb-3">
              <Award className="w-4 h-4" /> Skills & Tooling (Hands-on vs Foundational)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4]">
                <h4 className="text-xs font-bold text-[#0F3324] uppercase mb-2">Graphic Design & Video Editing</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Canva (Primary)", "Filmora", "Clipchamp", "InShot", "Social Media Graphics", "Posters", "Thumbnail Design", "Reels Creation", "Subtitles & Transitions"].map((s, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-[#EDE5D4] text-[#164331] rounded-md font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4]">
                <h4 className="text-xs font-bold text-[#0F3324] uppercase mb-2">Social Media & Marketing</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Brand Storytelling", "Content Ideation", "Copywriting", "Caption Writing", "Audience Engagement", "Content Planning"].map((s, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-[#EDE5D4] text-[#164331] rounded-md font-medium">
                      {s}
                    </span>
                  ))}
                  <span className="text-xs px-2 py-0.5 bg-[#FDF0EC] text-[#D36135] border border-[#EFA694]/50 rounded-md">
                    Foundational: SEO, Meta & Google Ads
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4]">
                <h4 className="text-xs font-bold text-[#0F3324] uppercase mb-2">Tech & AI Tools</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["AI-assisted Content Creation", "AI Research", "Python", "JavaScript", "HTML/CSS Basics", "Coding-based Visuals"].map((s, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-[#EDE5D4] text-[#164331] rounded-md font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-[#FCFAF7] rounded-xl border border-[#EDE5D4]">
                <h4 className="text-xs font-bold text-[#0F3324] uppercase mb-2">Industry Passion</h4>
                <p className="text-xs text-[#4A5568] leading-relaxed">
                  Travel & Tourism Marketing, Hospitality Storytelling, Goa Destination Promotion, Educational Content, Independent Media Production.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FCFAF7] border-t border-[#EDE5D4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A6578]">
          <span>Portfolio of Anil alias Anay Amrish Ghode • Goa, India</span>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/anay-ghode/" target="_blank" rel="noreferrer" className="hover:text-[#0F3324] underline flex items-center gap-1">
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://www.instagram.com/mathlovers3421/" target="_blank" rel="noreferrer" className="hover:text-[#0F3324] underline flex items-center gap-1">
              Instagram <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

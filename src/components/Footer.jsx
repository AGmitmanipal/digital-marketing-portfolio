import React from 'react';
import { ArrowUp, Heart, Compass, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#082116] text-[#DFD3BD] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#1F5740]/40 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1F5740]/40">
          
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#2B6E8D] shadow-md shrink-0 bg-[#0F3324]">
                <img
                  src="/images/anil-ghode.jpg"
                  alt="Anil alias Anay Amrish Ghode"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[#FCFAF7] block leading-none">
                  Anil alias Anay Amrish Ghode
                </span>
                <span className="text-[11px] uppercase tracking-widest text-[#E07A5F] font-semibold mt-1 block">
                  Creative Portfolio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A0AEC0] leading-relaxed max-w-sm">
              Turning ideas into digital experiences. Blending storytelling, visual design, and technology to help modern brands engage audiences meaningfully.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#E07A5F]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Goa, India • Manipal Institute of Technology</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FCFAF7] block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-[#A0AEC0]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Timeline</a>
              </li>
              <li>
                <a href="#goa-campaign" className="hover:text-white transition-colors">Goa Tourism Showcase</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Creative Portfolio Gallery</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">Skills & Tooling</a>
              </li>
              <li>
                <a href="#goa-vision" className="hover:text-white transition-colors">Goa Tourism Concepts</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Creative Methodology</a>
              </li>
            </ul>
          </div>

          {/* Channels & Documents */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FCFAF7] block">
              Profiles & Documents
            </span>
            <div className="space-y-2 text-xs">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0F3324]/80 hover:bg-[#164331] text-[#DFD3BD] hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>LinkedIn Profile (@anay-ghode)</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#A0AEC0]" />
              </a>

              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0F3324]/80 hover:bg-[#164331] text-[#DFD3BD] hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>Instagram (@mathlovers3421)</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#A0AEC0]" />
              </a>

              <a
                href={personalInfo.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#0F3324]/80 hover:bg-[#164331] text-[#DFD3BD] hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <YoutubeIcon className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>YouTube Channel (Math Lovers)</span>
                </span>
                <ExternalLink className="w-3 h-3 text-[#A0AEC0]" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full text-left flex items-center justify-between p-2.5 rounded-xl bg-[#EDE5D4] text-[#0F3324] hover:bg-white font-semibold transition-colors mt-2"
              >
                <span>Curriculum Vitae (PDF Preview)</span>
                <ExternalLink className="w-3 h-3 text-[#0F3324]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718096]">
          <p>
            © {new Date().getFullYear()} Anil alias Anay Amrish Ghode. All original Canva designs & content reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              Designed with tropical warmth in Goa, India
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#0F3324] hover:bg-[#164331] text-[#EDE5D4] hover:text-white transition-all shadow-sm"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

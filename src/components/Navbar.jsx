import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sparkles, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Goa Campaign", href: "#goa-campaign" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Goa Vision", href: "#goa-vision" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#D36135] via-[#2B6E8D] to-[#10B981] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#EDE5D4] py-3.5' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a 
            href="#" 
            className="flex items-center gap-3 group"
            aria-label="Anil alias Anay Amrish Ghode - Home"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#D36135]/60 shadow-md group-hover:scale-105 group-hover:border-[#D36135] transition-all duration-300 shrink-0 bg-[#0F3324]">
              <img
                src="/images/anil-ghode.jpg"
                alt="Anil alias Anay Amrish Ghode"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#0F3324] group-hover:text-[#D36135] transition-colors leading-none">
                Anil alias Anay
              </span>
              <span className="text-[11px] font-sans-clean font-medium tracking-widest uppercase text-[#D36135] mt-1">
                Amrish Ghode • Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#4A5568] hover:text-[#0F3324] hover:bg-[#EDE5D4]/50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#164331] bg-[#EDE5D4] hover:bg-[#DFD3BD] rounded-xl transition-all shadow-sm"
              title="View full resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0F3324] hover:bg-[#164331] rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <Send className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResume}
              className="sm:hidden px-2.5 py-1.5 text-xs font-semibold text-[#164331] bg-[#EDE5D4] rounded-lg"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F3324] hover:bg-[#EDE5D4] rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EDE5D4] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 text-sm font-semibold text-[#0F3324] hover:bg-[#EDE5D4] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#EDE5D4] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#164331] bg-[#EDE5D4] rounded-xl"
                >
                  View Full Resume
                </button>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#0F3324] rounded-xl shadow-sm"
                >
                  Let's Connect
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

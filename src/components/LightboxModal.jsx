import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function LightboxModal({ isOpen, image, title, caption, onClose }) {
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

  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#082116]/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#DFD3BD]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="w-full flex items-center justify-between px-6 py-4 border-b border-[#EDE5D4] bg-[#FCFAF7]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D36135] font-semibold">Canva Original Creative</span>
            <h3 className="text-lg sm:text-xl font-display font-semibold text-[#0F3324]">{title}</h3>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={image} 
              download 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#164331] bg-[#EDE5D4] hover:bg-[#DFD3BD] rounded-lg transition-colors"
              title="Download full quality image"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save</span>
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-[#6B7280] hover:text-[#0F3324] hover:bg-[#EDE5D4]/60 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Content area */}
        <div className="w-full flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8 bg-[#F7F3EB]/60">
          <img 
            src={image} 
            alt={title || "Original creative showcase"} 
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-lg border border-[#EDE5D4]"
          />
        </div>

        {/* Caption bar */}
        {caption && (
          <div className="w-full px-6 py-3.5 bg-[#FCFAF7] border-t border-[#EDE5D4] text-center sm:text-left text-sm text-[#4A5568]">
            <p className="font-editorial italic text-base text-[#164331]">{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';

export default function VideoModal({ isOpen, video, onClose }) {
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

  if (!isOpen || !video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#082116]/90 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-2xl border border-[#DFD3BD]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE5D4] bg-[#FCFAF7]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D36135]">
              Math Lovers • YouTube
            </span>
            <h3 className="text-base sm:text-lg font-display font-semibold text-[#0F3324] line-clamp-1">
              {video.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#D36135] hover:bg-[#C2532A] rounded-lg transition-colors shadow-sm"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-[#6B7280] hover:text-[#0F3324] hover:bg-[#EDE5D4]/60 rounded-full transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Embed */}
        <div className="relative aspect-video w-full bg-black">
          {video.videoId ? (
            <iframe 
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-white p-6 text-center">
              <Play className="w-12 h-12 mb-3 text-[#D36135]" />
              <p className="text-lg font-medium">{video.title}</p>
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-[#D36135] rounded-lg text-sm font-semibold flex items-center gap-2"
              >
                Open Video <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Video Notes */}
        {video.summary && (
          <div className="p-5 bg-[#FCFAF7] border-t border-[#EDE5D4]">
            <p className="text-sm text-[#4A5568] leading-relaxed">
              <span className="font-semibold text-[#0F3324]">Concept Breakdown: </span>
              {video.summary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

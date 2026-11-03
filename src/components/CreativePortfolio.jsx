import React, { useState } from 'react';
import { 
  ExternalLink, 
  Play, 
  Sparkles, 
  Film, 
  BookOpen, 
  Layers, 
  ArrowUpRight,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';
import { portfolioProjects } from '../data/portfolioData';

export default function CreativePortfolio({ onOpenVideo, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Channels & Works' },
    { id: 'instagram', label: 'Math Lovers (Instagram)', icon: InstagramIcon },
    { id: 'youtube', label: 'Math Lovers (YouTube)', icon: YoutubeIcon },
    { id: 'linkedin', label: 'LinkedIn Insights', icon: LinkedinIcon },
  ];

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#D36135] block mb-2">
              Cross-Platform Work • Independent Channels
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0F3324] tracking-tight">
              My Creative Portfolio
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A6578] mt-3 md:mt-0 max-w-lg font-sans-clean">
            Exploring storytelling, visual explanations, and tech concepts across Instagram, YouTube, and LinkedIn. Real content created with passion and strategic care.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#EDE5D4]">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0F3324] text-[#FAF7F2] shadow-md scale-[1.02]'
                    : 'bg-[#FCFAF7] text-[#4A5568] hover:text-[#0F3324] hover:bg-[#EDE5D4] border border-[#EDE5D4]'
                }`}
              >
                {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-[#E07A5F]' : 'text-[#6B7280]'}`} />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Channels Content */}
        <div className="space-y-20">

          {/* PROJECT A: INSTAGRAM (Math Lovers) */}
          {(activeFilter === 'all' || activeFilter === 'instagram') && (
            <div className="bg-[#FCFAF7] rounded-3xl p-6 sm:p-10 border border-[#EDE5D4] shadow-sm">
              
              {/* Channel Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#EDE5D4]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0F3324] via-[#164331] to-[#D36135] p-0.5 shadow-md flex items-center justify-center">
                    <div className="w-full h-full bg-[#FCFAF7] rounded-[14px] flex items-center justify-center">
                      <InstagramIcon className="w-7 h-7 text-[#D36135]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F3324]">
                        Math Lovers
                      </h3>
                      <span className="text-xs font-mono-code text-[#5A6578]">@mathlovers3421</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A5568] mt-1 max-w-2xl">
                      An educational Instagram page exploring the connection between mathematics and everyday life through visual content, creative explanations and short-form videos.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/mathlovers3421/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] bg-[#0F3324] hover:bg-[#164331] rounded-xl shadow-sm transition-colors self-start md:self-center"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>View Instagram Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Instagram Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                {portfolioProjects[0].works.map((work, idx) => (
                  <div
                    key={work.id}
                    className="group rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EDE5D4] hover:border-[#D36135] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Visual Card Thumbnail */}
                    <div 
                      onClick={() => onOpenLightbox({
                        image: work.cover,
                        title: work.title,
                        caption: `${work.highlight} • From @mathlovers3421`
                      })}
                      className="relative aspect-square overflow-hidden bg-[#082116] cursor-pointer"
                    >
                      <img
                        src={work.cover}
                        alt={work.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                      
                      {/* Top Tag */}
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-[#EDE5D4] backdrop-blur-sm">
                        {work.tag}
                      </span>

                      {/* Zoom hint */}
                      <span className="absolute top-2.5 right-2.5 p-1 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-3 h-3" />
                      </span>

                      {/* Bottom title inside thumbnail */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                        <p className="text-xs font-semibold line-clamp-2 leading-tight">
                          {work.title}
                        </p>
                      </div>
                    </div>

                    {/* Card Content & External Link */}
                    <div className="p-3.5 flex flex-col justify-between flex-1 space-y-2.5">
                      <p className="text-[11px] text-[#5A6578] line-clamp-2 leading-normal">
                        {work.highlight}
                      </p>
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between w-full pt-2 border-t border-[#EDE5D4] text-[11px] font-semibold text-[#0F3324] hover:text-[#D36135] transition-colors"
                      >
                        <span>Open on Instagram</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* PROJECT B: YOUTUBE (Math Lovers) */}
          {(activeFilter === 'all' || activeFilter === 'youtube') && (
            <div className="bg-[#FCFAF7] rounded-3xl p-6 sm:p-10 border border-[#EDE5D4] shadow-sm">
              
              {/* Channel Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#EDE5D4]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#CC0000] text-white flex items-center justify-center shadow-md">
                    <YoutubeIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F3324]">
                        Math Lovers
                      </h3>
                      <span className="text-xs font-mono-code text-[#5A6578]">@curiouslearner9231</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A5568] mt-1 max-w-2xl">
                      An educational YouTube channel where I create videos covering mathematics, Data Structures and Algorithms (DSA), and technical concepts.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.youtube.com/@curiouslearner9231"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] bg-[#0F3324] hover:bg-[#164331] rounded-xl shadow-sm transition-colors self-start md:self-center"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>View YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* YouTube Video Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {portfolioProjects[1].works.map((video) => (
                  <div
                    key={video.id}
                    className="group rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EDE5D4] hover:border-[#D36135] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Real Video Thumbnail with Play Trigger */}
                    <div 
                      onClick={() => onOpenVideo(video)}
                      className="relative aspect-video overflow-hidden bg-[#082116] cursor-pointer"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                      {/* Play Button Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm text-[#0F3324] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#D36135] group-hover:text-white transition-all duration-300">
                          <Play className="w-5 h-5 ml-0.5 fill-current" />
                        </div>
                      </div>

                      {/* Video Category Tag */}
                      <span className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-black/70 text-[#EDE5D4] backdrop-blur-sm">
                        {video.tag}
                      </span>
                    </div>

                    {/* Card Content & Action Buttons */}
                    <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                      <div>
                        <h4 className="font-display font-bold text-base text-[#0F3324] line-clamp-2 group-hover:text-[#D36135] transition-colors">
                          {video.title}
                        </h4>
                        <p className="text-xs text-[#5A6578] mt-2 leading-relaxed line-clamp-3">
                          {video.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#EDE5D4] flex items-center justify-between gap-2">
                        <button
                          onClick={() => onOpenVideo(video)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F3324] hover:text-[#D36135] transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Preview</span>
                        </button>

                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#5A6578] hover:text-[#0F3324] transition-colors"
                        >
                          <span>YouTube</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* PROJECT C: LINKEDIN (Professional Content) */}
          {(activeFilter === 'all' || activeFilter === 'linkedin') && (
            <div className="bg-[#FCFAF7] rounded-3xl p-6 sm:p-10 border border-[#EDE5D4] shadow-sm">
              
              {/* Channel Header Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#EDE5D4]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A66C2] text-white flex items-center justify-center shadow-md">
                    <LinkedinIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F3324]">
                        LinkedIn Articles & Insights
                      </h3>
                      <span className="text-xs font-mono-code text-[#5A6578]">in/anay-ghode</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4A5568] mt-1 max-w-2xl">
                      Sharing knowledge, experiences and insights about software engineering, developer tools, technology and career development.
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/anay-ghode/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] bg-[#0F3324] hover:bg-[#164331] rounded-xl shadow-sm transition-colors self-start md:self-center"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>View LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* LinkedIn Posts Editorial Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {portfolioProjects[2].works.map((post) => (
                  <div
                    key={post.id}
                    className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#EDE5D4] hover:border-[#0A66C2] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#5A6578] mb-3">
                        <span className="px-2.5 py-1 bg-[#E8F1F5] text-[#1D4F66] rounded-md font-semibold text-[11px]">
                          {post.tag}
                        </span>
                        <span className="font-editorial italic text-xs text-[#6B7280]">
                          {post.date}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-lg text-[#0F3324] group-hover:text-[#0A66C2] transition-colors leading-snug">
                        {post.title}
                      </h4>

                      <p className="text-xs text-[#5A6578] mt-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-[#EDE5D4] flex items-center justify-between">
                      <span className="text-[11px] text-[#8C9AA9] font-medium">Read on LinkedIn</span>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                      >
                        <span>View Post</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

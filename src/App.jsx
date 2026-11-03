import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import GoaCampaign from './components/GoaCampaign';
import CreativePortfolio from './components/CreativePortfolio';
import SkillsToolkit from './components/SkillsToolkit';
import GoaCreativeConcepts from './components/GoaCreativeConcepts';
import CreativeProcess from './components/CreativeProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import VideoModal from './components/VideoModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    image: '',
    title: '',
    caption: ''
  });

  const [videoState, setVideoState] = useState({
    isOpen: false,
    video: null
  });

  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenLightbox = ({ image, title, caption }) => {
    setLightboxState({
      isOpen: true,
      image,
      title: title || '',
      caption: caption || ''
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const handleOpenVideo = (video) => {
    setVideoState({
      isOpen: true,
      video
    });
  };

  const handleCloseVideo = () => {
    setVideoState(prev => ({ ...prev, isOpen: false, video: null }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#242421]">
      {/* Editorial Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenLightbox={handleOpenLightbox} />
        <About />
        <GoaCampaign onOpenLightbox={handleOpenLightbox} />
        <CreativePortfolio onOpenVideo={handleOpenVideo} onOpenLightbox={handleOpenLightbox} />
        <SkillsToolkit />
        <GoaCreativeConcepts onOpenLightbox={handleOpenLightbox} />
        <CreativeProcess />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Editorial Agency Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Modals */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        image={lightboxState.image}
        title={lightboxState.title}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />

      <VideoModal
        isOpen={videoState.isOpen}
        video={videoState.video}
        onClose={handleCloseVideo}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

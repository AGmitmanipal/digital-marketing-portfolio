import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles,
  Check,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Travel / Tourism Marketing',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fallbackTriggered, setFallbackTriggered] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, Message) before submitting.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          subject: formData.subject || `Inquiry from ${formData.name} - ${formData.category}`,
          message: formData.message,
          _subject: formData.subject 
            ? `[Portfolio Contact] ${formData.subject}` 
            : `New Portfolio Inquiry from ${formData.name} (${formData.category})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        try {
          confetti({
            particleCount: 90,
            spread: 70,
            origin: { y: 0.75 },
            colors: ['#D36135', '#0F3324', '#2B6E8D', '#E07A5F', '#10B981']
          });
        } catch (err) {}
        setSubmitSuccess(true);
        setFallbackTriggered(false);
      } else {
        throw new Error(data.message || 'Submission service returned a response.');
      }
    } catch (err) {
      console.warn('FormSubmit AJAX attempt encountered an issue, enabling direct email app trigger:', err);
      // Graceful fallback: trigger confetti and let the user send via client
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.75 },
          colors: ['#D36135', '#0F3324', '#2B6E8D']
        });
      } catch (e) {}
      setFallbackTriggered(true);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitSuccess(false);
    setFallbackTriggered(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'Travel / Tourism Marketing',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0F3324] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-[#E07A5F]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 rounded-full bg-[#2B6E8D]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] block mb-2">
            Initiate Collaboration • Reach Out
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FCFAF7] tracking-tight leading-[1.1]">
            Have an Idea? <br />
            <span className="font-editorial italic font-normal text-[#E07A5F]">Let's Create Something Great.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EDE5D4] font-sans-clean leading-relaxed">
            I'm open to freelance projects, collaborations, content creation opportunities and digital marketing roles.
          </p>
        </div>

        {/* Contact Grid: Left Info & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-[#164331]/90 p-6 sm:p-8 rounded-3xl border border-[#2A7C55]/40 shadow-xl space-y-6">
              
              <div>
                <h3 className="font-display font-bold text-xl text-[#FCFAF7] mb-1">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-[#DFD3BD]">
                  Based in Goa, India. Available for remote and hybrid opportunities worldwide.
                </p>
              </div>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-[#0F3324] border border-[#2A7C55]/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE5D4]/10 text-[#E07A5F] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#DFD3BD]/70 block">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-xs sm:text-sm font-semibold text-[#FCFAF7] hover:text-[#E07A5F] transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#164331] hover:bg-[#1F5740] text-[#DFD3BD] hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp item */}
              <div className="p-4 rounded-2xl bg-[#0F3324] border border-[#2A7C55]/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-[#EDE5D4]/10 text-[#E07A5F] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#DFD3BD]/70 block">
                      Phone / WhatsApp
                    </span>
                    <a 
                      href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#FCFAF7] hover:text-[#E07A5F] transition-colors truncate block"
                    >
                      {personalInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-[#164331] hover:bg-[#1F5740] text-[#DFD3BD] hover:text-white transition-colors shrink-0"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2.5 text-xs text-[#DFD3BD] pt-2">
                <MapPin className="w-4 h-4 text-[#E07A5F] shrink-0" />
                <span>Goa, India • Manipal Institute of Technology</span>
              </div>

              {/* Resume Trigger button */}
              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl bg-[#EDE5D4] hover:bg-white text-[#0F3324] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>View & Print Formal Resume</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

            </div>

            {/* Social Media Channels Card */}
            <div className="bg-[#164331]/90 p-6 rounded-3xl border border-[#2A7C55]/40 shadow-xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E07A5F] block">
                Connect on Social Platforms
              </span>
              
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0F3324] hover:bg-[#0A66C2] text-center transition-all group flex flex-col items-center gap-1.5"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#FAF7F2] group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-semibold text-[#DFD3BD] group-hover:text-white">LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0F3324] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-center transition-all group flex flex-col items-center gap-1.5"
                >
                  <InstagramIcon className="w-5 h-5 text-[#FAF7F2] group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-semibold text-[#DFD3BD] group-hover:text-white">Instagram</span>
                </a>

                <a
                  href={personalInfo.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#0F3324] hover:bg-[#CC0000] text-center transition-all group flex flex-col items-center gap-1.5"
                >
                  <YoutubeIcon className="w-5 h-5 text-[#FAF7F2] group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-semibold text-[#DFD3BD] group-hover:text-white">YouTube</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] text-[#242421] p-8 sm:p-10 rounded-3xl border border-[#DFD3BD] shadow-2xl">
              
              {submitSuccess ? (
                <div className="py-10 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#0F3324]">
                      {fallbackTriggered ? "Message Ready to Dispatch!" : "Message Sent Successfully!"}
                    </h3>
                    <p className="mt-2 text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#0F3324]">{formData.name}</strong>! Your inquiry regarding <em className="text-[#0F3324] font-medium">{formData.category}</em> has been routed directly to <span className="font-semibold text-[#0F3324] underline">{personalInfo.email}</span>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-[#FCFAF7] border border-[#EDE5D4] max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="flex justify-between text-[#5A6578]">
                      <span className="font-semibold text-[#0F3324]">Recipient:</span>
                      <span className="font-mono-code">{personalInfo.email}</span>
                    </div>
                    <div className="flex justify-between text-[#5A6578]">
                      <span className="font-semibold text-[#0F3324]">Category:</span>
                      <span>{formData.category}</span>
                    </div>
                    <div className="flex justify-between text-[#5A6578]">
                      <span className="font-semibold text-[#0F3324]">From:</span>
                      <span>{formData.name} ({formData.email})</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || `Inquiry from ${formData.name}: ${formData.category}`)}&body=${encodeURIComponent(`Hi Anil (Anay),\n\n${formData.message}\n\nCategory: ${formData.category}\nFrom: ${formData.name}\nEmail: ${formData.email}`)}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0F3324] hover:bg-[#164331] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-[#E07A5F]" />
                      <span>{fallbackTriggered ? "Click to Dispatch via Email Client" : "Open in Email App (Backup)"}</span>
                    </a>
                    
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#EDE5D4] hover:bg-[#DFD3BD] text-[#0F3324] text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#0F3324] mb-1">
                      Send a Message
                    </h3>
                    <p className="text-xs text-[#5A6578]">
                      Fill out this quick form and I will respond within 24 hours.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3324] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Maya Sharma"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#EDE5D4] text-sm text-[#0F3324] focus:outline-none focus:border-[#D36135] focus:ring-1 focus:ring-[#D36135] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3324] mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. maya@agency.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#EDE5D4] text-sm text-[#0F3324] focus:outline-none focus:border-[#D36135] focus:ring-1 focus:ring-[#D36135] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3324] mb-1.5">
                        Inquiry Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#EDE5D4] text-sm text-[#0F3324] focus:outline-none focus:border-[#D36135] focus:ring-1 focus:ring-[#D36135] transition-all"
                      >
                        <option value="Travel / Tourism Marketing">Travel / Tourism Marketing</option>
                        <option value="Social Media Content Creation">Social Media Content Creation</option>
                        <option value="Canva & Graphic Design">Canva & Graphic Design</option>
                        <option value="Full-Time / Internship Role">Full-Time / Internship Role</option>
                        <option value="General Collaboration">General Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3324] mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Goa Campaign Pitch / Project"
                        className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#EDE5D4] text-sm text-[#0F3324] focus:outline-none focus:border-[#D36135] focus:ring-1 focus:ring-[#D36135] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0F3324] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, or role..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#FCFAF7] border border-[#EDE5D4] text-sm text-[#0F3324] focus:outline-none focus:border-[#D36135] focus:ring-1 focus:ring-[#D36135] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                      isSubmitting 
                        ? 'bg-[#0F3324]/80 cursor-wait' 
                        : 'bg-[#0F3324] hover:bg-[#164331] hover:shadow-xl cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#E07A5F]" />
                        <span>Sending Directly to {personalInfo.email}...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message Directly</span>
                        <Send className="w-4 h-4 text-[#E07A5F] group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>Direct inbox delivery to <strong className="text-[#0F3324]">{personalInfo.email}</strong> • No spam</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

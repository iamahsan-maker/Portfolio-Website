import React, { useState } from 'react';
import { ArrowUp, Github, Linkedin, Dribbble, Instagram, Sparkles, Send, Check } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    
    setSuccess(true);
    setTimeout(() => {
      setEmail('');
      setSuccess(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetEl = document.getElementById(id);
    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141311] text-[#FAF9F5] pt-20 pb-10 border-t border-[#2C2923] relative overflow-hidden select-none">
      
      {/* Decorative background grid elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-16">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          
          {/* Col 1: Large Brand Header */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="inline-flex items-center space-x-2 font-display font-black text-3xl md:text-4xl tracking-tighter"
            >
              <span>Haiders</span>
              <span className="w-3 h-3 rounded-full bg-accent" />
            </a>
            
            <p className="text-xs text-white/50 leading-relaxed font-sans max-w-sm">
              Crafting premium digital platforms, luxury branding guidelines, and fluid frontend code systems with absolute commitment to detail and design storytelling.
            </p>

            {/* Social links */}
            <div className="flex items-center space-x-3.5 pt-2">
              {[
                { icon: <Github size={16} />, href: 'https://github.com' },
                { icon: <Linkedin size={16} />, href: 'https://linkedin.com' },
                { icon: <Dribbble size={16} />, href: 'https://dribbble.com' },
                { icon: <Instagram size={16} />, href: 'https://instagram.com' },
              ].map((soc, i) => (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-white/10 text-white/60 hover:border-accent hover:text-accent hover:scale-110 active:scale-95 transition-all duration-300 bg-white/5"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Useful links */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">DIRECTORY</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans text-white/60">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Services', id: 'services' },
                { label: 'Experience', id: 'experience' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Blog', id: 'blog' },
                { label: 'Contact', id: 'contact' },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="hover:text-accent transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Newsletter Sub */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">THE LEDGER</h4>
            <p className="text-xs text-white/50 leading-relaxed font-sans">
              Subscribe to receive curated monthly notes about typography systems, UI developments, and digital products.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full">
              <input
                type="email"
                placeholder="Submit your email coords..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-12 py-3 text-xs bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-accent text-white"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-2 rounded-lg bg-accent text-black hover:bg-accent-hover transition-colors duration-300"
                aria-label="Subscribe"
              >
                {success ? <Check size={14} /> : <Send size={14} />}
              </button>
            </form>
            {success && (
              <span className="text-[10px] text-emerald-400 font-mono block mt-1">
                Coordinator subscribed successfully! Welcome to the ledger.
              </span>
            )}
          </div>

        </div>

        {/* Lower footer copyright & Back to top */}
        <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
            © {new Date().getFullYear()} Haiders • All rights reserved. Crafted for international innovators.
          </div>
          
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center space-x-2 text-[10px] font-mono text-white/60 hover:text-accent uppercase tracking-wider cursor-pointer"
          >
            <span>Retreat to Top</span>
            <div className="p-2 rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
              <ArrowUp size={12} className="transform group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}

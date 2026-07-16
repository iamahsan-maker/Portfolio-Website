import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Sparkles, Send, Github, Linkedin, Dribbble, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please declare your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'An email coordinate is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject cannot be empty.';
    if (!formData.message.trim()) newErrors.message = 'Please type a quick message.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate premium server-side endpoint submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success window after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-bg text-brand-text dark:text-white transition-colors duration-500 relative overflow-hidden border-t border-brand-border"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 right-1/10 w-[30vw] h-[30vw] rounded-full bg-accent/3 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center lg:text-left space-y-3 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-black/[0.03] dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full">
            <Sparkles size={11} className="text-accent" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-dark-gray/60 dark:text-white/60">LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight">
            Launch Your Next <span className="text-accent">Big Venture</span>
          </h2>
          <p className="text-brand-dark-gray/60 dark:text-white/50 max-w-sm lg:max-w-none text-xs font-sans">
            Reach out for full-time hires, creative consulting audits, or contract opportunities.
          </p>
        </div>

        {/* Form Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates details & Mock Map */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-display font-black leading-tight">
                Project Enquiries & <br />
                Art Commissions.
              </h3>
              
              <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 font-sans max-w-sm leading-relaxed">
                Have an idea, project blueprint, or corporate portfolio rebuild? Shoot a message, and I'll respond within 24 business hours.
              </p>

              {/* Coordinates list */}
              <div className="space-y-4 pt-4 font-sans text-xs">
                
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-accent">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-brand-dark-gray/40 dark:text-white/40 block">Email direct</span>
                    <a href="mailto:ahsanhaider406@gmail.com" className="font-semibold text-brand-text dark:text-white hover:text-accent transition-colors duration-300">
                      ahsanhaider406@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-accent">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-brand-dark-gray/40 dark:text-white/40 block">Telephone coordinates</span>
                    <span className="font-semibold text-brand-text dark:text-white">
                      Available upon request
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center text-accent">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono text-brand-dark-gray/40 dark:text-white/40 block">Location basis</span>
                    <span className="font-semibold text-brand-text dark:text-white">
                      Lahore, Pakistan
                    </span>
                  </div>
                </div>

              </div>

              {/* Availability Indicator */}
              <div className="p-4 bg-brand-card border border-brand-border rounded-2xl flex items-center space-x-3 max-w-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono text-brand-dark-gray/80 dark:text-white/70 uppercase tracking-wider">
                  Open for Internship Opportunities
                </span>
              </div>
            </div>

            {/* Google Map Integration Placeholder (Rendered beautifully in SVG) */}
            <div className="rounded-[2rem] overflow-hidden border border-brand-border relative aspect-[16/9] w-full bg-brand-card flex flex-col justify-center items-center shadow-inner group select-none">
              
              {/* Map grid aesthetic lines */}
              <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Map abstract locations coordinates */}
              <svg className="w-full h-full text-brand-dark-gray/20 dark:text-white/10 absolute inset-0">
                <circle cx="50%" cy="50%" r="35" className="stroke-accent fill-none stroke-[2] animate-pulse opacity-40" />
                <path d="M 0 60 Q 120 180 240 60 T 480 180" className="stroke-current fill-none stroke-[1]" />
                <path d="M 0 100 Q 150 20 300 150 T 600 100" className="stroke-current fill-none stroke-[1.5] stroke-dashed" />
              </svg>

              <div className="relative z-10 text-center space-y-2">
                <div className="p-3 bg-accent text-black rounded-full w-fit mx-auto shadow-md">
                  <Navigation size={18} className="transform rotate-45" />
                </div>
                <div className="text-xs font-mono uppercase tracking-widest font-semibold text-brand-text dark:text-white">Studio Office</div>
                <div className="text-[10px] text-brand-dark-gray/60 dark:text-white/40 font-mono">31.5204° N, 74.3587° E • Lahore, PK</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-brand-card p-8 md:p-10 rounded-[2.5rem] border border-brand-border shadow-md flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  {/* Name field */}
                  <div className="space-y-1.5 relative">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-brand-dark-gray/60 dark:text-white/40 block">
                      My full name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-5 py-3 rounded-2xl text-xs bg-brand-bg border text-brand-text dark:text-white focus:outline-none transition-all duration-300 ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-brand-border focus:border-accent'
                      }`}
                    />
                    {errors.name && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-1">
                        <AlertCircle size={10} />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-wider text-brand-dark-gray/60 dark:text-white/40 block">
                      Email Coordinates
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. johndoe@company.com"
                      className={`w-full px-5 py-3 rounded-2xl text-xs bg-brand-bg border text-brand-text dark:text-white focus:outline-none transition-all duration-300 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-brand-border focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-1">
                        <AlertCircle size={10} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-[10px] font-mono uppercase tracking-wider text-brand-dark-gray/60 dark:text-white/40 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g. Inbound SaaS Dashboard Design"
                      className={`w-full px-5 py-3 rounded-2xl text-xs bg-brand-bg border text-brand-text dark:text-white focus:outline-none transition-all duration-300 ${
                        errors.subject ? 'border-red-500 focus:border-red-500' : 'border-brand-border focus:border-accent'
                      }`}
                    />
                    {errors.subject && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-1">
                        <AlertCircle size={10} />
                        <span>{errors.subject}</span>
                      </div>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-wider text-brand-dark-gray/60 dark:text-white/40 block">
                      Project Specifications / Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Provide deep specifications or context on what you are looking to build..."
                      className={`w-full px-5 py-3 rounded-2xl text-xs bg-brand-bg border text-brand-text dark:text-white focus:outline-none transition-all duration-300 ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-brand-border focus:border-accent'
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center space-x-1 text-red-500 text-[10px] font-mono mt-1">
                        <AlertCircle size={10} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-black text-white dark:bg-white dark:text-black hover:bg-accent dark:hover:bg-accent dark:hover:text-black font-bold text-xs uppercase tracking-wider rounded-2xl transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg"
                    id="contact-form-submit-btn"
                  >
                    <span>{isSubmitting ? 'Transmitting coords...' : 'Send Message Coordinates'}</span>
                    <Send size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full w-fit mx-auto animate-bounce border border-emerald-500/20">
                    <CheckCircle2 size={40} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-black">Message Transmitted Successfully!</h3>
                    <p className="text-xs text-brand-dark-gray/60 dark:text-white/50 max-w-sm mx-auto font-sans">
                      Thank you. Your project inquiries have been routed. Ahsan Haider will be in touch shortly.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 border border-black/15 dark:border-white/10 rounded-full text-xs font-mono uppercase tracking-wider text-brand-dark-gray dark:text-white/80 hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    Send another query
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Briefcase, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '90870cbd-3f97-4e29-83ad-58c406d7f49b',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry / Opportunity',
          message: formData.message,
          from_name: formData.name
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please check your connection or reach out directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950/10 transition-colors relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-indigo-400/10 to-transparent dark:from-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-200/60 dark:border-indigo-800/40">
            <Sparkles className="w-3.5 h-3.5" />
            Inquiries & Opportunities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Available for React Native mobile and React Native Windows engineering roles, contract collaborations, or technical consultations.
          </p>
        </div>

        <div className={`grid lg:grid-cols-12 gap-8 items-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Direct Details Panel */}
          <div className="lg:col-span-5 glass-card-strong rounded-3xl p-6 sm:p-8 border border-gray-200/60 dark:border-gray-800">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:shahsujal2005@gmail.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all group premium-card"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">Direct Email</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    shahsujal2005@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">Location</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-purple-500/20">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-0.5">Availability</p>
                  <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    Open to Full-Time & Contract Opportunities
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                Professional Profiles
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/sujal1607shah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all hover-lift"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sujal-shah-810457290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all hover-lift"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7 glass-card-strong rounded-3xl p-6 sm:p-8 border border-gray-200/60 dark:border-gray-800">
            <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Fill out the form below or reach out directly at shahsujal2005@gmail.com.
            </p>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200/80 dark:border-red-800/50 text-red-700 dark:text-red-300 text-sm">
                {errorMessage}
              </div>
            )}
            
            {submitted ? (
              <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-2">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Thank you for reaching out. I will respond to your message promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg shadow-indigo-500/20 transition-all duration-300 hover-lift"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700 rounded-xl text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 hover-lift"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
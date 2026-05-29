import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const contactInfo = [
  {
    icon: '📍',
    title: 'Visit Us',
    lines: ['Iqra University, M9 Campus', 'Gadap Town, Karachi, Sindh 75030', 'Pakistan'],
    accent: '#003087'
  },
  {
    icon: '📧',
    title: 'Email Us',
    lines: ['admissions@iqra.edu.pk', 'www.iqra.edu.pk'],
    accent: '#0066CC'
  },
  {
    icon: '📞',
    title: 'Call Us',
    lines: ['+92 (021) 111-264-264', 'Mon – Fri: 9:00 AM – 5:00 PM'],
    accent: '#F0A500'
  },
  {
    icon: '🌐',
    title: 'Follow Us',
    lines: ['Facebook', 'Instagram', 'LinkedIn'],
    accent: '#7C3AED'
  }
];

const faqItems = [
  {
    q: 'What are the admission requirements?',
    a: 'Requirements vary by program. Generally you need a minimum of 50% marks in Intermediate/A-Levels for undergraduate and a relevant bachelor\'s degree for postgraduate programs.'
  },
  {
    q: 'When do admissions open?',
    a: 'Admissions typically open twice a year — Fall (July–September) and Spring (January–March). Check the university website for exact dates.'
  },
  {
    q: 'Is financial aid available?',
    a: 'Yes, Iqra University offers merit-based scholarships, need-based financial aid, and installment payment plans for eligible students.'
  },
  {
    q: 'Can I visit the campus before applying?',
    a: 'Absolutely! Campus tours are available on weekdays. Contact the admissions office to schedule a visit.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-page overflow-x-hidden font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy to-blue py-32 md:py-40 text-white">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md border border-white/10 uppercase mb-6"
          >
            M9 Campus · Get in Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-sm mb-6 !text-white"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Have questions about programs, admissions, or campus life? We're here to help you navigate your academic journey at Iqra University M9 Campus.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6E4F7] bg-tint px-4 py-1 text-xs font-bold tracking-wider text-blue uppercase mb-4">
              Reach Out
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              Ways to Connect
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Choose the most convenient way to reach us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,48,135,0.12)' }}
                style={{ borderTop: `4px solid ${item.accent}` }}
                className="bg-white border border-border rounded-2xl p-7 text-center transition-all duration-300 shadow-sm"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-extrabold text-navy mb-3">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-sm text-text-muted leading-relaxed">{line}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM + FAQ */}
      <section className="bg-page py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6E4F7] bg-tint px-4 py-1 text-xs font-bold tracking-wider text-blue uppercase mb-4">
              Send a Message
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              We'd Love to Hear From You
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Fill out the form and our admissions team will get back to you within 24 hours
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div {...fadeUp}>
              <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-border bg-page px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-border bg-page px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-page px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all cursor-pointer"
                  >
                    <option value="">Select a topic...</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="scholarships">Scholarships & Financial Aid</option>
                    <option value="campus">Campus Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-xl border border-border bg-page px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-navy to-blue text-white font-bold rounded-xl py-3.5 text-sm shadow-lg shadow-navy/20 transition-all duration-200 cursor-pointer hover:shadow-xl"
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message →'}
                </motion.button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm font-semibold text-green-600"
                  >
                    Thank you! We'll respond within 24 hours.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div {...fadeUp} className="flex flex-col gap-4">
              <h3 className="text-2xl font-extrabold text-navy mb-2">Frequently Asked Questions</h3>
              <p className="text-sm text-text-muted mb-4">Quick answers to common questions</p>

              {faqItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-tint/50 transition-colors"
                  >
                    <span className="text-sm font-bold text-navy pr-4">{item.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue text-lg flex-shrink-0"
                    >
                      ▼
                    </motion.span>
                  </button>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-sm text-text-muted leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CAMPUS LOCATION */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-amber-50 px-4 py-1 text-xs font-bold tracking-wider text-amber-700 uppercase mb-4">
              Campus Location
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Iqra University M9 Campus, Gadap Town, Karachi
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-2xl overflow-hidden border border-border shadow-lg"
            style={{ boxShadow: '0 8px 32px rgba(0,48,135,0.1)' }}
          >
            <iframe
              title="Iqra University M9 Campus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8!2d67.0891!3d24.9343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9a5c5c5c5b%3A0x1234567890abcdef!2sIqra%20University%20M9%20Campus!5e0!3m2!1sen!2spk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="bg-page pb-24 md:pb-32 pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="bg-gradient-to-br from-navy to-blue rounded-3xl py-12 md:py-16 px-6 md:px-12 text-center text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 !text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
                Explore our programs and find the perfect career path for your future.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/programs"
                    className="inline-flex items-center justify-center bg-gold hover:bg-yellow-500 text-text font-bold rounded-[10px] px-9 py-3.5 shadow-lg shadow-gold/20 transition-all duration-200"
                  >
                    Explore Programs
                  </Link>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-[10px] px-8 py-3 transition-all duration-200"
                  >
                    About Us
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

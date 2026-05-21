import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#degrees', label: 'Programs' },
  { href: '#roadmap', label: 'Roadmaps' },
  { href: '#careers', label: 'Careers' },
  { href: '#internship', label: 'Internship Guide' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3 shadow-2xl shadow-black/20' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-display text-sm font-bold text-white shadow-lg shadow-cyan-500/30 transition group-hover:shadow-cyan-500/50">
            IQ
          </span>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold leading-none text-white">IQRA Career Roadmap</p>
            <p className="font-accent mt-0.5 text-[10px] tracking-[0.2em] text-cyan-400/90 uppercase">Iqra University · M9</p>
          </div>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#degrees"
            className="btn-glow ml-3 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            Start Journey
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-400 hover:text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-strong border-t border-white/5 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
              <a href="#degrees" onClick={() => setMobileOpen(false)} className="btn-glow mt-2 rounded-full py-3 text-center text-sm font-semibold text-white">
                Start Journey
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

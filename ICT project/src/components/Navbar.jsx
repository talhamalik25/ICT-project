import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b-2 border-[#D6E4F7] bg-white"
      style={{ boxShadow: '0 2px 12px rgba(0,48,135,0.08)' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="">
          <img src="\assets\logo.png" alt="logo" className="h-10 w-10" />
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group px-3 py-2 text-sm font-medium text-[#0A0A1A] transition-all duration-250 hover:text-[#003087]"
              style={{ borderBottom: '2px solid transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#003087';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/programs" className="btn-nav ml-3">
            Start Journey
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-[#4A5568] hover:text-[#003087] lg:hidden"
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
            className="border-t border-[#D6E4F7] bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-[#4A5568] transition-all hover:bg-[#EBF3FF] hover:text-[#003087]"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/programs" onClick={() => setMobileOpen(false)} className="btn-nav mt-2 text-center">
                Start Journey
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

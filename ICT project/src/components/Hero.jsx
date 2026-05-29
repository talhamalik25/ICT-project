import { motion } from 'framer-motion';
import DashboardPreview from './ui/DashboardPreview';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-pad relative overflow-hidden pt-28"
      style={{ background: 'linear-gradient(135deg, #F4F7FC 0%, #EBF3FF 50%, #F4F7FC 100%)' }}
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 z-0 h-[500px] w-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(0,102,204,0.08) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1 }}
            className="inline-flex items-center gap-2 rounded-lg border border-[#D6E4F7] bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-[#0066CC]"
          >
            M9 Campus · New Admissions
          </motion.span>

          <motion.h1
            className="mt-6 font-extrabold leading-[1.12] tracking-tight text-[#003087]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.6 }}
          >
            Build Your Future with the{' '}
            <span className="text-[#0066CC]">Right Career</span>{' '}
            <span className="text-[#F0A500]">Roadmap</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[#4A5568] sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4 }}
          >
            Explore your degree, specialization, semester roadmap, career opportunities, internships, and future salary guidance.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.55 }}
          >
            <a href="#degrees" className="btn-primary">
              Explore Programs
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#roadmap" className="btn-secondary">
              View Roadmap
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-8 border-t border-[#D6E4F7] pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7 }}
          >
            {[
              { n: '6', l: 'Programs' },
              { n: '15+', l: 'Career Tracks' },
              { n: '8', l: 'Semesters' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-extrabold text-[#003087]">{s.n}</p>
                <p className="text-xs text-[#4A5568]">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}

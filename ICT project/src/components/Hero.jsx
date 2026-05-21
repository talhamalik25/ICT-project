import { motion } from 'framer-motion';
import DashboardPreview from './ui/DashboardPreview';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            M9 Campus · New Admissions
          </motion.span>

          <motion.h1
            className="font-display mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.45, duration: 0.7 }}
          >
            Build Your Future with the{' '}
            <span className="gradient-text">Right Career Roadmap</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
          >
            Explore your degree, specialization, semester roadmap, career opportunities, internships, and future salary guidance — all in one premium student platform.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.75 }}
          >
            <a href="#degrees" className="btn-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white">
              Explore Programs
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-white/5 px-7 py-3.5 text-sm font-medium text-slate-300 backdrop-blur transition hover:border-cyan-500/40 hover:text-white"
            >
              View Roadmap
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-6 border-t border-white/5 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.95 }}
          >
            {[
              { n: '7', l: 'Programs' },
              { n: '40+', l: 'Career Tracks' },
              { n: '8', l: 'Semesters' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-2xl font-bold text-cyan-400">{s.n}</p>
                <p className="text-xs text-slate-500">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}

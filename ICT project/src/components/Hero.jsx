import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section-pad relative overflow-hidden pt-32"
      style={{ background: 'linear-gradient(135deg, #F4F7FC 0%, #EBF3FF 50%, #F4F7FC 100%)' }}
    >
      <div
        className="pointer-events-none absolute -right-40 top-0 z-0 h-[600px] w-[600px]"
        style={{ background: 'radial-gradient(circle, rgba(0,102,204,0.12) 0%, transparent 60%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 z-0 h-[500px] w-[500px]"
        style={{ background: 'radial-gradient(circle, rgba(240,165,0,0.08) 0%, transparent 60%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl items-center gap-12 px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#D6E4F7] bg-white px-5 py-2 text-xs font-bold tracking-wider text-[#0066CC] shadow-sm"
        >
          🎓 Iqra University · M9 Campus
        </motion.span>

        <motion.h1
          className="mt-6 font-extrabold leading-tight tracking-tight text-[#003087] mx-auto"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.6 }}
        >
          Navigate Your
          <br />
          <span className="text-[#0066CC]">Academic Journey</span> with
          <br />
          <span className="text-[#F0A500]">Confidence</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-[#4A5568] sm:text-lg lg:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        >
          Explore degree programs, semester roadmaps, career paths, internships, and salary insights — all in one place, tailored for Iqra University M9 Campus students.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.55, duration: 0.5 }}
        >
          <Link to="/programs" className="btn-primary text-base">
            Explore Programs
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link to="/about" className="btn-secondary text-base">
            Learn More
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-10 border-t border-[#D6E4F7]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7, duration: 0.5 }}
        >
          {[
            { n: '6+', l: 'Programs' },
            { n: '15+', l: 'Career Tracks' },
            { n: '8', l: 'Semesters' },
          ].map((s, i) => (
            <div key={s.l} className="flex flex-col items-center gap-1">
              <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.8 + i * 0.1, duration: 0.4 }}
                className="text-3xl sm:text-4xl font-extrabold text-[#003087]"
              >
                {s.n}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.9 + i * 0.1, duration: 0.4 }}
                className="text-sm font-semibold text-[#4A5568]"
              >
                {s.l}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

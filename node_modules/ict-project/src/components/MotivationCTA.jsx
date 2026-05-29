import { motion } from 'framer-motion';

export default function MotivationCTA() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #003087, #0066CC)' }}
    >
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full"
        style={{ background: 'rgba(255,255,255,0.05)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full"
        style={{ background: 'rgba(255,255,255,0.05)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <blockquote className="text-lg italic text-white/80 sm:text-xl">
            &ldquo;Your future starts here — one roadmap, infinite possibilities.&rdquo;
          </blockquote>
          <h2 className="mt-8 text-3xl font-extrabold text-white sm:text-4xl">Ready to Start Your Journey?</h2>
          <a
            href="#degrees"
            className="mt-8 inline-flex rounded-[10px] bg-[#F0A500] px-10 py-4 text-base font-bold text-[#0A0A1A] transition-all duration-250 hover:bg-[#FFD166]"
          >
            Explore Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
}

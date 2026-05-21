import { motion } from 'framer-motion';

export default function MotivationCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 p-10 text-center sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/10" />
          <p className="font-accent relative text-lg italic text-slate-400">
            &ldquo;Your future starts here — one roadmap, infinite possibilities.&rdquo;
          </p>
          <h2 className="font-display relative mt-6 text-3xl font-bold text-white sm:text-4xl">
            Ready to <span className="gradient-text">Start Journey</span>?
          </h2>
          <a href="#degrees" className="btn-glow relative mt-8 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-white">
            Explore Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle }) {
  return (
    <motion.div
      className="mb-12 md:mb-14"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1 text-[11px] font-bold tracking-[0.15em] text-cyan-400 uppercase">
          <span className="h-1 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
          {badge}
        </span>
      )}
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </motion.div>
  );
}

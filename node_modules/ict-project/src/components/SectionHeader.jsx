import { motion } from 'framer-motion';

export default function SectionHeader({ badge, title, subtitle, light = false }) {
  return (
    <motion.div
      className="mb-12 md:mb-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className={light ? 'section-label section-label-light' : 'section-label'}>{badge}</span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.5rem] mb-2 ${
          light ? 'text-white' : 'text-[#003087]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base leading-relaxed font-normal ${light ? 'text-[#93C5FD]' : 'text-[#4A5568]'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

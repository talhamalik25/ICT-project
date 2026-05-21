import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative h-16 w-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]" />
      </motion.div>
      <motion.p
        className="font-display mt-8 text-lg font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        IQRA Career Roadmap
      </motion.p>
      <motion.p
        className="font-accent mt-1 text-xs tracking-[0.25em] text-cyan-500/80 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        M9 Campus
      </motion.p>
    </motion.div>
  );
}

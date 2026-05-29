import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F4F7FC]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.45 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="relative h-14 w-14"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#D6E4F7]" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#003087]" />
      </motion.div>
      <p className="mt-6 text-lg font-extrabold text-[#003087]">IQRA Career Roadmap</p>
      <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-[#0066CC] uppercase">M9 Campus</p>
    </motion.div>
  );
}

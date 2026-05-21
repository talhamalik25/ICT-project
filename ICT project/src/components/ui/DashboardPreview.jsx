import { motion } from 'framer-motion';

const miniBars = [40, 65, 45, 80, 55, 70];

export default function DashboardPreview() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto lg:mx-0"
      initial={{ opacity: 0, x: 40, rotateY: -8 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ delay: 2.6, duration: 0.8 }}
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/20 blur-2xl animate-pulse-glow" />
      <div className="glass-strong neon-border relative overflow-hidden rounded-2xl p-4 sm:p-5 animate-float">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
        <div className="relative flex items-center justify-between border-b border-white/5 pb-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-accent text-[10px] tracking-widest text-cyan-400/80 uppercase">Career Dashboard</span>
        </div>

        <div className="relative mt-4 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: 'Program', value: 'BSCS', color: 'text-cyan-400' },
            { label: 'Semester', value: '4 / 8', color: 'text-blue-400' },
            { label: 'Track', value: 'AI', color: 'text-violet-400' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-slate-900/60 px-2 py-2.5 sm:px-3 sm:py-3">
              <p className="text-[9px] text-slate-500 uppercase sm:text-[10px]">{item.label}</p>
              <p className={`font-display text-sm font-bold sm:text-base ${item.color}`}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-4 rounded-xl bg-slate-900/50 p-3">
          <p className="text-[10px] font-medium text-slate-400">Learning path progress</p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              className="h-full rounded-full roadmap-line-h"
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ delay: 3, duration: 1.2, ease: 'easeOut' }}
            />
          </div>
          <div className="mt-3 flex items-end justify-between gap-1 h-16">
            {miniBars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-cyan-600/80 to-cyan-400/40"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 3.2 + i * 0.08, duration: 0.5 }}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-3 space-y-2">
          {['Programming Fundamentals', 'Data Structures', 'Machine Learning Elective'].map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.4 + i * 0.15 }}
              className="flex items-center gap-2 rounded-lg bg-slate-800/40 px-3 py-2"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-cyan-500/20 text-[10px] text-cyan-400">
                {i + 1}
              </span>
              <span className="text-xs text-slate-300">{c}</span>
              {i < 2 && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400" />}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute -right-2 -top-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 shadow-lg shadow-cyan-500/20"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <p className="text-[10px] text-cyan-300">+24% demand</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

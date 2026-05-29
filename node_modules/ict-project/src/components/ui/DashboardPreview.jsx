import { motion } from 'framer-motion';

const miniBars = [40, 65, 45, 80, 55, 70];

export default function DashboardPreview() {
  return (
    <motion.div
      className="relative z-10 w-full max-w-lg mx-auto lg:mx-0"
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.4, duration: 0.7 }}
    >
      <div
        className="relative overflow-hidden rounded-[20px] border border-[#D6E4F7] bg-white p-7"
        style={{ boxShadow: '0 20px 60px rgba(0,48,135,0.15)' }}
      >
        <div
          className="absolute left-0 right-0 top-0 h-1 rounded-t-[20px]"
          style={{ background: 'linear-gradient(90deg, #003087, #0066CC)' }}
        />

        <motion.div
          className="absolute -right-1 top-6 rounded-full bg-[#003087] px-3 py-1.5 text-[0.7rem] font-bold text-white"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          +24% demand
        </motion.div>

        <div className="mt-2 flex items-center justify-between border-b border-[#D6E4F7] pb-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6E4F7]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6E4F7]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#D6E4F7]" />
          </div>
          <span className="text-[0.7rem] font-bold tracking-[0.15em] text-[#0066CC] uppercase">Your Roadmap</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: 'Program', value: 'BSCS' },
            { label: 'Semester', value: '4 / 8' },
            { label: 'Track', value: 'AI' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-[#EBF3FF] px-2 py-2.5 sm:px-3">
              <p className="text-[9px] font-semibold text-[#4A5568] uppercase sm:text-[10px]">{item.label}</p>
              <p className="text-sm font-bold text-[#003087] sm:text-base">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-[#D6E4F7] bg-[#F4F7FC] p-3">
          <p className="text-[10px] font-semibold text-[#4A5568]">Learning path progress</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#D6E4F7]">
            <motion.div
              className="h-full rounded-[3px]"
              style={{ background: 'linear-gradient(90deg, #003087, #0066CC)' }}
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ delay: 2.8, duration: 1 }}
            />
          </div>
          <div className="mt-3 flex h-14 items-end justify-between gap-1">
            {miniBars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t"
                style={{ background: 'linear-gradient(180deg, #0066CC, #003087)' }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 3 + i * 0.07, duration: 0.45 }}
              />
            ))}
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {['Programming Fundamentals', 'Data Structures', 'ML Elective'].map((c, i) => (
            <div
              key={c}
              className="flex items-center gap-2 rounded-md border-l-[3px] border-l-[#0066CC] bg-[#F4F7FC] px-3 py-2"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-[#EBF3FF] text-[10px] font-bold text-[#003087]">
                {i + 1}
              </span>
              <span className="text-xs text-[#4A5568]">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { getDegreeById } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';
import CircularProgress from './ui/CircularProgress';

function formatPKR(n) {
  if (n >= 100000) return `${(n / 100000).toFixed(1)}L`;
  return `${Math.round(n / 1000)}K`;
}

function SalaryBar({ data, maxVal, gradient, delay }) {
  const mid = (data.min + data.max) / 2;
  const width = (mid / maxVal) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium text-slate-300">{data.label}</span>
        <span className="text-cyan-400 font-mono text-xs sm:text-sm">
          {data.min.toLocaleString()} – {data.max.toLocaleString()}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-800/90">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default function SalaryInsights() {
  const { selectedDegreeId } = useJourney();
  const degree = getDegreeById(selectedDegreeId);

  const defaultSalary = {
    fresh: { min: 40000, max: 100000, label: 'Fresh Graduate' },
    mid: { min: 120000, max: 280000, label: 'Mid-Level' },
    senior: { min: 350000, max: 750000, label: 'Senior Level' },
  };

  const data = degree?.salary || defaultSalary;
  const maxVal = data.senior.max;

  const tiers = [
    { key: 'fresh', data: data.fresh, pct: 35, color: '#22d3ee', gradient: 'from-cyan-500 to-teal-400' },
    { key: 'mid', data: data.mid, pct: 62, color: '#3b82f6', gradient: 'from-blue-500 to-indigo-500' },
    { key: 'senior', data: data.senior, pct: 88, color: '#a78bfa', gradient: 'from-violet-500 to-purple-500' },
  ];

  return (
    <section id="salary" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Compensation"
          title="Salary insights"
          subtitle={
            degree
              ? `Pakistan market estimates · ${degree.name}`
              : 'Estimated monthly PKR ranges — select a program for tailored data'
          }
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong neon-border space-y-8 rounded-2xl p-6 sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Animated bar comparison</p>
            {tiers.map((t, i) => (
              <SalaryBar key={t.key} data={t.data} maxVal={maxVal} gradient={t.gradient} delay={i * 0.1} />
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {tiers.map((t, i) => (
              <motion.div
                key={t.key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass flex flex-col items-center rounded-2xl p-6"
              >
                <CircularProgress
                  value={t.pct}
                  label={t.data.label}
                  sublabel={`${formatPKR(t.data.min)} – ${formatPKR(t.data.max)} / mo`}
                  color={t.color}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.key}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <p className="text-xs font-semibold uppercase text-slate-500">{t.data.label}</p>
              <p className="font-display mt-2 text-2xl font-bold gradient-text">
                {formatPKR(t.data.min)} – {formatPKR(t.data.max)}
              </p>
              <p className="mt-1 text-xs text-slate-500">PKR per month · Pakistan</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-600">
          Illustrative ranges for portfolio guidance — not official university or employer guarantees.
        </p>
      </div>
    </section>
  );
}

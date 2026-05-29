import { motion } from 'framer-motion';
import { getDegreeById } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';
import CircularProgress from './ui/CircularProgress';

function formatPKRFull(min, max) {
  return `PKR ${min.toLocaleString()} – ${max.toLocaleString()} / month`;
}

function SalaryBar({ data, maxVal, delay }) {
  const mid = (data.min + data.max) / 2;
  const width = (mid / maxVal) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="font-medium text-[#93C5FD]">{data.label}</span>
        <span className="text-xs font-extrabold text-[#F0A500] sm:text-sm">{formatPKRFull(data.min, data.max)}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #F0A500, #FFD166)' }}
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: delay + 0.1 }}
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
    { key: 'fresh', data: data.fresh, pct: 35 },
    { key: 'mid', data: data.mid, pct: 62 },
    { key: 'senior', data: data.senior, pct: 88 },
  ];

  return (
    <section
      id="salary"
      className="section-pad"
      style={{ background: 'linear-gradient(135deg, #003087 0%, #001A5C 100%)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Compensation"
          title="Salary insights"
          subtitle={
            degree
              ? `Pakistan market estimates · ${degree.name}`
              : 'Estimated monthly PKR ranges — select a program for tailored data'
          }
          light
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 rounded-2xl border border-white/15 bg-white/[0.08] p-6 sm:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-[#93C5FD]">Salary comparison</p>
            {tiers.map((t, i) => (
              <SalaryBar key={t.key} data={t.data} maxVal={maxVal} delay={i * 0.1} />
            ))}
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {tiers.map((t, i) => (
              <motion.div
                key={t.key}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center rounded-2xl border border-white/15 bg-white/[0.08] p-6"
              >
                <CircularProgress
                  value={t.pct}
                  label={t.data.label}
                  sublabel={formatPKRFull(t.data.min, t.data.max)}
                  color="#F0A500"
                  light
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
              className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 text-center transition-all duration-250"
            >
              <p className="text-xs font-semibold uppercase text-[#93C5FD]">{t.data.label}</p>
              <p className="mt-2 text-xl font-extrabold text-[#F0A500] sm:text-2xl">
                {formatPKRFull(t.data.min, t.data.max)}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[#93C5FD]/80">
          Illustrative ranges for guidance — not official university or employer guarantees.
        </p>
      </div>
    </section>
  );
}

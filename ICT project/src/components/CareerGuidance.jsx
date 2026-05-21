import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getDegreeById, getSpecialization } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';

function demandPercent(demand) {
  if (demand.includes('Very')) return 92;
  if (demand.includes('High')) return 78;
  if (demand.includes('Growing') || demand.includes('Emerging')) return 65;
  return 55;
}

export default function CareerGuidance() {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);
  const { selectedDegreeId, selectedSpecId } = useJourney();
  const degree = getDegreeById(selectedDegreeId);
  const spec = getSpecialization(selectedDegreeId, selectedSpecId);
  const salary = degree?.salary;

  const cards = spec
    ? spec.jobs.map((role, i) => ({
        role,
        level: i === 0 ? 'Entry' : i === spec.jobs.length - 1 ? 'Senior' : 'Growth',
        demand: spec.industryDemand,
        demandPct: demandPercent(spec.industryDemand),
        skills: spec.skills.slice(0, 4),
        growth: spec.futureScope,
        salaryRange:
          i === 0
            ? `PKR ${salary?.fresh.min.toLocaleString()} – ${salary?.fresh.max.toLocaleString()}`
            : i >= 2
              ? `PKR ${salary?.senior.min.toLocaleString()}+`
              : `PKR ${salary?.mid.min.toLocaleString()} – ${salary?.mid.max.toLocaleString()}`,
      }))
    : [];

  const scroll = (dir) => {
    const next = Math.max(0, Math.min(cards.length - 1, index + dir));
    setIndex(next);
    scrollRef.current?.children[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  return (
    <section id="careers" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Careers"
          title="Career opportunities"
          subtitle="Premium role cards with demand, skills, salary bands, and growth outlook"
        />

        {!spec ? (
          <div className="glass rounded-2xl py-16 text-center text-slate-400">
            Select a specialization to explore career paths
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-slate-400">
                Track: <span className="font-medium text-cyan-400">{spec.name}</span>
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={() => scroll(-1)} className="glass rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white" disabled={index === 0}>
                  ←
                </button>
                <button type="button" onClick={() => scroll(1)} className="glass rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white" disabled={index >= cards.length - 1}>
                  →
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
            >
              {cards.map((card, i) => (
                <motion.div
                  key={card.role}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-strong neon-border w-[min(100%,340px)] shrink-0 snap-center rounded-2xl p-6 sm:w-[360px]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full bg-cyan-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase text-cyan-400">
                      {card.level}
                    </span>
                    <span className="text-xs text-slate-500">{i + 1}/{cards.length}</span>
                  </div>
                  <h3 className="font-display mt-4 text-xl font-bold text-white">{card.role}</h3>
                  <p className="mt-2 text-sm text-cyan-400/90">{card.salaryRange} / mo</p>

                  <div className="mt-5">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Industry demand</span>
                      <span className="font-semibold text-emerald-400">{card.demand}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${card.demandPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                      />
                    </div>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase text-slate-500">Required skills</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {card.skills.map((s) => (
                      <span key={s} className="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-slate-400 line-clamp-3">{card.growth}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass mt-8 rounded-2xl p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Full career ladder</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {spec.jobs.map((job, i) => (
                  <div key={job} className="flex items-center gap-2">
                    <span className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 text-sm font-medium text-white">
                      {job}
                    </span>
                    {i < spec.jobs.length - 1 && <span className="text-cyan-600">→</span>}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

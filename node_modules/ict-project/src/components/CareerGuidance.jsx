import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getDegreeById, getSpecialization } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';

const ROLE_DESCRIPTIONS = {
  'Cloud Intern':
    "Start your cloud journey with hands-on AWS/Azure exposure in local tech startups and enterprise IT teams.",
  'Cloud Engineer':
    "Design and manage scalable infrastructure for Pakistan's growing fintech and e-commerce sector.",
  'Solutions Architect':
    'Lead enterprise-level cloud transformations at top-tier firms and MNCs across Pakistan.',
};

function demandPercent(demand) {
  if (demand.includes('Very')) return 92;
  if (demand.includes('High')) return 78;
  if (demand.includes('Growing') || demand.includes('Emerging')) return 65;
  return 55;
}

function getRoleDescription(role, fallback) {
  return ROLE_DESCRIPTIONS[role] || fallback;
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
        description: getRoleDescription(role, spec.futureScope),
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

  const levelBadgeClass = (level) => {
    if (level === 'Entry') return 'badge-entry';
    if (level === 'Senior') return 'badge-senior';
    return 'badge-growth';
  };

  return (
    <section id="careers" className="section-pad bg-[#F4F7FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Careers"
          title="Career opportunities"
          subtitle="Role cards with demand, skills, salary bands, and growth outlook"
        />

        {!spec ? (
          <div className="card py-16 text-center text-[#4A5568]">Select a specialization to explore career paths</div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-[#4A5568]">
                Track: <span className="font-semibold text-[#003087]">{spec.name}</span>
              </p>
              <div className="flex gap-2">
                <button type="button" onClick={() => scroll(-1)} className="btn-arrow" disabled={index === 0}>
                  ←
                </button>
                <button type="button" onClick={() => scroll(1)} className="btn-arrow" disabled={index >= cards.length - 1}>
                  →
                </button>
              </div>
            </div>

            <div ref={scrollRef} className="scrollbar-hide flex snap-x gap-5 overflow-x-auto pb-4">
              {cards.map((card, i) => {
                const veryHigh = card.demand.includes('Very');
                return (
                  <motion.div
                    key={card.role}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`w-[min(100%,340px)] shrink-0 snap-center rounded-2xl border bg-white p-6 sm:w-[360px] transition-all ${
                      i === index
                        ? 'border-2 border-[#003087] shadow-[0_8px_32px_rgba(0,48,135,0.15)] border-l-[5px]'
                        : 'border border-[#D6E4F7]'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${veryHigh ? 'badge-very-high' : 'badge-high'}`}>
                        {card.demand} demand
                      </span>
                      <span className="text-xs text-[#4A5568]">
                        {i + 1}/{cards.length}
                      </span>
                    </div>
                    <span className={`mt-3 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${levelBadgeClass(card.level)}`}>
                      {card.level}
                    </span>
                    <h3 className="mt-1 text-xl font-extrabold text-[#003087]">{card.role}</h3>
                    <p className="mt-2 text-sm font-extrabold text-[#003087]">{card.salaryRange} / month</p>

                    <div className="mt-5">
                      <div className="flex justify-between text-xs text-[#4A5568]">
                        <span>Industry demand</span>
                        <span className="font-semibold text-[#003087]">{card.demandPct}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#D6E4F7]">
                        <motion.div
                          className="h-full rounded-full progress-bar-blue"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${card.demandPct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#4A5568]">{card.description}</p>

                    <p className="mt-5 text-xs font-semibold uppercase text-[#4A5568]">Required skills</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {card.skills.map((s) => (
                        <span key={s} className="chip-subject rounded-md px-2 py-1 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="card mt-8 p-6">
              <p className="section-label">Full career ladder</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {spec.jobs.map((job, i) => (
                  <div key={job} className="flex items-center gap-2">
                    <span className="rounded-lg border border-[#D6E4F7] bg-[#EBF3FF] px-3 py-2 text-sm font-medium text-[#0A0A1A]">
                      {job}
                    </span>
                    {i < spec.jobs.length - 1 && <span className="text-[#0066CC]">→</span>}
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

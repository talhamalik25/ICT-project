import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getDegreeById } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';

export default function SpecializationSelection() {
  const scrollRef = useRef(null);
  const { selectedDegreeId, selectedSpecId, selectSpecialization } = useJourney();
  const degree = getDegreeById(selectedDegreeId);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  const handleSelect = (id) => {
    selectSpecialization(id);
    setTimeout(() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' }), 150);
  };

  return (
    <section id="specializations" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialization"
          title="Pick your career track"
          subtitle={
            degree
              ? `Connected pathways under ${degree.name} — swipe to explore`
              : 'Select a degree program first to reveal specialization tracks'
          }
        />

        <AnimatePresence mode="wait">
          {!degree ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass flex flex-col items-center rounded-2xl border border-dashed border-slate-700/50 py-20"
            >
              <span className="text-5xl opacity-50">◇</span>
              <p className="mt-4 text-slate-400">Choose a degree to connect your roadmap</p>
              <a href="#degrees" className="mt-6 text-sm font-medium text-cyan-400 hover:text-cyan-300">
                ← Browse programs
              </a>
            </motion.div>
          ) : (
            <motion.div key={degree.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-4 hidden items-center justify-end gap-2 sm:flex">
                <button type="button" onClick={() => scroll(-1)} className="glass rounded-lg px-3 py-2 text-slate-400 hover:text-white" aria-label="Previous">
                  ←
                </button>
                <button type="button" onClick={() => scroll(1)} className="glass rounded-lg px-3 py-2 text-slate-400 hover:text-white" aria-label="Next">
                  →
                </button>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-r from-[#020617] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-12 bg-gradient-to-l from-[#020617] to-transparent" />

                <div
                  ref={scrollRef}
                  className="scrollbar-hide flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
                >
                  {degree.specializations.map((spec, i) => {
                    const selected = selectedSpecId === spec.id;
                    return (
                      <motion.button
                        key={spec.id}
                        type="button"
                        onClick={() => handleSelect(spec.id)}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        whileHover={{ y: -4 }}
                        className={`snap-center shrink-0 w-[min(100%,280px)] sm:w-[300px] rounded-2xl p-5 text-left transition-all ${
                          selected
                            ? 'glass-strong ring-2 ring-cyan-400/50 shadow-lg shadow-cyan-500/10'
                            : 'glass card-lift'
                        }`}
                      >
                        {i < degree.specializations.length - 1 && (
                          <span className="absolute -right-2 top-1/2 hidden h-0.5 w-4 roadmap-line-h sm:block" style={{ left: '100%' }} />
                        )}
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 text-2xl">
                            {spec.icon}
                          </span>
                          <div>
                            <h3 className="font-display font-semibold text-white">{spec.name}</h3>
                            <span
                              className={`mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                                spec.industryDemand.includes('Very')
                                  ? 'bg-emerald-500/15 text-emerald-400'
                                  : 'bg-amber-500/15 text-amber-400'
                              }`}
                            >
                              {spec.industryDemand} demand
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-slate-400 line-clamp-2">{spec.description}</p>
                        {selected && (
                          <motion.span
                            layoutId="spec-indicator"
                            className="mt-4 block text-xs font-semibold text-cyan-400"
                          >
                            Active track →
                          </motion.span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 hidden h-1 overflow-hidden rounded-full bg-slate-800 sm:block">
                <motion.div
                  className="h-full roadmap-line-h"
                  initial={{ width: '0%' }}
                  animate={{
                    width: `${((degree.specializations.findIndex((s) => s.id === selectedSpecId) + 1) / degree.specializations.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

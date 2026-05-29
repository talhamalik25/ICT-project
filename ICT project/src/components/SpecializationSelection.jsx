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
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  const handleSelect = (id) => {
    selectSpecialization(id);
    setTimeout(() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' }), 150);
  };

  return (
    <section id="specializations" className="section-pad bg-[#F4F7FC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialization"
          title="Pick your career track"
          subtitle={
            degree
              ? `Connected pathways under ${degree.name}`
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
              className="card flex flex-col items-center border-dashed py-20"
            >
              <p className="text-[#4A5568]">Choose a degree to connect your roadmap</p>
              <a href="#degrees" className="mt-6 text-sm font-semibold text-[#003087] hover:underline">
                ← Browse programs
              </a>
            </motion.div>
          ) : (
            <motion.div key={degree.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-4 hidden justify-end gap-2 sm:flex">
                <button type="button" onClick={() => scroll(-1)} className="btn-arrow">
                  ←
                </button>
                <button type="button" onClick={() => scroll(1)} className="btn-arrow">
                  →
                </button>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-[#F4F7FC] to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-[#F4F7FC] to-transparent" />

                <div ref={scrollRef} className="scrollbar-hide flex gap-4 overflow-x-auto pb-4 snap-x">
                  {degree.specializations.map((spec, i) => {
                    const selected = selectedSpecId === spec.id;
                    const veryHigh = spec.industryDemand.includes('Very');
                    return (
                      <motion.button
                        key={spec.id}
                        type="button"
                        onClick={() => handleSelect(spec.id)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`snap-center shrink-0 w-[min(100%,280px)] sm:w-[300px] rounded-2xl p-5 text-left transition-all duration-250 ${
                          selected
                            ? 'border-2 border-[#003087] bg-white shadow-[0_8px_32px_rgba(0,48,135,0.15)] border-l-[5px]'
                            : 'card'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="icon-box flex h-12 w-12 items-center justify-center text-2xl text-white">
                            {spec.icon}
                          </span>
                          <div>
                            <h3 className="font-bold text-[#003087]">{spec.name}</h3>
                            <span
                              className={`mt-1 inline-block px-2 py-0.5 text-[10px] font-bold uppercase ${
                                veryHigh ? 'badge-very-high' : 'badge-high'
                              }`}
                            >
                              {spec.industryDemand} demand
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-[#4A5568] line-clamp-2">{spec.description}</p>
                        {selected && <p className="mt-3 text-xs font-semibold text-[#0066CC]">Active track →</p>}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-[#D6E4F7]">
                <motion.div
                  className="h-full progress-bar-blue rounded-full"
                  animate={{
                    width: `${((degree.specializations.findIndex((s) => s.id === selectedSpecId) + 1) / Math.max(degree.specializations.length, 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

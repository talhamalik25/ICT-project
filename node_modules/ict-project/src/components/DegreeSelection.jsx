import { motion } from 'framer-motion';
import { getOrderedDegrees } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';

export default function DegreeSelection() {
  const { selectedDegreeId, selectDegree } = useJourney();
  const degreeList = getOrderedDegrees();

  const handleSelect = (id) => {
    selectDegree(id);
    setTimeout(() => document.getElementById('specializations')?.scrollIntoView({ behavior: 'smooth' }), 120);
  };

  return (
    <section id="degrees" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Programs"
          title="Choose Your Degree Program"
          subtitle="Select a program to unlock specializations, interactive roadmaps, and personalized career insights."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {degreeList.map((degree, i) => {
            const selected = selectedDegreeId === degree.id;
            return (
              <motion.button
                key={degree.id}
                type="button"
                onClick={() => handleSelect(degree.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06 }}
                className={`card group relative w-full p-6 text-left ${selected ? 'card-selected !translate-y-0' : ''}`}
              >
                <span className="icon-box mb-5 inline-flex h-14 w-14 items-center justify-center text-2xl text-white transition group-hover:scale-105">
                  {degree.icon}
                </span>
                <h3 className="text-lg font-bold text-[#003087]">{degree.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{degree.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#0066CC] opacity-0 transition group-hover:opacity-100">
                  {selected ? 'Selected ✓' : 'Select program →'}
                </span>
                {selected && (
                  <span className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#003087] text-xs font-bold text-white">
                    ✓
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
    <section id="degrees" className="relative py-24 sm:py-32">
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
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className={`card-lift glass group relative w-full rounded-2xl p-6 text-left ${
                  selected ? 'ring-2 ring-cyan-400/50 bg-cyan-500/5' : ''
                }`}
              >
                <motion.span
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${degree.color} text-2xl shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {degree.icon}
                </motion.span>
                <h3 className="font-display text-lg font-semibold text-white">{degree.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{degree.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  {selected ? 'Selected ✓' : 'Select program →'}
                </span>
                {selected && (
                  <span className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white shadow-lg shadow-cyan-500/40">
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

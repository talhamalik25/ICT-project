import { useState } from 'react';
import { motion } from 'framer-motion';
import { getDegreeById } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';

const steps = [
  { key: 'skills', title: 'Skills before internship', icon: '⚡', field: 'skills' },
  { key: 'resume', title: 'Resume tips', icon: '📄', field: 'resume' },
  { key: 'portfolio', title: 'Portfolio guidance', icon: '📁', field: 'portfolio' },
  { key: 'freelancing', title: 'Freelancing', icon: '💼', field: 'freelancing' },
  { key: 'remote', title: 'Remote opportunities', icon: '🌍', field: 'remote' },
];

const defaultInfo = {
  bestSemester: '6th or 7th Semester',
  skills: ['Core coursework completed', 'Portfolio or projects', 'Professional communication'],
  resume: ['One-page clear layout', 'Highlight projects & GPA', 'Professional email'],
  portfolio: ['Document projects with README', 'Live demos where possible'],
  freelancing: ['Start with small local projects', 'Build platform reviews'],
  remote: ['Remote-friendly job boards', 'Distributed startup teams'],
};

export default function InternshipGuidance() {
  const [checked, setChecked] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const { selectedDegreeId } = useJourney();
  const degree = getDegreeById(selectedDegreeId);
  const data = degree?.internship || defaultInfo;

  const checklist = [
    'Updated LinkedIn profile',
    'GitHub / portfolio link ready',
    'Resume proofread (PDF)',
    '2+ projects documented',
    'Mock interview practice',
    'Target companies list (10+)',
  ];

  const toggleCheck = (item) => {
    setChecked((c) => ({ ...c, [item]: !c[item] }));
  };

  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section id="internship" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Internship Guide"
          title="Internship guidance"
          subtitle="Practical step-by-step preparation — timeline, skills, resume, and remote opportunities"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong neon-border mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:p-8"
        >
          <div>
            <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Best semester to apply</p>
            <p className="font-display mt-1 text-3xl font-bold text-white">{data.bestSemester}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full border-2 border-cyan-500/40 flex items-center justify-center font-display font-bold text-cyan-400">
              6–7
            </div>
            <p className="max-w-[200px] text-sm text-slate-400">
              {degree ? `Recommended for ${degree.name}` : 'Typical across programs'}
            </p>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-wrap gap-2">
              {steps.map((step, i) => (
                <button
                  key={step.key}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    activeStep === i
                      ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/40'
                      : 'glass text-slate-400 hover:text-white'
                  }`}
                >
                  {step.icon} {step.title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-strong rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-xl">
                  {steps[activeStep].icon}
                </span>
                <div>
                  <p className="text-xs text-slate-500">Step {activeStep + 1} of {steps.length}</p>
                  <h3 className="font-display text-lg font-semibold text-white">{steps[activeStep].title}</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {data[steps[activeStep].field]?.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 rounded-xl bg-slate-900/40 px-4 py-3 text-sm text-slate-300"
                  >
                    <span className="font-bold text-cyan-500">{String(i + 1).padStart(2, '0')}</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <div className="hidden sm:flex items-center justify-between gap-2 pt-2">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition ${i <= activeStep ? 'timeline-line' : 'bg-slate-800'}`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass neon-border rounded-2xl p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-white">Prep checklist</h3>
              <span className="text-sm text-cyan-400">
                {done}/{checklist.length}
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
                animate={{ width: `${(done / checklist.length) * 100}%` }}
              />
            </div>
            <ul className="mt-5 space-y-2">
              {checklist.map((item) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-white/5">
                    <input
                      type="checkbox"
                      checked={!!checked[item]}
                      onChange={() => toggleCheck(item)}
                      className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-500/50"
                    />
                    <span className={`text-sm ${checked[item] ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
                      {item}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

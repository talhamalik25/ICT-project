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

  const toggleCheck = (item) => setChecked((c) => ({ ...c, [item]: !c[item] }));
  const done = Object.values(checked).filter(Boolean).length;

  return (
    <section id="internship" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Internship Guide"
          title="Internship guidance"
          subtitle="Step-by-step preparation — timeline, skills, resume, and remote opportunities"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center justify-between gap-4 rounded-2xl p-6 text-white sm:flex-row sm:p-8"
          style={{ background: 'linear-gradient(135deg, #003087, #0066CC)' }}
        >
          <div>
            <p className="text-xs font-bold tracking-[0.12em] text-white/80 uppercase">Best semester to apply</p>
            <p className="mt-1 text-3xl font-extrabold">{data.bestSemester}</p>
          </div>
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-lg font-extrabold">
            6–7
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex flex-wrap gap-2">
              {steps.map((step, i) => (
                <button
                  key={step.key}
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition-all duration-250 cursor-pointer ${
                    activeStep === i
                      ? 'bg-[#003087] text-white'
                      : 'bg-[#EBF3FF] text-[#003087] hover:bg-[#D6E4F7]'
                  }`}
                >
                  {step.icon} {step.title}
                </button>
              ))}
            </div>

            <motion.div key={activeStep} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="card p-6 sm:p-8">
              <p className="text-xs text-[#4A5568]">Step {activeStep + 1} of {steps.length}</p>
              <h3 className="mt-1 text-lg font-bold text-[#003087]">{steps[activeStep].title}</h3>
              <ul className="mt-6 space-y-3">
                {data[steps[activeStep].field]?.map((item, i) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-[#D6E4F7] bg-[#F4F7FC] px-4 py-3 text-sm text-[#4A5568]">
                    <span className="font-extrabold text-[#0066CC]">{String(i + 1).padStart(2, '0')}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#D6E4F7] bg-[#F4F7FC] p-6"
          >
            <h3 className="font-bold text-[#003087]">Prep checklist</h3>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-sm text-[#4A5568]">Progress</span>
              <span className="text-sm font-semibold text-[#003087]">
                {done}/{checklist.length}
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#D6E4F7]">
              <motion.div
                className="h-full rounded-full progress-bar-blue"
                animate={{ width: `${(done / checklist.length) * 100}%` }}
              />
            </div>
            <ul className="mt-5 space-y-2">
              {checklist.map((item) => (
                <li key={item}>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg py-2 transition-all hover:bg-[#EBF3FF]">
                    <input
                      type="checkbox"
                      checked={!!checked[item]}
                      onChange={() => toggleCheck(item)}
                      className="h-4 w-4 rounded border-2 border-[#D6E4F7] text-[#003087] focus:ring-[#003087]"
                      style={{ accentColor: '#003087' }}
                    />
                    <span className={`text-sm ${checked[item] ? 'text-[#4A5568] line-through' : 'text-[#0A0A1A] font-medium'}`}>
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

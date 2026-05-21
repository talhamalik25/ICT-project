import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getDegreeById, getSpecialization } from '../data/programsData';
import { useJourney } from '../context/JourneyContext';
import SectionHeader from './SectionHeader';

export default function RoadmapTimeline() {
  const { selectedDegreeId, selectedSpecId, activeSemester, setActiveSemester } = useJourney();
  const [expanded, setExpanded] = useState(true);
  const degree = getDegreeById(selectedDegreeId);
  const spec = getSpecialization(selectedDegreeId, selectedSpecId);
  const semesters = degree?.semesters ?? [];
  const active = semesters.find((s) => s.semester === activeSemester);
  const overallProgress = semesters.length
    ? Math.round((activeSemester / semesters.length) * 100)
    : 0;

  const toggleSemester = (sem) => {
    setActiveSemester(sem);
    setExpanded(true);
  };

  return (
    <section id="roadmap" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.06),_transparent_65%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Roadmap"
          title="Your semester learning path"
          subtitle={
            spec && degree
              ? `${spec.name} · ${degree.name} — interactive 8-semester journey`
              : 'The core experience — select program & specialization to unlock your path'
          }
        />

        {!degree || !spec ? (
          <div className="glass rounded-2xl border border-dashed border-slate-700/40 py-20 text-center">
            <p className="font-accent text-slate-500">Complete Steps 1 & 2 to activate your futuristic roadmap</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="glass-strong neon-border rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Overall progress</p>
                  <p className="font-display text-2xl font-bold text-white">{overallProgress}%</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  Semester {activeSemester} active
                </div>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-800/80">
                <motion.div
                  className="h-full rounded-full timeline-line"
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </div>

            <div className="relative lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
              <div className="relative hidden lg:block">
                <div className="absolute top-4 bottom-4 left-[27px] w-0.5 timeline-line opacity-50" />
                <div className="space-y-2">
                  {semesters.map((sem) => {
                    const isActive = activeSemester === sem.semester;
                    const isPast = sem.semester < activeSemester;
                    return (
                      <button
                        key={sem.semester}
                        type="button"
                        onClick={() => toggleSemester(sem.semester)}
                        className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                          isActive ? 'bg-cyan-500/15 text-cyan-300' : 'text-slate-500 hover:text-slate-300'
                        }`}
                      >
                        <span
                          className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                            isActive
                              ? 'border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/30'
                              : isPast
                                ? 'border-cyan-600/50 bg-cyan-900/30 text-cyan-500'
                                : 'border-slate-700 bg-slate-900 text-slate-500'
                          }`}
                        >
                          {sem.semester}
                        </span>
                        <span className="font-medium">Semester {sem.semester}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-2 lg:hidden">
                  {semesters.map((sem) => (
                    <button
                      key={sem.semester}
                      type="button"
                      onClick={() => toggleSemester(sem.semester)}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${
                        activeSemester === sem.semester
                          ? 'bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/40'
                          : 'glass text-slate-400'
                      }`}
                    >
                      Sem {sem.semester}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeSemester}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="glass-strong neon-border overflow-hidden rounded-2xl"
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded(!expanded)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <div>
                        <p className="text-xs font-bold tracking-widest text-cyan-400 uppercase">Semester {active?.semester}</p>
                        <h3 className="font-display mt-1 text-xl font-bold text-white sm:text-2xl">
                          {active?.courses[0]} & more
                        </h3>
                      </div>
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 text-slate-400 transition ${expanded ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-white/5 px-5 pb-6 sm:px-6"
                        >
                          <div className="mb-4 mt-4">
                            <div className="flex justify-between text-xs text-slate-500">
                              <span>Semester completion</span>
                              <span className="text-cyan-400">{active?.progress}%</span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-800">
                              <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${active?.progress}%` }}
                                transition={{ duration: 0.8 }}
                              />
                            </div>
                          </div>

                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Subjects</p>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {active?.courses.map((course, i) => (
                              <motion.li
                                key={course}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04 }}
                                className="flex items-center gap-3 rounded-xl bg-slate-900/50 px-4 py-3"
                              >
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-xs font-bold text-cyan-400">
                                  {i + 1}
                                </span>
                                <span className="text-sm text-slate-200">{course}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {active?.skills?.length > 0 && (
                            <>
                              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">Skills learned</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {active.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                </AnimatePresence>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {semesters.map((sem) => (
                    <button
                      key={sem.semester}
                      type="button"
                      onClick={() => toggleSemester(sem.semester)}
                      className={`rounded-xl border p-3 text-left transition ${
                        activeSemester === sem.semester
                          ? 'border-cyan-500/40 bg-cyan-500/10'
                          : 'glass border-transparent hover:border-slate-600'
                      }`}
                    >
                      <p className="text-[10px] font-bold text-cyan-400">SEM {sem.semester}</p>
                      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{sem.courses[0]}</p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full bg-cyan-500/60 rounded-full" style={{ width: `${sem.progress}%` }} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

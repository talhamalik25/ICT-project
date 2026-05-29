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
  const overallProgress = semesters.length ? Math.round((activeSemester / semesters.length) * 100) : 0;

  return (
    <section id="roadmap" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Roadmap"
          title="Your semester learning path"
          subtitle={
            spec && degree
              ? `${spec.name} · ${degree.name} — interactive 8-semester journey`
              : 'Select program & specialization to unlock your path'
          }
        />

        {!degree || !spec ? (
          <div className="card border-dashed py-20 text-center text-[#4A5568]">
            Complete Steps 1 & 2 to activate your semester roadmap
          </div>
        ) : (
          <div className="space-y-8">
            <div className="rounded-xl border border-[#D6E4F7] bg-[#EBF3FF] p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="section-label !mb-2">Overall progress</p>
                  <p className="text-2xl font-extrabold text-[#003087]">{overallProgress}%</p>
                </div>
                <p className="text-sm text-[#4A5568]">Semester {activeSemester} of {semesters.length}</p>
              </div>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#D6E4F7]">
                <motion.div
                  className="h-full rounded-full progress-bar-blue"
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
              <div className="relative hidden lg:block">
                <div className="absolute top-4 bottom-4 left-[27px] w-0.5 timeline-connector" />
                <div className="space-y-1">
                  {semesters.map((sem) => {
                    const isActive = activeSemester === sem.semester;
                    return (
                      <button
                        key={sem.semester}
                        type="button"
                        onClick={() => {
                          setActiveSemester(sem.semester);
                          setExpanded(true);
                        }}
                        className={`relative flex w-full items-center gap-3 rounded-[10px] px-3 py-2.5 text-left text-sm font-bold transition-all duration-250 ${
                          isActive
                            ? 'text-white'
                            : 'text-[#4A5568] hover:bg-[#EBF3FF] hover:text-[#003087]'
                        }`}
                        style={
                          isActive
                            ? { background: 'linear-gradient(135deg, #003087, #0066CC)' }
                            : undefined
                        }
                      >
                        <span
                          className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'border-2 border-[#D6E4F7] bg-[#EBF3FF] text-[#003087]'
                          }`}
                        >
                          {sem.semester}
                        </span>
                        Semester {sem.semester}
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
                      onClick={() => {
                        setActiveSemester(sem.semester);
                        setExpanded(true);
                      }}
                      className={`shrink-0 rounded-lg px-4 py-2 text-sm font-bold transition-all ${
                        activeSemester === sem.semester
                          ? 'text-white'
                          : 'card !shadow-none text-[#4A5568]'
                      }`}
                      style={
                        activeSemester === sem.semester
                          ? { background: 'linear-gradient(135deg, #003087, #0066CC)' }
                          : undefined
                      }
                    >
                      Sem {sem.semester}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.article
                    key={activeSemester}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="card overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded(!expanded)}
                      className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <div>
                        <p className="section-label !mb-1">Semester {active?.semester}</p>
                        <h3 className="text-xl font-extrabold text-[#003087] sm:text-2xl">
                          {active?.courses[0]} & more
                        </h3>
                      </div>
                      <span className={`text-[#003087] transition-all ${expanded ? 'rotate-180' : ''}`}>▼</span>
                    </button>

                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-[#D6E4F7] px-5 pb-6 sm:px-6"
                        >
                          <div className="mb-4 mt-4">
                            <div className="flex justify-between text-xs text-[#4A5568]">
                              <span>Semester completion</span>
                              <span className="font-semibold text-[#003087]">{active?.progress}%</span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#D6E4F7]">
                              <motion.div
                                className="h-full rounded-full progress-bar-blue"
                                initial={{ width: 0 }}
                                animate={{ width: `${active?.progress}%` }}
                              />
                            </div>
                          </div>

                          <p className="text-xs font-semibold uppercase tracking-wider text-[#4A5568]">Subjects</p>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {active?.courses.map((course, i) => (
                              <li key={course} className="chip-subject flex items-center gap-2 px-3 py-2.5 text-sm">
                                <span className="font-bold">{i + 1}</span>
                                {course}
                              </li>
                            ))}
                          </ul>

                          {active?.skills?.length > 0 && (
                            <>
                              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#4A5568]">
                                Skills learned
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {active.skills.map((skill) => (
                                  <span key={skill} className="chip-skill px-3 py-1 text-xs font-medium">
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
                      onClick={() => {
                        setActiveSemester(sem.semester);
                        setExpanded(true);
                      }}
                      className={`card !rounded-xl !p-3 text-left transition-all ${
                        activeSemester === sem.semester ? 'border-t-[3px] border-t-[#003087]' : ''
                      }`}
                    >
                      <p className="text-[10px] font-bold text-[#003087]">SEM {sem.semester}</p>
                      <p className="mt-1 text-xs text-[#4A5568] line-clamp-2">{sem.courses[0]}</p>
                      <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#D6E4F7]">
                        <div className="h-full progress-bar-blue rounded-full" style={{ width: `${sem.progress}%` }} />
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

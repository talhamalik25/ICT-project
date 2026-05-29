import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  // Motion configurations for reuse
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true, margin: '-100px' }
  };

  return (
    <main className="min-h-screen bg-page overflow-x-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy to-blue py-32 md:py-40 text-white">
        {/* Decorative Blurred Circles */}
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md border border-white/10 uppercase mb-6"
          >
            M9 Campus · Student Initiative
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-sm mb-6 !text-white"
          >
            About IQRA Career Roadmap
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            A student-built guide to help new Iqra University M9 Campus admissions navigate their academic and career journey with confidence.
          </motion.p>
        </div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="bg-white pt-24 md:pt-32 pb-12 md:pb-16 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeUp}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start mb-16"
          >
            <div className="lg:col-span-1 border-l-4 border-blue pl-6">
              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-navy leading-none">
                Our Mission
              </h2>
            </div>
            
            <div className="lg:col-span-2">
              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                This platform was built to solve a real problem — new students at Iqra University M9 Campus often feel lost about which program to choose, what they will study each semester, and where their degree can take them. IQRA Career Roadmap gives every new admission a clear, visual, and honest guide to their academic future.
              </p>
            </div>
          </motion.div>

          {/* Stat Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              { num: '6+ Programs', label: 'Offered at M9 Campus' },
              { num: '8 Semesters', label: 'Complete degree journey' },
              { num: '15+ Career Tracks', label: 'Across all programs' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(0,48,135,0.08)' }}
                className="bg-tint rounded-2xl p-8 border border-border/40 text-center transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl lg:text-[2rem] font-extrabold text-navy mb-2">
                  {stat.num}
                </div>
                <div className="text-sm md:text-base text-text-muted font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER SECTION */}
      <section className="bg-page pt-12 md:pt-16 pb-24 md:pb-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6E4F7] bg-tint px-4 py-1 text-xs font-bold tracking-wider text-blue uppercase mb-4">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              What This Platform Offers
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Everything a new student needs — in one place
            </p>
          </motion.div>

          {/* Grid of 6 Feature Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                icon: '🎓',
                title: 'Degree Programs',
                desc: 'Detailed breakdown of every program offered at M9 Campus with specializations.'
              },
              {
                icon: '🗺️',
                title: 'Semester Roadmaps',
                desc: 'Course-by-course journey for all 8 semesters so you know exactly what to expect.'
              },
              {
                icon: '💼',
                title: 'Career Paths',
                desc: "Real job roles, required skills, and salary ranges for Pakistan's job market."
              },
              {
                icon: '📅',
                title: 'Internship Guide',
                desc: 'When to apply, how to prepare, and what companies look for.'
              },
              {
                icon: '💰',
                title: 'Salary Insights',
                desc: 'Honest Pakistan market salary data from fresh graduate to senior level.'
              },
              {
                icon: '❓',
                title: 'FAQ',
                desc: 'Answers to the most common questions from new admission students.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -4 }}
                className="bg-white border border-border rounded-2xl p-7 flex flex-col items-start transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,48,135,0.1)] group hover:border-blue"
              >
                <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-text-muted leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. ABOUT IQRA UNIVERSITY SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Content */}
            <motion.div 
              {...fadeUp}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="rounded-full bg-tint px-3.5 py-1 text-xs font-bold text-navy tracking-wider uppercase mb-4 border border-blue/15">
                Est. 1998
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
                About Iqra University
              </h2>
              <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-8">
                Iqra University was established in January 1998 in Karachi and was chartered by the Government of Sindh under Ordinance VI of 2000. With campuses across Pakistan including Karachi, Islamabad, and Hyderabad, the university is committed to delivering quality, affordable education. M9 Campus is located in one of Karachi's most densely populated areas, catering to thousands of students every year.
              </p>

              {/* Dynamic Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  { icon: '📍', label: 'Iqra University, M9 Campus, Gadap Town, Karachi, Sindh 75030, Pakistan', href: null },
                  { icon: '📞', label: '+92 (021) 111-264-264', href: 'tel:+92021111264264' },
                  { icon: '🌐', label: 'iqra.edu.pk', href: 'https://iqra.edu.pk' },
                  { icon: '✉️', label: 'admissions@iqra.edu.pk', href: 'mailto:admissions@iqra.edu.pk' }
                ].map((info, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-tint/40 transition-colors duration-250">
                    <span className="text-xl text-blue">{info.icon}</span>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm md:text-base font-semibold text-text-muted hover:text-blue transition-colors duration-200"
                      >
                        {info.label}
                      </a>
                    ) : (
                      <span className="text-sm md:text-base font-semibold text-text-muted">{info.label}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Styled Info Card */}
            <motion.div 
              {...fadeUp}
              className="lg:col-span-5 w-full"
            >
              <div className="bg-gradient-to-br from-navy to-blue rounded-[20px] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                {/* Visual Glow */}
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  {[
                    { val: '1998', desc: 'Year Founded' },
                    { val: '8', desc: 'Campuses' },
                    { val: '25,000+', desc: 'Students' },
                    { val: 'Top Ranked', desc: 'In Pakistan' }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1 text-white">
                        {stat.val}
                      </span>
                      <span className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-wider">
                        {stat.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 5. DISCLAIMER SECTION */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeUp}
            className="max-w-[800px] mx-auto bg-amber-50 border border-gold rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-4 shadow-sm"
          >
            <div className="text-3xl p-3 bg-amber-100/80 rounded-xl leading-none flex items-center justify-center pointer-events-none">
              ⚠️
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-amber-800 mb-2">
                Important Note
              </h3>
              <p className="text-sm md:text-base text-amber-900/85 leading-relaxed">
                This is a student-created career guidance platform and is <strong>NOT</strong> an official Iqra University portal. The information provided is based on publicly available data from iqra.edu.pk and general Pakistan job market research. For official admissions, fee structures, and academic policies, always refer to the official Iqra University website at <a href="https://iqra.edu.pk" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-amber-950 transition-colors">iqra.edu.pk</a> or visit the M9 Campus admissions office directly.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="bg-page pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeUp}
            className="bg-gradient-to-br from-navy to-blue rounded-3xl py-12 md:py-16 px-6 md:px-12 text-center text-white shadow-xl relative overflow-hidden"
          >
            {/* Ambient Background Circles */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 !text-white">
                Ready to Explore Your Future?
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
                Start with your program and discover your complete academic and career roadmap.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link 
                  to="/programs" 
                  className="inline-flex items-center justify-center bg-gold hover:bg-yellow-500 text-text font-bold rounded-[10px] px-9 py-3.5 shadow-lg shadow-gold/20 transition-all duration-200"
                >
                  Explore Programs
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// 7 Undergraduate Programs Data
const undergraduatePrograms = [
  {
    id: 'bscs',
    icon: '💻',
    name: 'BS Computer Science',
    department: 'Computer Science',
    duration: '4 Years · 8 Semesters',
    category: 'Computer Science',
    description: 'Core computing, algorithms, software systems, AI, and networking with flexible specialization tracks.',
    specializations: ['AI & Machine Learning', 'Cyber Security', 'Cloud Computing', 'Mobile Development'],
    careerRoles: ['Software Engineer', 'AI Engineer', 'Cloud Architect', 'Full Stack Developer'],
    avgSalary: 'PKR 80,000 – 250,000/month',
    colorAccent: '#003087'
  },
  {
    id: 'bsai',
    icon: '🤖',
    name: 'BS Artificial Intelligence',
    department: 'Computer Science',
    duration: '4 Years · 8 Semesters',
    category: 'Computer Science',
    description: 'Dedicated AI degree covering machine learning, deep learning, NLP, and intelligent systems.',
    specializations: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    careerRoles: ['AI Engineer', 'Data Scientist', 'ML Researcher', 'NLP Engineer'],
    avgSalary: 'PKR 100,000 – 350,000/month',
    colorAccent: '#0066CC'
  },
  {
    id: 'bscyber',
    icon: '🛡️',
    name: 'BS Cyber Security',
    department: 'Computer Science',
    duration: '4 Years · 8 Semesters',
    category: 'Computer Science',
    description: 'Offensive and defensive security, digital forensics, ethical hacking, and enterprise risk management.',
    specializations: ['Ethical Hacking', 'Digital Forensics', 'Network Security', 'SOC Analysis'],
    careerRoles: ['Security Analyst', 'Penetration Tester', 'SOC Analyst', 'Security Engineer'],
    avgSalary: 'PKR 90,000 – 300,000/month',
    colorAccent: '#1D4ED8'
  },
  {
    id: 'bsse',
    icon: '⚙️',
    name: 'BS Software Engineering',
    department: 'Software Engineering',
    duration: '4 Years · 8 Semesters',
    category: 'Computer Science',
    description: 'Engineering-focused program emphasizing SDLC, software quality, agile methods, and scalable delivery.',
    specializations: ['Full Stack', 'DevOps', 'Mobile Engineering', 'Cloud Systems'],
    careerRoles: ['Software Engineer', 'DevOps Engineer', 'QA Engineer', 'Product Manager'],
    avgSalary: 'PKR 80,000 – 280,000/month',
    colorAccent: '#0EA5E9'
  },
  {
    id: 'bba',
    icon: '📊',
    name: 'BBA',
    department: 'Business Administration',
    duration: '4 Years · 8 Semesters',
    category: 'Business',
    description: 'Business administration with specialization pathways in finance, marketing, HR, and entrepreneurship.',
    specializations: ['Finance', 'Marketing', 'HR Management', 'Entrepreneurship'],
    careerRoles: ['Business Analyst', 'Marketing Manager', 'HR Manager', 'Entrepreneur'],
    avgSalary: 'PKR 60,000 – 200,000/month',
    colorAccent: '#F0A500'
  },
  {
    id: 'bsmedia',
    icon: '🎥',
    name: 'BS Media Science',
    department: 'Media Sciences',
    duration: '4 Years · 8 Semesters',
    category: 'Computer Science',
    description: "Mass communication, digital media production, journalism, and content creation for Pakistan's media industry.",
    specializations: ['Digital Media', 'Journalism', 'Content Production', 'PR & Communications'],
    careerRoles: ['Content Creator', 'Journalist', 'Media Producer', 'PR Specialist'],
    avgSalary: 'PKR 50,000 – 150,000/month',
    colorAccent: '#7C3AED'
  },
  {
    id: 'bspsych',
    icon: '🧠',
    name: 'BS Psychology',
    department: 'Psychology',
    duration: '4 Years · 8 Semesters',
    category: 'Psychology',
    description: 'Understanding human behavior, mental health, counseling, and applied psychology in clinical and organizational settings.',
    specializations: ['Clinical Psychology', 'Organizational Psychology', 'Child Psychology', 'Counseling'],
    careerRoles: ['Counselor', 'HR Specialist', 'Clinical Psychologist', 'Researcher'],
    avgSalary: 'PKR 50,000 – 180,000/month',
    colorAccent: '#DB2777'
  }
];

// Associate Programs Data
const associatePrograms = [
  {
    title: 'Associate Degree in Psychology',
    duration: '2 Years · 4 Semesters',
    desc: 'Foundation in psychological principles, human behavior, and mental health basics.',
    careers: ['HR Assistant', 'Counseling Support', 'Research Assistant']
  },
  {
    title: 'Associate Degree in Digital Marketing',
    duration: '2 Years · 4 Semesters',
    desc: 'Practical digital marketing skills including SEO, social media, and content strategy.',
    careers: ['Digital Marketer', 'Social Media Manager', 'SEO Specialist']
  },
  {
    title: 'Associate Degree in Accounting & Finance',
    duration: '2 Years · 4 Semesters',
    desc: 'Core accounting principles, financial statements, and business finance fundamentals.',
    careers: ['Accounts Assistant', 'Finance Trainee', 'Bookkeeper']
  }
];

// Postgraduate Programs Data
const postgraduatePrograms = [
  {
    title: 'MBA — Master of Business Administration',
    duration: '2 Years',
    desc: 'Advanced business strategy, leadership, finance, and entrepreneurship for working professionals.',
    entry: "Bachelor's degree in any field",
    careers: ['Business Manager', 'Consultant', 'Entrepreneur', 'C-Suite Executive'],
    salary: 'PKR 150,000 – 500,000/month'
  },
  {
    title: 'MS Computer Science',
    duration: '2 Years',
    desc: 'Advanced computing research, machine learning, distributed systems, and specialization in emerging technologies.',
    entry: 'BS in Computer Science or related field',
    careers: ['Research Scientist', 'Senior Engineer', 'Tech Lead', 'AI Specialist'],
    salary: 'PKR 200,000 – 600,000/month'
  }
];

export default function Programs() {
  const [activeTab, setActiveTab] = useState('All');
  
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
        staggerChildren: 0.08
      }
    },
    viewport: { once: true, margin: '-100px' }
  };

  // Filtered Programs array
  const filteredPrograms = undergraduatePrograms.filter(prog => {
    if (activeTab === 'All') return true;
    return prog.category === activeTab;
  });

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
            M9 Campus · All Programs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-extrabold leading-tight tracking-tight max-w-4xl mx-auto drop-shadow-sm mb-6 !text-white"
          >
            Explore Your Degree Program
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Choose from 6 undergraduate and postgraduate programs offered at Iqra University M9 Campus — each with clear career tracks and semester roadmaps.
          </motion.p>
        </div>
      </section>

      {/* 2. PROGRAMS GRID SECTION */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            {...fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D6E4F7] bg-tint px-4 py-1 text-xs font-bold tracking-wider text-blue uppercase mb-4">
              Undergraduate Degrees
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              All Programs at M9 Campus
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Click any program to see full details, specializations, and career outcomes
            </p>
          </motion.div>

          {/* Filter Tabs Row */}
          <motion.div 
            {...fadeUp}
            className="flex flex-wrap justify-center items-center gap-3 mb-16"
          >
            {['All', 'Computer Science', 'Business', 'Psychology'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-250 cursor-pointer shadow-sm ${
                  activeTab === tab 
                    ? 'bg-navy text-white scale-[1.03] shadow-navy/20' 
                    : 'bg-tint text-navy hover:bg-tint/80 hover:translate-y-[-1px]'
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Program Cards Grid */}
          <motion.div 
            layout
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredPrograms.map((prog) => (
                <motion.div
                  layout
                  key={prog.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,48,135,0.15)' }}
                  style={{ borderTop: `4px solid ${prog.colorAccent}` }}
                  className="bg-white border border-border rounded-[20px] p-7 flex flex-col justify-between transition-all duration-300 shadow-sm relative overflow-hidden group"
                >
                  <div>
                    {/* Header Row */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300 pointer-events-none">
                        {prog.icon}
                      </span>
                      <span className="rounded-full bg-tint px-3 py-1 text-xs font-semibold text-navy">
                        {prog.duration}
                      </span>
                    </div>

                    {/* Program Name & Dept */}
                    <h3 className="text-xl font-extrabold text-navy mb-1">
                      {prog.name}
                    </h3>
                    <span className="text-xs font-semibold text-text-muted/80 uppercase tracking-wider">
                      {prog.department}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-text-muted leading-relaxed my-4">
                      {prog.description}
                    </p>

                    {/* Specializations */}
                    <div className="mt-4">
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        Specializations
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {prog.specializations.map((spec, idx) => (
                          <span key={idx} className="bg-tint text-navy text-[0.78rem] font-semibold px-2.5 py-1 rounded-[6px]">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Career Roles */}
                    <div className="mt-4">
                      <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2">
                        Career Roles
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {prog.careerRoles.map((role, idx) => (
                          <span key={idx} className="bg-page text-text-muted text-[0.78rem] font-medium px-2.5 py-1 rounded-[6px] border border-border/30">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Salary & Button */}
                  <div className="mt-8 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold text-text-muted uppercase">
                        Avg. Salary
                      </span>
                      <span style={{ color: prog.colorAccent }} className="text-sm md:text-base font-extrabold">
                        {prog.avgSalary}
                      </span>
                    </div>

                    <Link 
                    to="/"
                    style={{ backgroundColor: prog.colorAccent }}
                    className="w-full mt-2 text-center inline-block text-white font-bold rounded-lg py-2.5 px-5 text-sm shadow-md transition-opacity hover:opacity-90 active:scale-[0.98]"
                  >
                    View Roadmap →
                  </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. ASSOCIATE PROGRAMS SECTION */}
      <section className="bg-page py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            {...fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-amber-50 px-4 py-1 text-xs font-bold tracking-wider text-amber-700 uppercase mb-4">
              Associate Pathways
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              Associate Degree Programs
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              2-year programs for quick entry into the workforce
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {associatePrograms.map((prog, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
                className="bg-white border border-border rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-[0_12px_24px_rgba(0,48,135,0.06)]"
              >
                <div>
                  {/* Badge */}
                  <span className="inline-block rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs font-extrabold uppercase tracking-wide mb-4">
                    2 YEARS
                  </span>
                  
                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {prog.title}
                  </h3>
                  <span className="text-xs text-text-muted font-semibold block mb-3">
                    {prog.duration}
                  </span>
                  <p className="text-sm md:text-base text-text-muted leading-relaxed mb-6">
                    {prog.desc}
                  </p>
                </div>

                {/* Careers outcome */}
                <div className="pt-4 border-t border-border/40">
                  <h4 className="text-[0.75rem] font-bold text-navy uppercase tracking-wider mb-2">
                    Sample Career Outcomes
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.careers.map((career, idx) => (
                      <span key={idx} className="bg-tint text-navy text-xs font-semibold px-2 py-0.5 rounded-[6px]">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. POSTGRADUATE SECTION */}
      <section className="bg-white py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            {...fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-tint px-4 py-1 text-xs font-bold tracking-wider text-blue uppercase mb-4">
              Advanced Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              Postgraduate Programs
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Advance your career with a master's degree
            </p>
          </motion.div>

          {/* Centered side by side Postgraduate Cards */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {postgraduatePrograms.map((prog, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-navy to-[#001A5C] text-white rounded-[20px] p-8 md:p-10 shadow-lg relative overflow-hidden transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-extrabold tracking-tight max-w-xs text-white">
                    {prog.title}
                  </h3>
                  <span className="rounded-full bg-white/15 text-white px-3.5 py-1 text-xs font-semibold tracking-wide backdrop-blur-sm border border-white/5 uppercase">
                    {prog.duration}
                  </span>
                </div>

                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6">
                  {prog.desc}
                </p>

                {/* Entry Requirement */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/5 mb-6">
                  <h4 className="text-xs font-bold text-[#93C5FD] uppercase tracking-wider mb-1">
                    Entry Requirement
                  </h4>
                  <p className="text-xs md:text-sm text-white/80">
                    {prog.entry}
                  </p>
                </div>

                {/* Careers Outcome & Salary */}
                <div className="flex flex-col gap-6 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-[0.75rem] font-bold text-[#93C5FD] uppercase tracking-wider mb-2">
                      Target Careers
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.careers.map((career, idx) => (
                        <span key={idx} className="bg-white/10 text-white text-xs font-medium px-2 py-0.5 rounded-[6px]">
                          {career}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/70 uppercase">
                      Avg. Salary Outcome
                    </span>
                    <span className="text-base md:text-lg font-extrabold text-gold">
                      {prog.salary}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. HOW TO CHOOSE SECTION */}
      <section className="bg-page py-24 md:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            {...fadeUp}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue/15 bg-tint px-4 py-1 text-xs font-bold tracking-wider text-blue uppercase mb-4">
              Career Guidance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-4">
              How to Choose Your Program?
            </h2>
            <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto">
              Answer these 3 questions to find your best fit
            </p>
          </motion.div>

          {/* 3 Step Cards Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {[
              {
                step: 'Step 1',
                title: 'What interests you?',
                icon: '🤔',
                tags: ['Technology', 'Business', 'Psychology', 'Media', 'Security'],
                body: null
              },
              {
                step: 'Step 2',
                title: "What's your goal?",
                icon: '🎯',
                tags: ['Job in Pakistan', 'Work Abroad', 'Freelancing', 'Research', 'Entrepreneurship'],
                body: null
              },
              {
                step: 'Step 3',
                title: 'Check the match',
                icon: '✅',
                tags: [],
                body: "Based on your answers, CS or AI programs lead to highest demand roles in Pakistan's tech market."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
                className="bg-white border border-border rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Step Row */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-extrabold text-blue uppercase tracking-widest">
                      {item.step}
                    </span>
                    <span className="text-2xl pointer-events-none">
                      {item.icon}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-4">
                    {item.title}
                  </h3>

                  {item.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="bg-tint text-navy text-xs font-semibold px-3 py-1.5 rounded-full border border-border/30">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm md:text-base text-text-muted leading-relaxed">
                      {item.body}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeUp}
            className="bg-gradient-to-br from-navy to-blue rounded-3xl py-12 md:py-16 px-6 md:px-12 text-center text-white shadow-xl relative overflow-hidden"
          >
            {/* Ambient Background Circles */}
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white !text-white">
                Found Your Program?
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-8 leading-relaxed">
                Explore your semester roadmap and career outcomes next.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                  to="/" 
                  className="inline-flex items-center justify-center bg-gold hover:bg-yellow-500 text-text font-bold rounded-[10px] px-9 py-3.5 shadow-lg shadow-gold/20 transition-all duration-200"
                >
                  View Roadmaps
                </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-[10px] px-8 py-3 transition-all duration-200"
                  >
                    Contact Admissions
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

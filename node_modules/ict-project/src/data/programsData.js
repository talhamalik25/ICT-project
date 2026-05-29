const techSkillsPerSem = [
  ['Problem solving', 'Programming logic', 'Digital literacy'],
  ['OOP & abstraction', 'Logic design', 'Discrete reasoning'],
  ['Algorithms', 'System internals', 'Linear algebra'],
  ['Database design', 'OS concepts', 'SDLC basics'],
  ['Advanced algorithms', 'Networking', 'Team projects'],
  ['Web stack', 'Security fundamentals', 'Research methods'],
  ['FYP & domain depth', 'Industry practices', 'Internship readiness'],
  ['Capstone delivery', 'Innovation', 'Career launch'],
];

function withSkills(semesters, skillsList) {
  return semesters.map((s, i) => ({
    ...s,
    skills: skillsList[i] || [],
    progress: Math.round(((i + 1) / semesters.length) * 100),
  }));
}

const csSemestersRaw = [
  { semester: 1, courses: ['Programming Fundamentals', 'Calculus & Analytical Geometry', 'ICT in Practice', 'English Composition', 'Islamic Studies / Ethics'] },
  { semester: 2, courses: ['Object-Oriented Programming', 'Digital Logic Design', 'Discrete Structures', 'Applied Physics', 'Pakistan Studies'] },
  { semester: 3, courses: ['Data Structures & Algorithms', 'Computer Organization', 'Linear Algebra', 'Technical Writing', 'University Elective'] },
  { semester: 4, courses: ['Database Systems', 'Operating Systems', 'Software Engineering I', 'Probability & Statistics', 'Communication Skills'] },
  { semester: 5, courses: ['Design & Analysis of Algorithms', 'Computer Networks', 'Software Engineering II', 'Elective I (Domain)', 'Free Elective'] },
  { semester: 6, courses: ['Web Technologies', 'Information Security', 'Elective II (Domain)', 'Elective III', 'Research Methods'] },
  { semester: 7, courses: ['Final Year Project I', 'Elective IV (Advanced Domain)', 'Elective V', 'Professional Practices', 'Internship Prep'] },
  { semester: 8, courses: ['Final Year Project II', 'Capstone Seminar', 'Elective VI', 'Entrepreneurship / Innovation', 'Industry Seminar'] },
];

const csSemesters = withSkills(csSemestersRaw, techSkillsPerSem);

const bbaSemesters = [
  { semester: 1, courses: ['Principles of Management', 'Microeconomics', 'Business Mathematics', 'English Composition', 'Islamic Studies'] },
  { semester: 2, courses: ['Financial Accounting', 'Macroeconomics', 'Business Statistics', 'Pakistan Studies', 'Communication Skills'] },
  { semester: 3, courses: ['Marketing Fundamentals', 'Organizational Behavior', 'Business Law', 'Management Information Systems', 'Elective'] },
  { semester: 4, courses: ['Corporate Finance', 'Operations Management', 'Human Resource Management', 'Business Research', 'Elective'] },
  { semester: 5, courses: ['Strategic Management', 'Consumer Behavior', 'Entrepreneurship', 'Domain Elective I', 'Free Elective'] },
  { semester: 6, courses: ['International Business', 'Supply Chain Basics', 'Domain Elective II', 'Business Analytics Intro', 'Elective'] },
  { semester: 7, courses: ['Business Policy & Strategy', 'Internship / Project I', 'Domain Elective III', 'Leadership', 'Seminar'] },
  { semester: 8, courses: ['Capstone Project', 'Corporate Governance', 'Domain Elective IV', 'Professional Ethics', 'Industry Visit'] },
];

const salaryTech = {
  fresh: { min: 45000, max: 120000, label: 'Fresh Graduate' },
  mid: { min: 150000, max: 350000, label: 'Mid-Level (3–5 yrs)' },
  senior: { min: 400000, max: 900000, label: 'Senior / Lead' },
};

const salaryBBA = {
  fresh: { min: 35000, max: 90000, label: 'Fresh Graduate' },
  mid: { min: 100000, max: 250000, label: 'Mid-Level (3–5 yrs)' },
  senior: { min: 300000, max: 700000, label: 'Senior / Executive' },
};

const internshipTech = {
  bestSemester: '6th or 7th Semester',
  skills: ['Git & GitHub portfolio', 'One full-stack or domain project', 'Data structures basics', 'LinkedIn + resume in English', 'Soft skills & interview prep'],
  resume: ['One-page PDF with clear sections', 'Quantify achievements (projects, GPA)', 'Tailor keywords to job description', 'Professional email & GitHub link', 'Proofread — no spelling errors'],
  portfolio: ['2–3 polished projects on GitHub', 'Live demo links (Vercel/Netlify)', 'README with problem & solution', 'Contributions to open source (optional)'],
  freelancing: ['Upwork, Fiverr — web/dev gigs', 'Local clients via Facebook groups', 'Hackathons for visibility'],
  remote: ['Remote OK, We Work Remotely', 'Pakistani startups hiring remote', 'International internships (competitive)'],
};

const internshipBBA = {
  bestSemester: '6th or 7th Semester',
  skills: ['Excel & basic analytics', 'Presentation skills', 'Market research basics', 'Professional email writing'],
  resume: ['One-page professional layout', 'Highlight leadership & projects', 'Business keywords for ATS', 'LinkedIn aligned with CV', 'Clean formatting — PDF only'],
  portfolio: ['Case study write-ups', 'Marketing campaign mockups', 'Business plan sample'],
  freelancing: ['Social media management', 'Virtual assistant roles', 'Content & copywriting'],
  remote: ['Remote marketing internships', 'CRM & sales support roles'],
};

function spec(id, name, icon, desc, career, skills, demand, scope, roadmapOverride) {
  return {
    id,
    name,
    icon,
    description: desc,
    careerPath: career,
    skills,
    industryDemand: demand,
    futureScope: scope,
    jobs: career.split('→').map((s) => s.trim()),
    roadmap: roadmapOverride || null,
  };
}

export const degrees = [
  {
    id: 'bscs',
    name: 'BS Computer Science',
    icon: '💻',
    description: 'Core computing, algorithms, and software systems with flexible specialization tracks.',
    color: 'from-cyan-500 to-blue-600',
    semesters: csSemesters,
    salary: salaryTech,
    internship: internshipTech,
    specializations: [
      spec('ai', 'Artificial Intelligence', '🤖', 'Machine learning, neural networks, and intelligent systems.', 'Junior ML Engineer → ML Engineer → AI Engineer → AI Researcher', ['Python', 'TensorFlow/PyTorch', 'Statistics', 'Linear Algebra', 'MLOps basics'], 'Very High', 'AI adoption across healthcare, fintech, and automation is accelerating globally and in Pakistan.'),
      spec('cyber', 'Cyber Security', '🛡️', 'Protect networks, applications, and data from modern threats.', 'Security Analyst → SOC Analyst → Penetration Tester → Security Architect', ['Networking', 'Linux', 'Ethical Hacking', 'SIEM tools', 'Cryptography'], 'Very High', 'Growing demand due to digital banking, e-government, and corporate compliance needs.'),
      spec('ds', 'Data Science', '📊', 'Turn raw data into insights using statistics and machine learning.', 'Data Analyst → Data Scientist → Lead Data Scientist → Head of Analytics', ['Python/R', 'SQL', 'Power BI/Tableau', 'Statistics', 'ML fundamentals'], 'High', 'Every industry needs analytics — retail, telecom, healthcare, and startups.'),
      spec('web', 'Web Development', '🌐', 'Build modern, responsive web applications and SaaS products.', 'Frontend Dev → Full Stack Dev → Tech Lead → Engineering Manager', ['HTML/CSS/JS', 'React/Next.js', 'Node.js', 'REST APIs', 'UI/UX basics'], 'High', 'Remote-friendly skills with strong freelance and startup opportunities.'),
      spec('cloud', 'Cloud Computing', '☁️', 'Design scalable infrastructure on AWS, Azure, and GCP.', 'Cloud Support → Cloud Engineer → DevOps Engineer → Cloud Architect', ['Linux', 'Docker', 'Kubernetes', 'AWS/Azure', 'CI/CD'], 'Very High', 'Enterprise migration to cloud drives consistent hiring in Pakistan and abroad.'),
      spec('mobile', 'Mobile App Development', '📱', 'Create native and cross-platform apps for iOS and Android.', 'Junior App Dev → Mobile Developer → Senior Mobile Engineer → Mobile Lead', ['Flutter/React Native', 'Swift/Kotlin', 'Firebase', 'API integration', 'App Store deployment'], 'High', 'Mobile-first economy boosts demand for fintech, delivery, and e-commerce apps.'),
    ],
  },
  {
    id: 'bba',
    name: 'BBA',
    icon: '📈',
    description: 'Business administration with pathways in finance, marketing, HR, and entrepreneurship.',
    color: 'from-emerald-500 to-teal-600',
    semesters: bbaSemesters,
    salary: salaryBBA,
    internship: internshipBBA,
    specializations: [
      spec('finance', 'Finance & Banking', '💰', 'Corporate finance, investment, and financial markets.', 'Finance Trainee → Financial Analyst → Finance Manager → CFO Track', ['Excel', 'Financial modeling', 'Accounting', 'Valuation', 'ERP basics'], 'High', 'Banks, NBFCs, and corporate finance teams actively recruit BBA graduates.'),
      spec('marketing', 'Marketing & Branding', '📣', 'Digital marketing, brand strategy, and consumer engagement.', 'Marketing Coordinator → Brand Executive → Marketing Manager → CMO Track', ['SEO/SEM', 'Social media', 'Analytics', 'Copywriting', 'Campaign planning'], 'High', 'E-commerce and D2C brands need digital-first marketers.'),
      spec('hr', 'Human Resource Management', '👥', 'Talent acquisition, L&D, and organizational development.', 'HR Assistant → HR Executive → HR Manager → CHRO Track', ['Recruitment', 'Labor laws', 'HRIS', 'Conflict resolution', 'Training design'], 'Moderate-High', 'Every mid-to-large organization maintains HR functions.'),
      spec('entrepreneurship', 'Entrepreneurship', '🚀', 'Start and scale ventures with innovation and business planning.', 'Founder / Co-founder → Startup Ops → Venture Analyst → Incubator Mentor', ['Business planning', 'Pitch decks', 'Lean startup', 'Fundraising basics', 'Negotiation'], 'Growing', 'Pakistan startup ecosystem (SASTA, NIC, Plan9) supports young founders.'),
      spec('digital-mkt', 'Digital Marketing', '📱', 'Performance marketing, content, and growth for online businesses.', 'Digital Marketing Intern → Growth Executive → Performance Lead → Head of Growth', ['Meta/Google Ads', 'Analytics', 'Content strategy', 'CRM', 'A/B testing'], 'Very High', 'Agencies and in-house teams prioritize digital skills over traditional-only profiles.'),
    ],
  },
  {
    id: 'se',
    name: 'Software Engineering',
    icon: '⚙️',
    description: 'Engineering-focused program emphasizing SDLC, quality, and scalable software delivery.',
    color: 'from-blue-500 to-indigo-600',
    semesters: csSemesters,
    salary: salaryTech,
    internship: internshipTech,
    specializations: [
      spec('fullstack', 'Full Stack Engineering', '🔧', 'End-to-end product development from UI to database.', 'Associate Engineer → Software Engineer → Senior SE → Principal Engineer', ['TypeScript', 'React', 'Node/Django', 'SQL/NoSQL', 'System design intro'], 'Very High', 'Product companies and offshore firms hire full stack talent continuously.'),
      spec('devops', 'DevOps', '🔄', 'Automate delivery pipelines and infrastructure operations.', 'DevOps Intern → DevOps Engineer → Platform Engineer → SRE Lead', ['CI/CD', 'Docker', 'Terraform', 'Monitoring', 'Scripting'], 'Very High', 'Critical for startups scaling from MVP to production.'),
      spec('cloud-se', 'Cloud & Distributed Systems', '☁️', 'Microservices, containers, and high-availability systems.', 'Cloud Intern → Cloud Engineer → Solutions Architect', ['Kubernetes', 'AWS', 'Messaging queues', 'API design', 'Security'], 'Very High', 'Enterprise and telecom sectors invest heavily in cloud roles.'),
      spec('mobile-se', 'Mobile Engineering', '📲', 'Production-grade iOS/Android applications.', 'Mobile Intern → Mobile Engineer → Staff Engineer', ['Flutter', 'CI for mobile', 'State management', 'Performance tuning'], 'High', 'Super apps and banking apps drive mobile hiring.'),
      spec('qa', 'Quality Assurance & Test Automation', '✅', 'Ensure reliability through manual and automated testing.', 'QA Trainee → QA Engineer → SDET → QA Lead', ['Selenium/Cypress', 'Test plans', 'API testing', 'Agile', 'Bug tracking'], 'High', 'Mature software teams require dedicated QA automation.'),
    ],
  },
  {
    id: 'media',
    name: 'Media Science',
    icon: '🎬',
    description: "Mass communication, digital media production, and journalism for Pakistan's growing media industry.",
    color: 'from-purple-500 to-pink-600',
    semesters: [
      { semester: 1, courses: ['Introduction to Media', 'Visual Communication', 'English Composition', 'Pakistan Studies', 'Digital Literacy'] },
      { semester: 2, courses: ['Photography Basics', 'Media Writing', 'Graphic Design Intro', 'Communication Theory', 'Elective'] },
      { semester: 3, courses: ['Video Production I', 'Audio Production', 'Media Ethics', 'Script Writing', 'Elective'] },
      { semester: 4, courses: ['Video Production II', 'Editing & Post-Production', 'Advertising Principles', 'Web Media', 'Elective'] },
      { semester: 5, courses: ['Documentary Production', 'Broadcast Journalism', 'Motion Graphics', 'Domain Elective I', 'Elective'] },
      { semester: 6, courses: ['Digital Marketing for Media', 'Media Law', 'Domain Elective II', 'Internship Prep', 'Elective'] },
      { semester: 7, courses: ['Final Project I', 'Portfolio Development', 'Domain Elective III', 'Industry Seminar', 'Elective'] },
      { semester: 8, courses: ['Final Project II', 'Entrepreneurship in Media', 'Capstone Showcase', 'Professional Practices', 'Elective'] },
    ],
    salary: {
      fresh: { min: 30000, max: 80000, label: 'Fresh Graduate' },
      mid: { min: 80000, max: 200000, label: 'Mid-Level (3–5 yrs)' },
      senior: { min: 200000, max: 500000, label: 'Senior / Creative Lead' },
    },
    internship: {
      bestSemester: '5th or 6th Semester',
      skills: ['Adobe Premiere / DaVinci', 'Photoshop / Illustrator', 'Camera & lighting basics', 'Social content creation'],
      portfolio: ['Showreel (2–3 min)', 'Behance / Vimeo channel', 'Written articles or campaigns'],
      freelancing: ['Wedding shoots', 'Brand content for SMEs', 'YouTube channel production'],
      remote: ['Remote video editor roles', 'Content creator for international brands'],
    },
    specializations: [
      spec('digital', 'Digital Media', '📡', 'Social-first content and platform strategy.', 'Content Intern → Digital Producer → Creative Lead', ['Short-form video', 'Analytics', 'Canva/CapCut', 'Trend research'], 'Very High', 'Brands shift budgets to TikTok, Instagram, and YouTube.'),
      spec('film', 'Film Production', '🎥', 'Cinematography, direction, and post-production.', 'Production Assistant → Assistant Director → Director / DOP', ['Cinematography', 'Directing', 'Color grading', 'Sound design'], 'Moderate', 'Drama industry, OTT, and advertising films need skilled crews.'),
      spec('journalism', 'Journalism', '📰', 'News reporting, investigative work, and digital publishing.', 'Reporter → Senior Journalist → Editor → Bureau Chief', ['Reporting', 'Fact-checking', 'AP style', 'Multimedia storytelling'], 'Moderate', 'Digital newsrooms and independent media growing.'),
      spec('advertising', 'Advertising & PR', '📢', 'Campaigns, brand identity, and public relations.', 'Copy Intern → Account Executive → Creative Director', ['Copywriting', 'Campaign strategy', 'Client handling', 'PR writing'], 'High', 'Agencies in Karachi/Lahore/Islamabad hire continuously.'),
      spec('animation', 'Animation & VFX', '✨', '2D/3D animation and visual effects for media.', 'Junior Animator → Animator → VFX Artist → Lead Artist', ['After Effects', 'Blender/Maya', 'Storyboarding', 'Compositing'], 'Growing', 'Gaming, ads, and explainers boost animation demand.'),
    ],
  },
  {
    id: 'ai-degree',
    name: 'Artificial Intelligence',
    icon: '🧠',
    description: 'Dedicated AI degree covering ML, deep learning, NLP, and intelligent systems.',
    color: 'from-violet-500 to-cyan-500',
    semesters: csSemesters,
    salary: { ...salaryTech, fresh: { min: 60000, max: 150000, label: 'Fresh Graduate' } },
    internship: internshipTech,
    specializations: [
      spec('nlp', 'Natural Language Processing', '💬', 'Language models, chatbots, and text analytics.', 'NLP Intern → NLP Engineer → Senior NLP → Research Scientist', ['Python', 'Transformers', 'Hugging Face', 'Linguistics basics'], 'Very High', 'LLM applications in customer support and content generation.'),
      spec('cv', 'Computer Vision', '👁️', 'Image recognition, detection, and video analytics.', 'CV Intern → CV Engineer → Perception Lead', ['OpenCV', 'CNNs', 'Object detection', 'Edge deployment'], 'Very High', 'Surveillance, retail analytics, and medical imaging.'),
      spec('robotics', 'Robotics & Autonomous Systems', '🦾', 'Embodied AI and automation systems.', 'Robotics Intern → Robotics Engineer → Systems Lead', ['ROS', 'Control systems', 'Sensor fusion', 'C++ / Python'], 'Growing', 'Industrial automation and drone startups emerging in Pakistan.'),
      spec('dl', 'Deep Learning', '🔬', 'Neural architectures and training at scale.', 'ML Intern → DL Engineer → Staff ML Engineer', ['PyTorch', 'GPU computing', 'Model optimization', 'Research papers'], 'Very High', 'Core skill for AI-first product companies.'),
      spec('ai-ethics', 'AI Ethics & Governance', '⚖️', 'Responsible AI, bias, and policy frameworks.', 'AI Policy Analyst → Ethics Consultant → AI Governance Lead', ['Ethics', 'Regulation awareness', 'Bias auditing', 'Documentation'], 'Emerging', 'Regulated industries need governance as AI scales.'),
    ],
  },
  {
    id: 'ds-degree',
    name: 'Data Science',
    icon: '📈',
    description: 'Statistics, machine learning, and business intelligence for data-driven decisions.',
    color: 'from-teal-500 to-blue-500',
    semesters: csSemesters,
    salary: salaryTech,
    internship: internshipTech,
    specializations: [
      spec('analytics', 'Business Analytics', '📉', 'Dashboards and KPI reporting for business teams.', 'BI Analyst → Senior Analyst → Analytics Manager', ['SQL', 'Power BI', 'Excel advanced', 'Storytelling with data'], 'High', 'Retail, telecom, and banks run large analytics teams.'),
      spec('bigdata', 'Big Data Engineering', '🗄️', 'Pipelines, warehouses, and distributed processing.', 'Data Engineer Intern → Data Engineer → Platform Lead', ['Spark', 'Airflow', 'SQL', 'Cloud data services'], 'Very High', 'Data infrastructure roles among highest paid in tech.'),
      spec('bi', 'Business Intelligence', '📊', 'Enterprise reporting and self-service analytics.', 'BI Developer → BI Lead → Head of BI', ['ETL', 'Data modeling', 'DAX', 'Warehouse design'], 'High', 'ERP and CRM implementations create BI demand.'),
      spec('ml-eng', 'ML Engineering', '⚡', 'Deploy and scale machine learning in production.', 'ML Intern → ML Engineer → MLOps Lead', ['Python', 'Docker', 'Feature stores', 'Model monitoring'], 'Very High', 'Bridge between data science and software engineering.'),
      spec('research', 'Research & Academia', '🔍', 'Advanced study and contribution to new methods.', 'Research Assistant → PhD Track → Research Scientist', ['Statistics', 'Paper writing', 'Experiment design', 'LaTeX'], 'Moderate', 'Universities and R&D labs for long-term careers.'),
    ],
  },
  {
    id: 'cyber-degree',
    name: 'Cyber Security',
    icon: '🔐',
    description: 'Offensive and defensive security, forensics, and enterprise risk management.',
    color: 'from-red-500 to-orange-600',
    semesters: csSemesters,
    salary: { ...salaryTech, fresh: { min: 55000, max: 140000, label: 'Fresh Graduate' } },
    internship: {
      ...internshipTech,
      skills: ['Networking (TCP/IP)', 'Linux CLI', 'TryHackMe / HTB practice', 'Wireshark basics', 'Security certifications roadmap (Security+, CEH)'],
    },
    specializations: [
      spec('pentest', 'Penetration Testing', '🎯', 'Ethical hacking and vulnerability assessment.', 'Junior Pentester → Pentester → Red Team Lead', ['Burp Suite', 'Metasploit', 'OWASP', 'Report writing'], 'Very High', 'Banks and software houses fund regular pentests.'),
      spec('netsec', 'Network Security', '🌐', 'Firewalls, IDS/IPS, and secure network design.', 'NOC Analyst → Network Security Engineer → Security Architect', ['Cisco/Fortinet', 'VPNs', 'Segmentation', 'Monitoring'], 'High', 'Enterprise networks require dedicated security staff.'),
      spec('forensics', 'Digital Forensics', '🔎', 'Incident investigation and evidence handling.', 'Forensics Intern → Forensic Analyst → Investigator', ['Disk imaging', 'Chain of custody', 'Malware analysis intro'], 'Growing', 'Legal and corporate incident response needs specialists.'),
      spec('grc', 'Governance, Risk & Compliance', '📋', 'Policies, audits, and regulatory alignment.', 'GRC Analyst → Compliance Manager → CISO Track', ['ISO 27001', 'Risk assessment', 'Audit', 'Policy drafting'], 'High', 'Financial sector compliance drives hiring.'),
      spec('cloud-sec', 'Cloud Security', '☁️', 'Securing cloud workloads and identities.', 'Cloud Security Intern → Cloud Security Engineer → Architect', ['IAM', 'CSPM', 'AWS security', 'Zero trust'], 'Very High', 'Cloud adoption increases specialized security roles.'),
    ],
  },
];

export const faqs = [
  { q: 'Which specialization is best?', a: 'There is no single "best" track — AI, Cyber Security, and Data Science currently show very high demand. Choose based on your interest, aptitude for math/coding, and long-term career vision. Use the Careers and Salary sections to compare.' },
  { q: 'When should I start internship?', a: 'Start preparing in your 5th semester (projects, resume, LinkedIn). Most students apply and secure internships during the 6th or 7th semester when core technical skills are in place.' },
  { q: 'Which field has highest salary?', a: 'In Pakistan\'s tech market, AI/ML Engineering, Cyber Security, Cloud/DevOps, and Data Engineering typically offer the highest senior-level packages. Fresh graduate ranges overlap — skills and portfolio matter most early on.' },
  { q: 'How difficult is AI?', a: 'AI requires strong math (linear algebra, statistics), programming (Python), and persistence. It is challenging but manageable if you build fundamentals in Semesters 1–4 before advanced ML courses.' },
  { q: 'Is freelancing possible during university?', a: 'Yes. Many students freelance from 3rd–4th semester onward with web dev, design, content, or data skills. Balance academics first; use freelancing to build portfolio, not replace grades.' },
  { q: 'Is this an official Iqra University portal?', a: 'This is a student guidance demo for Iqra University M9 Campus. Always verify program details, fees, and policies with the official admissions office.' },
];

/** Display order for degree cards */
export const degreeDisplayOrder = ['bscs', 'ai-degree', 'media', 'cyber-degree', 'se', 'bba'];

export function getOrderedDegrees() {
  return degreeDisplayOrder
    .map((id) => degrees.find((d) => d.id === id))
    .filter(Boolean);
}

export function getDegreeById(id) {
  return degrees.find((d) => d.id === id);
}

export function getSpecialization(degreeId, specId) {
  const degree = getDegreeById(degreeId);
  return degree?.specializations.find((s) => s.id === specId);
}

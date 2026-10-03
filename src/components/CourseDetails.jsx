import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  FileText,
  GraduationCap,
  Laptop,
  Map,
  ShieldCheck,
  Users,
  X,
  Target,
  Layers3,
} from 'lucide-react'

const courseData = {
  'ai-machine-learning': {
    title: 'AI & Machine Learning',
    category: 'TECH & DEVELOPMENT',
    image: '/assets/programs-reference-1.png',
    description:
      'Build practical AI and machine learning skills. Learn data preprocessing, model development, evaluation and deployment.',
    duration: '2 Month',
    mode: 'Online',
    fee: '₹12,000',
    focus:
      'Python, Machine Learning, Deep Learning, Computer Vision, NLP, Model Deployment',

    weeks: [
      {
        title: 'WEEK 1: CORE & FOUNDATIONS',
        description:
          'Explore fundamental topics from Python and Data Processing to Machine Learning Foundations.',
      },
      {
        title: 'WEEK 2: INTERMEDIATE MECHANICS',
        description:
          'Explore fundamental topics from Feature Engineering to Model Evaluation.',
      },
      {
        title: 'WEEK 3: ADVANCED ARCHITECTURES',
        description:
          'Explore fundamental topics from Deep Learning to Computer Vision and NLP.',
      },
      {
        title: 'WEEK 4: PRODUCTION & DEPLOYMENTS',
        description:
          'Explore fundamental topics from Model Deployment to Real-World AI Applications.',
      },
    ],

    roadmap: [
      {
        title: 'WEEK 1',
        subtitle: 'Core & Foundations',
        description:
          'Explore fundamental topics from Python and Data Processing to Machine Learning Foundations.',
        days: [
          'Day 1: Introduction to Python & setup basics',
          'Day 2: Core Python, functions, modules and data structures',
          'Day 3: Practical hands-on data processing',
          'Day 4: NumPy, Pandas and exploratory analysis',
          'Day 5: Machine learning concepts and workflow',
          'Day 6: Weekly review, hands-on lab and assessment',
        ],
      },
      {
        title: 'WEEK 2',
        subtitle: 'Intermediate Mechanics',
        description:
          'Explore fundamental topics from Feature Engineering to Model Evaluation.',
        days: [
          'Day 1: Introduction to supervised learning',
          'Day 2: Regression and classification algorithms',
          'Day 3: Feature engineering and preprocessing',
          'Day 4: Model training and validation',
          'Day 5: Hyperparameter tuning',
          'Day 6: Weekly review and practical assessment',
        ],
      },
      {
        title: 'WEEK 3',
        subtitle: 'Advanced Architectures',
        description:
          'Explore fundamental topics from Deep Learning to Computer Vision and NLP.',
        days: [
          'Day 1: Neural network fundamentals',
          'Day 2: Deep learning architectures',
          'Day 3: Computer vision fundamentals',
          'Day 4: Natural language processing',
          'Day 5: Practical AI project implementation',
          'Day 6: Weekly review and project assessment',
        ],
      },
      {
        title: 'WEEK 4',
        subtitle: 'Production & Deployments',
        description:
          'Explore fundamental topics from Model Deployment to Real-World AI Applications.',
        days: [
          'Day 1: Model serialization and APIs',
          'Day 2: Flask/FastAPI model serving',
          'Day 3: Frontend and AI integration',
          'Day 4: Cloud deployment',
          'Day 5: Production optimization',
          'Day 6: Final project and assessment',
        ],
      },
    ],

    projects: [
      'End-to-End Machine Learning Prediction System',
      'Computer Vision AI Application',
      'Production-ready AI Model Deployment',
    ],

    brochure:
      'Download the complete AI & Machine Learning program brochure for curriculum, projects and program information.',
  },

  'full-stack-development': {
    title: 'Full Stack Development',
    category: 'TECH & DEVELOPMENT',
    image: '/assets/programs-reference-2.png',
    description:
      'Build modern web applications using frontend, backend, databases, APIs and production deployment workflows.',
    duration: '2 Month',
    mode: 'Online',
    fee: '₹12,000',
    focus:
      'React, JavaScript, Node.js, Express, MongoDB, REST APIs, Authentication, Deployment',

    weeks: [
      {
        title: 'WEEK 1: CORE & FOUNDATIONS',
        description:
          'Explore HTML, CSS, JavaScript and modern frontend development fundamentals.',
      },
      {
        title: 'WEEK 2: INTERMEDIATE MECHANICS',
        description:
          'Explore React, APIs, Node.js and Express backend development.',
      },
      {
        title: 'WEEK 3: ADVANCED ARCHITECTURES',
        description:
          'Explore databases, authentication and full-stack application architecture.',
      },
      {
        title: 'WEEK 4: PRODUCTION & DEPLOYMENTS',
        description:
          'Explore Git, deployment, optimization and production-ready applications.',
      },
    ],

    roadmap: [
      {
        title: 'WEEK 1',
        subtitle: 'Core & Foundations',
        description:
          'Explore HTML, CSS, JavaScript and modern frontend development fundamentals.',
        days: [
          'Day 1: HTML and semantic structure',
          'Day 2: CSS layouts and responsive design',
          'Day 3: JavaScript fundamentals',
          'Day 4: DOM manipulation and events',
          'Day 5: Modern JavaScript',
          'Day 6: Weekly project and review',
        ],
      },
      {
        title: 'WEEK 2',
        subtitle: 'Intermediate Mechanics',
        description:
          'Explore React, APIs, Node.js and Express backend development.',
        days: [
          'Day 1: React fundamentals',
          'Day 2: Components and props',
          'Day 3: State management and hooks',
          'Day 4: Node.js fundamentals',
          'Day 5: Express and REST APIs',
          'Day 6: Frontend-backend integration',
        ],
      },
      {
        title: 'WEEK 3',
        subtitle: 'Advanced Architectures',
        description:
          'Explore databases, authentication and full-stack application architecture.',
        days: [
          'Day 1: MongoDB fundamentals',
          'Day 2: Database design',
          'Day 3: Authentication',
          'Day 4: Authorization and security',
          'Day 5: Full-stack architecture',
          'Day 6: Project implementation',
        ],
      },
      {
        title: 'WEEK 4',
        subtitle: 'Production & Deployments',
        description:
          'Explore Git, deployment, optimization and production-ready applications.',
        days: [
          'Day 1: Git and GitHub',
          'Day 2: Production configuration',
          'Day 3: Frontend deployment',
          'Day 4: Backend deployment',
          'Day 5: Performance optimization',
          'Day 6: Final full-stack project',
        ],
      },
    ],

    projects: [
      'Modern React Web Application',
      'Full Stack CRUD Application',
      'Production-ready Full Stack Capstone',
    ],

    brochure:
      'Download the complete Full Stack Development program brochure for curriculum, projects and program information.',
  },

  'data-science': {
    title: 'Data Science',
    category: 'TECH & DEVELOPMENT',
    image: '/assets/programs-reference-3.png',
    description:
      'Learn Python, statistics, SQL, machine learning and data analysis to solve real-world business problems.',
    duration: '2 Month',
    mode: 'Online',
    fee: '₹12,000',
    focus:
      'Python, Statistics, SQL, Pandas, Visualization, Machine Learning, Predictive Analytics',

    weeks: [
      {
        title: 'WEEK 1: CORE & FOUNDATIONS',
        description:
          'Explore Python, statistics and exploratory data analysis fundamentals.',
      },
      {
        title: 'WEEK 2: INTERMEDIATE MECHANICS',
        description:
          'Explore SQL, data cleaning and feature engineering.',
      },
      {
        title: 'WEEK 3: ADVANCED ARCHITECTURES',
        description:
          'Explore machine learning and predictive analytics.',
      },
      {
        title: 'WEEK 4: PRODUCTION & DEPLOYMENTS',
        description:
          'Explore complete data science projects and model deployment.',
      },
    ],

    roadmap: [
      {
        title: 'WEEK 1',
        subtitle: 'Core & Foundations',
        description:
          'Explore Python, statistics and exploratory data analysis fundamentals.',
        days: [
          'Day 1: Python for Data Science',
          'Day 2: NumPy fundamentals',
          'Day 3: Pandas fundamentals',
          'Day 4: Statistics',
          'Day 5: Exploratory Data Analysis',
          'Day 6: Weekly data analysis project',
        ],
      },
      {
        title: 'WEEK 2',
        subtitle: 'Intermediate Mechanics',
        description:
          'Explore SQL, data cleaning and feature engineering.',
        days: [
          'Day 1: SQL fundamentals',
          'Day 2: Advanced SQL queries',
          'Day 3: Data cleaning',
          'Day 4: Feature engineering',
          'Day 5: Data visualization',
          'Day 6: Analytics case study',
        ],
      },
      {
        title: 'WEEK 3',
        subtitle: 'Advanced Architectures',
        description:
          'Explore machine learning and predictive analytics.',
        days: [
          'Day 1: Regression',
          'Day 2: Classification',
          'Day 3: Clustering',
          'Day 4: Model evaluation',
          'Day 5: Feature selection',
          'Day 6: Machine learning project',
        ],
      },
      {
        title: 'WEEK 4',
        subtitle: 'Production & Deployments',
        description:
          'Explore complete data science projects and model deployment.',
        days: [
          'Day 1: Model pipelines',
          'Day 2: Model serialization',
          'Day 3: API development',
          'Day 4: Deployment',
          'Day 5: Business analytics',
          'Day 6: Final data science project',
        ],
      },
    ],

    projects: [
      'Exploratory Data Analysis Project',
      'Business Prediction System',
      'End-to-End Data Science Capstone',
    ],

    brochure:
      'Download the complete Data Science program brochure for curriculum, projects and program information.',
  },

  'data-analytics': {
    title: 'Data Analytics',
    category: 'BUSINESS & CORE',
    image: '/assets/programs-reference-6.png',
    description:
      'Build interactive dashboards and reports. Master advanced Excel, SQL query optimization, PowerBI dashboards, and reporting.',
    duration: '2 Month',
    mode: 'Online',
    fee: '₹12,000',
    focus: 'Excel, SQL, Power BI, Data Cleaning, Dashboards, Business Intelligence',

    weeks: [
      {
        title: 'WEEK 1: CORE & FOUNDATIONS',
        description:
          'Explore Excel, data cleaning and analytics fundamentals.',
      },
      {
        title: 'WEEK 2: INTERMEDIATE MECHANICS',
        description:
          'Explore SQL queries and database analysis.',
      },
      {
        title: 'WEEK 3: ADVANCED ARCHITECTURES',
        description:
          'Explore Power BI dashboards and business intelligence.',
      },
      {
        title: 'WEEK 4: PRODUCTION & DEPLOYMENTS',
        description:
          'Explore reporting, dashboards and final analytics projects.',
      },
    ],

    roadmap: [
      {
        title: 'WEEK 1',
        subtitle: 'Core & Foundations',
        description:
          'Explore Excel, data cleaning and analytics fundamentals.',
        days: [
          'Day 1: Excel fundamentals',
          'Day 2: Advanced Excel formulas',
          'Day 3: Data cleaning',
          'Day 4: Pivot tables',
          'Day 5: Charts and visualization',
          'Day 6: Excel analytics project',
        ],
      },
      {
        title: 'WEEK 2',
        subtitle: 'Intermediate Mechanics',
        description:
          'Explore SQL queries and database analysis.',
        days: [
          'Day 1: SQL basics',
          'Day 2: Filtering and aggregation',
          'Day 3: Joins',
          'Day 4: Subqueries',
          'Day 5: Advanced SQL',
          'Day 6: SQL case study',
        ],
      },
      {
        title: 'WEEK 3',
        subtitle: 'Advanced Architectures',
        description:
          'Explore Power BI dashboards and business intelligence.',
        days: [
          'Day 1: Power BI fundamentals',
          'Day 2: Data modeling',
          'Day 3: DAX fundamentals',
          'Day 4: Interactive dashboards',
          'Day 5: KPI design',
          'Day 6: Dashboard project',
        ],
      },
      {
        title: 'WEEK 4',
        subtitle: 'Production & Deployments',
        description:
          'Explore reporting, dashboards and final analytics projects.',
        days: [
          'Day 1: Business reporting',
          'Day 2: Dashboard optimization',
          'Day 3: Analytics storytelling',
          'Day 4: Executive dashboards',
          'Day 5: Business case study',
          'Day 6: Final analytics project',
        ],
      },
    ],

    projects: [
      'Interactive Power BI Dashboard',
      'SQL Business Analysis Project',
      'End-to-End Analytics Case Study',
    ],

    brochure:
      'Download the complete Data Analytics program brochure for curriculum, projects and program information.',
  },

  'embedded-systems': {
    title: 'Embedded Systems',
    category: 'ENGINEERING & VLSI',
    image: '/assets/programs-reference-4.png',
    description:
      'Bridge hardware and software. Configure RTOS modules, program ARM Cortex MCUs, and interface sensors over serial protocols.',
    duration: '2 Month',
    mode: 'Online',
    fee: '₹12,000',
    focus:
      'Embedded C, ARM Cortex, Microcontrollers, RTOS, Sensors, Communication Protocols',

    weeks: [
      {
        title: 'WEEK 1: CORE & FOUNDATIONS',
        description:
          'Explore embedded systems, C programming and microcontroller fundamentals.',
      },
      {
        title: 'WEEK 2: INTERMEDIATE MECHANICS',
        description:
          'Explore ARM Cortex, GPIO, timers and communication protocols.',
      },
      {
        title: 'WEEK 3: ADVANCED ARCHITECTURES',
        description:
          'Explore RTOS, sensors and embedded system architecture.',
      },
      {
        title: 'WEEK 4: PRODUCTION & DEPLOYMENTS',
        description:
          'Explore real-world embedded projects and system integration.',
      },
    ],

    roadmap: [
      {
        title: 'WEEK 1',
        subtitle: 'Core & Foundations',
        description:
          'Explore embedded systems, C programming and microcontroller fundamentals.',
        days: [
          'Day 1: Embedded systems introduction',
          'Day 2: Embedded C',
          'Day 3: Memory and pointers',
          'Day 4: Microcontroller architecture',
          'Day 5: GPIO programming',
          'Day 6: Embedded lab assessment',
        ],
      },
      {
        title: 'WEEK 2',
        subtitle: 'Intermediate Mechanics',
        description:
          'Explore ARM Cortex, GPIO, timers and communication protocols.',
        days: [
          'Day 1: ARM Cortex fundamentals',
          'Day 2: Timers',
          'Day 3: Interrupts',
          'Day 4: UART communication',
          'Day 5: SPI and I2C',
          'Day 6: Hardware integration',
        ],
      },
      {
        title: 'WEEK 3',
        subtitle: 'Advanced Architectures',
        description:
          'Explore RTOS, sensors and embedded system architecture.',
        days: [
          'Day 1: RTOS fundamentals',
          'Day 2: Tasks and scheduling',
          'Day 3: Sensors',
          'Day 4: Sensor interfaces',
          'Day 5: System architecture',
          'Day 6: Embedded project',
        ],
      },
      {
        title: 'WEEK 4',
        subtitle: 'Production & Deployments',
        description:
          'Explore real-world embedded projects and system integration.',
        days: [
          'Day 1: System integration',
          'Day 2: Debugging',
          'Day 3: Optimization',
          'Day 4: Testing',
          'Day 5: Final project development',
          'Day 6: Final assessment',
        ],
      },
    ],

    projects: [
      'ARM Microcontroller Project',
      'IoT Sensor Interface',
      'RTOS-based Embedded System',
    ],

    brochure:
      'Download the complete Embedded Systems program brochure for curriculum, projects and program information.',
  },

  'cyber-security': {
    title: 'Cyber Security',
    category: 'TECH & DEVELOPMENT',
    image: '/assets/programs-reference-5.png',
    description:
      'Learn cybersecurity fundamentals, network security, web security, vulnerability assessment and defensive practices.',
    duration: '2 Month',
    mode: 'Online',
    fee: '₹12,000',
    focus:
      'Networking, Linux, Web Security, OWASP, Vulnerability Assessment, Security Monitoring',

    weeks: [
      {
        title: 'WEEK 1: CORE & FOUNDATIONS',
        description:
          'Explore networking, Linux and cybersecurity fundamentals.',
      },
      {
        title: 'WEEK 2: INTERMEDIATE MECHANICS',
        description:
          'Explore web security and application security fundamentals.',
      },
      {
        title: 'WEEK 3: ADVANCED ARCHITECTURES',
        description:
          'Explore security monitoring, vulnerability assessment and defensive security.',
      },
      {
        title: 'WEEK 4: PRODUCTION & DEPLOYMENTS',
        description:
          'Explore security projects, incident response and practical workflows.',
      },
    ],

    roadmap: [
      {
        title: 'WEEK 1',
        subtitle: 'Core & Foundations',
        description:
          'Explore networking, Linux and cybersecurity fundamentals.',
        days: [
          'Day 1: Cybersecurity introduction',
          'Day 2: Networking fundamentals',
          'Day 3: Linux fundamentals',
          'Day 4: Security concepts',
          'Day 5: Authentication and access control',
          'Day 6: Security lab assessment',
        ],
      },
      {
        title: 'WEEK 2',
        subtitle: 'Intermediate Mechanics',
        description:
          'Explore web security and application security fundamentals.',
        days: [
          'Day 1: Web application fundamentals',
          'Day 2: OWASP fundamentals',
          'Day 3: Secure authentication',
          'Day 4: API security',
          'Day 5: Common application risks',
          'Day 6: Security case study',
        ],
      },
      {
        title: 'WEEK 3',
        subtitle: 'Advanced Architectures',
        description:
          'Explore security monitoring, vulnerability assessment and defensive security.',
        days: [
          'Day 1: Vulnerability assessment concepts',
          'Day 2: Security monitoring',
          'Day 3: Logs and alerts',
          'Day 4: Incident response',
          'Day 5: Defensive security',
          'Day 6: Security project',
        ],
      },
      {
        title: 'WEEK 4',
        subtitle: 'Production & Deployments',
        description:
          'Explore security projects, incident response and practical workflows.',
        days: [
          'Day 1: Security assessment',
          'Day 2: Security documentation',
          'Day 3: Incident handling',
          'Day 4: Security controls',
          'Day 5: Final security project',
          'Day 6: Final assessment',
        ],
      },
    ],

    projects: [
      'Web Security Assessment',
      'Security Monitoring Project',
      'Cybersecurity Case Study',
    ],

    brochure:
      'Download the complete Cyber Security program brochure for curriculum, projects and program information.',
  },

  'hr-management': {
    title: 'HR Management',
    category: 'BUSINESS & CORE',
    image: '/assets/programs-reference-5.png',
    description:
      'Develop personnel management skills. Configure payroll systems, design recruitment cycles, and manage compliance audits.',
    duration: '2 Month',
    mode: 'Online',
    fee: '₹12,000',
    focus:
      'Recruitment, Payroll Systems, Employee Relations, Labor Laws, KPI Tracking',

    weeks: [
      {
        title: 'WEEK 1: CORE & FOUNDATIONS',
        description:
          'Explore fundamental topics from HR Roles & Operations to Salary Negotiation Steps.',
      },
      {
        title: 'WEEK 2: INTERMEDIATE MECHANICS',
        description:
          'Explore fundamental topics from Onboarding Flow Optimization to Labor Law Compliance Audits.',
      },
      {
        title: 'WEEK 3: ADVANCED ARCHITECTURES',
        description:
          'Explore fundamental topics from Workplace Harassment Prevention to Diversity & Inclusion Frameworks.',
      },
      {
        title: 'WEEK 4: PRODUCTION & DEPLOYMENTS',
        description:
          'Explore fundamental topics from Remote Work Policy Guides to Strategic Workforce Layouts.',
      },
    ],

    roadmap: [
      {
        title: 'WEEK 1',
        subtitle: 'Core & Foundations',
        description:
          'Explore fundamental topics from HR Roles & Operations to Salary Negotiation Steps.',
        days: [
          'Day 1: Introduction to Core & Foundations & setup basics',
          'Day 2: Core modules, definitions, and HR process patterns',
          'Day 3: Practical hands-on lab and process considerations',
          'Day 4: Advanced structures, integration, and compliance controls',
          'Day 5: Production compilation, advanced implementations & weekly review',
          'Day 6: Weekly review, hands-on lab integration, and mentored assessment audit.',
        ],
      },
      {
        title: 'WEEK 2',
        subtitle: 'Intermediate Mechanics',
        description:
          'Explore fundamental topics from Onboarding Flow Optimization to Labor Law Compliance Audits.',
        days: [
          'Day 1: Introduction to Intermediate Mechanics & setup basics',
          'Day 2: Recruitment workflow and onboarding',
          'Day 3: Employee lifecycle management',
          'Day 4: Payroll systems and HR operations',
          'Day 5: Labor law and compliance',
          'Day 6: Weekly review and practical assessment',
        ],
      },
      {
        title: 'WEEK 3',
        subtitle: 'Advanced Architectures',
        description:
          'Explore fundamental topics from Workplace Harassment Prevention to Diversity & Inclusion Frameworks.',
        days: [
          'Day 1: Workplace policies',
          'Day 2: Employee relations',
          'Day 3: Workplace harassment prevention',
          'Day 4: Diversity and inclusion',
          'Day 5: Performance management',
          'Day 6: Advanced HR case study',
        ],
      },
      {
        title: 'WEEK 4',
        subtitle: 'Production & Deployments',
        description:
          'Explore fundamental topics from Remote Work Policy Guides to Strategic Workforce Layouts.',
        days: [
          'Day 1: Remote work policies',
          'Day 2: Strategic workforce planning',
          'Day 3: HR analytics',
          'Day 4: KPI tracking',
          'Day 5: Strategic workforce layouts',
          'Day 6: Final HR management assessment',
        ],
      },
    ],

    projects: [
      'Recruitment Workflow Case Study',
      'HR Operations & Payroll Project',
      'Strategic Workforce Management Case Study',
    ],

    brochure:
      'Download the complete HR Management program brochure for curriculum, projects and program information.',
  },
}

const tabs = [
  { id: 'overview', label: 'OVERVIEW' },
  { id: 'curriculum', label: 'CURRICULUM' },
  { id: 'roadmap', label: 'ROADMAP' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'brochure', label: 'BROCHURE' },
]

export default function CourseDetails({ slug, onClose }) {
  const course =
    courseData[slug] || courseData['hr-management']

  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  const handleEnroll = () => {
    onClose()

    setTimeout(() => {
      document
        .getElementById('contact')
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="fixed inset-0 z-[100]">
      {/* DARK + BLURRED BACKGROUND */}
      <div
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-[3px]"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 flex h-full items-center justify-center px-3 py-5 sm:px-6">
        <div
          className="relative flex h-[calc(100vh-40px)] w-full max-w-[438px] flex-col overflow-hidden rounded-[1.7rem] bg-white shadow-[0_30px_100px_rgba(0,0,0,.35)]"
          onClick={(event) => event.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            aria-label="Close program details"
            className="absolute right-4 top-4 z-30 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          >
            <X size={15} />
          </button>

          {/* HEADER */}
          <div className="shrink-0 bg-white px-5 pt-6 sm:px-6">
            <h2 className="pr-10 text-[19px] font-extrabold text-slate-950">
              {course.title}
            </h2>

            {/* TABS */}
            <div className="mt-4 flex gap-5 overflow-x-auto border-b border-slate-100 no-scrollbar">
              {tabs.map((tab) => {
                const active = activeTab === tab.id

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative shrink-0 pb-3 text-[9px] font-bold transition ${
                      active
                        ? 'text-slate-950'
                        : 'text-slate-400 hover:text-slate-700'
                    }`}
                  >
                    {tab.label}

                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-slate-950" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* CONTENT */}
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6">
            {activeTab === 'overview' && (
              <Overview course={course} />
            )}

            {activeTab === 'curriculum' && (
              <Curriculum course={course} />
            )}

            {activeTab === 'roadmap' && (
              <Roadmap course={course} />
            )}

            {activeTab === 'projects' && (
              <Projects course={course} />
            )}

            {activeTab === 'brochure' && (
              <Brochure course={course} />
            )}
          </div>

          {/* BOTTOM BUTTON */}
          <div className="shrink-0 border-t border-slate-100 bg-white px-5 py-4 sm:px-6">
            <button
              onClick={handleEnroll}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-slate-800"
            >
              ENROLL & REGISTER NOW ({course.fee}) →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   OVERVIEW
========================================================= */

function Overview({ course }) {
  return (
    <div className="pt-1">
      <div className="rounded-xl bg-slate-50 p-3.5">
        <p className="text-[10px] leading-5 text-slate-600">
          {course.description}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-5">
        <Info
          icon={Clock3}
          label="DURATION"
          value={course.duration}
        />

        <Info
          icon={Target}
          label="FOCUS"
          value={course.focus}
        />

        <Info
          icon={Laptop}
          label="MODE"
          value={course.mode}
        />

        <Info
          icon={BookOpen}
          label="PROGRAM TUITION FEE"
          value={course.fee}
          purple
        />
      </div>
    </div>
  )
}

/* =========================================================
   CURRICULUM
========================================================= */

function Curriculum({ course }) {
  return (
    <div className="space-y-2.5 pt-1">
      {course.weeks.map((week, index) => (
        <div
          key={week.title}
          className="rounded-xl bg-slate-50 px-3 py-3"
        >
          <div className="flex items-start gap-2">
            <span className="mt-[1px] grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-slate-950 text-[7px] font-bold text-white">
              {index + 1}
            </span>

            <div>
              <h3 className="text-[9px] font-extrabold text-slate-800">
                {week.title}
              </h3>

              <p className="mt-1 text-[9px] leading-4 text-slate-600">
                {week.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* =========================================================
   ROADMAP
========================================================= */

function Roadmap({ course }) {
  return (
    <div className="relative pl-5 pt-1">
      {/* VERTICAL LINE */}
      <div className="absolute bottom-0 left-[6px] top-0 w-px bg-slate-200" />

      <div className="space-y-6">
        {course.roadmap.map((week, index) => (
          <div key={week.title} className="relative">
            <span className="absolute -left-[19px] top-0 grid h-3.5 w-3.5 place-items-center rounded-full bg-slate-950 text-[7px] font-bold text-white">
              {index + 1}
            </span>

            <h3 className="text-[9px] font-extrabold text-slate-900">
              {week.title}
            </h3>

            <h4 className="mt-1 text-[10px] font-bold text-slate-700">
              {week.subtitle}
            </h4>

            <p className="mt-1 text-[9px] leading-4 text-slate-500">
              {week.description}
            </p>

            <div className="mt-2 space-y-1">
              {week.days.map((day) => (
                <div
                  key={day}
                  className="relative pl-3 text-[9px] leading-4 text-slate-600"
                >
                  <span className="absolute left-0 top-[7px] h-1 w-1 rounded-full bg-slate-400" />
                  {day}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* =========================================================
   PROJECTS
========================================================= */

function Projects({ course }) {
  return (
    <div className="pt-1">
      <div className="rounded-xl bg-slate-50 p-4">
        <div className="flex items-center gap-2">
          <BriefcaseBusiness size={15} className="text-slate-900" />

          <h3 className="text-[11px] font-extrabold text-slate-900">
            HANDS-ON PROJECTS
          </h3>
        </div>

        <div className="mt-4 space-y-3">
          {course.projects.map((project, index) => (
            <div
              key={project}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                size={14}
                className="mt-0.5 shrink-0 text-violet-600"
              />

              <div>
                <span className="text-[9px] font-bold text-slate-400">
                  PROJECT {index + 1}
                </span>

                <p className="mt-0.5 text-[10px] font-semibold leading-4 text-slate-700">
                  {project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   BROCHURE
========================================================= */

function Brochure({ course }) {
  return (
    <div className="pt-1">
      <div className="rounded-xl bg-slate-50 p-5 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-950 shadow-sm">
          <FileText size={22} />
        </div>

        <h3 className="mt-4 text-[13px] font-extrabold text-slate-950">
          {course.title} Brochure
        </h3>

        <p className="mx-auto mt-2 max-w-[290px] text-[10px] leading-5 text-slate-500">
          {course.brochure}
        </p>

        <button
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-[9px] font-bold uppercase text-white transition hover:bg-slate-800"
          onClick={() => {
            alert('Brochure download can be connected here.')
          }}
        >
          DOWNLOAD BROCHURE
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  )
}

/* =========================================================
   INFO ITEM
========================================================= */

function Info({
  icon: Icon,
  label,
  value,
  purple = false,
}) {
  return (
    <div>
      <div className="flex items-center gap-1 text-[8px] font-bold tracking-wide text-slate-400">
        <Icon size={11} />
        {label}
      </div>

      <p
        className={`mt-1 text-[9px] font-semibold leading-4 ${
          purple ? 'text-violet-700' : 'text-slate-700'
        }`}
      >
        {value}
      </p>
    </div>
  )
}
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  ShieldCheck,
  Users,
  Star,
  Clock3,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from './SectionHeading'
import CourseDetails from './CourseDetails'

const programs = [
  {
    title: 'AI & Machine Learning',
    category: 'TECH & DEVELOPMENT',
    rating: '4.9',
    image: '/assets/programs-reference-1.png',
    icon: BrainCircuit,
    description:
      'Build practical AI and machine learning skills. Learn data preprocessing, model development, evaluation and deployment.',
    duration: '2 Month',
    fee: '₹12,000',
    slug: 'ai-machine-learning',
  },
  {
    title: 'Full Stack Development',
    category: 'TECH & DEVELOPMENT',
    rating: '4.8',
    image: '/assets/programs-reference-2.png',
    icon: Code2,
    description:
      'Build modern web applications using frontend, backend, databases, APIs and production deployment workflows.',
    duration: '2 Month',
    fee: '₹12,000',
    slug: 'full-stack-development',
  },
  {
    title: 'Data Science',
    category: 'TECH & DEVELOPMENT',
    rating: '4.9',
    image: '/assets/programs-reference-3.png',
    icon: BarChart3,
    description:
      'Learn Python, statistics, SQL, machine learning and data analysis to solve real-world business problems.',
    duration: '2 Month',
    fee: '₹12,000',
    slug: 'data-science',
  },
  {
    title: 'Data Analytics',
    category: 'BUSINESS & CORE',
    rating: '4.7',
    image: '/assets/programs-reference-6.png',
    icon: Database,
    description:
      'Build interactive dashboards and reports. Master advanced Excel, SQL query optimization, PowerBI dashboards, and reporting.',
    duration: '2 Month',
    fee: '₹12,000',
    slug: 'data-analytics',
  },
  {
    title: 'Embedded Systems',
    category: 'ENGINEERING & VLSI',
    rating: '4.8',
    image: '/assets/programs-reference-4.png',
    icon: Cpu,
    description:
      'Bridge hardware and software. Configure RTOS modules, program ARM Cortex MCUs, and interface sensors over serial protocols.',
    duration: '2 Month',
    fee: '₹12,000',
    slug: 'embedded-systems',
  },
  {
    title: 'Cyber Security',
    category: 'TECH & DEVELOPMENT',
    rating: '4.9',
    image: '/assets/programs-reference-5.png',
    icon: ShieldCheck,
    description:
      'Learn cybersecurity fundamentals, network security, web security, vulnerability assessment and defensive practices.',
    duration: '2 Month',
    fee: '₹12,000',
    slug: 'cyber-security',
  },
  {
    title: 'HR Management',
    category: 'BUSINESS & CORE',
    rating: '4.5',
    image: '/assets/programs-reference-5.png',
    icon: Users,
    description:
      'Develop personnel management skills. Configure payroll systems, design recruitment cycles, and manage compliance audits.',
    duration: '2 Month',
    fee: '₹12,000',
    slug: 'hr-management',
  },
]

const categories = [
  'All',
  'TECH & DEVELOPMENT',
  'ENGINEERING & VLSI',
  'BUSINESS & CORE',
]

export default function Programs() {
  const [category, setCategory] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState(null)

  const filteredPrograms = useMemo(() => {
    if (category === 'All') return programs

    return programs.filter((program) => program.category === category)
  }, [category])

  return (
    <>
      <section
        id="programs"
        className="scroll-mt-20 bg-white py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Technology programs"
            title="Available training paths"
            description="Explore our industry-focused programs designed to build practical skills through projects, mentorship and hands-on learning."
          />

          {/* CATEGORY FILTER */}
          <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2 md:justify-center">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-[11px] font-bold transition ${
                  category === item
                    ? 'border-slate-950 bg-slate-950 text-white'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PROGRAM CARDS */}
          <motion.div
            layout
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPrograms.map((program, index) => {
              const Icon = program.icon

              return (
                <motion.article
                  layout
                  key={program.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.06)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[205px] overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    {/* ONLINE */}
                    <span className="absolute left-4 top-4 rounded-md bg-slate-950 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-white">
                      ONLINE
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-[0.12em] text-slate-500">
                        {program.category}
                      </span>

                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500">
                        <Star size={10} fill="currentColor" />
                        {program.rating}
                      </span>
                    </div>

                    <h3 className="mt-3 text-[17px] font-extrabold text-slate-950">
                      {program.title}
                    </h3>

                    <p className="mt-2 min-h-[55px] text-[11px] leading-5 text-slate-500">
                      {program.description}
                    </p>

                    {/* DETAILS */}
                    <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-400">Duration</span>
                        <span className="font-bold text-slate-800">
                          {program.duration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-slate-400">
                          Certification Fee
                        </span>

                        <span className="font-bold text-violet-700">
                          {program.fee}
                        </span>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => setSelectedCourse(program.slug)}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-[10px] font-bold uppercase tracking-wide text-white transition hover:bg-slate-800"
                    >
                      PROGRAM DETAILS
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* COURSE MODAL */}
      {selectedCourse && (
        <CourseDetails
          slug={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  )
}
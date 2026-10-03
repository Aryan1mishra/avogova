import { motion } from 'framer-motion'
import {
  ArrowRight,
  Play,
  Sparkles,
  ChevronDown,
} from 'lucide-react'

export default function Hero() {
  const navItems = [
    { label: 'Programs', href: '#programs' },
    { label: 'Internships', href: '#internships' },
    { label: 'About', href: '#about' },
    { label: 'Why Avegenx', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <section
      id="hero"
      className="w-full px-4 pt-2 pb-6 sm:px-6 md:px-12"
    >
      {/* Main Hero Card */}
      <div className="relative mx-auto flex h-[600px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[32px] border border-slate-200/70 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] sm:rounded-[40px] lg:rounded-[48px]">

        {/* ================= VIDEO BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full scale-105 object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />

          {/* Dark / white gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950/75 to-transparent" />

          {/* Subtle overall overlay */}
          <div className="absolute inset-0 bg-slate-950/10" />
        </div>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-20 flex flex-1 items-start px-7 pt-10 sm:px-10 sm:pt-12 md:px-16 md:pt-16 lg:px-20">

          <div className="flex max-w-3xl flex-col items-start text-left">

            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-xl"
            >
              <Sparkles
                size={14}
                className="text-[#4ab7e0]"
              />

              Learn today. Build tomorrow.
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="font-display max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[72px]"
            >
              Empowering the{' '}
              <span className="text-[#4ab7e0]">
                next generation
              </span>{' '}
              of tech leaders.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.18,
              }}
              className="mt-6 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7 md:text-lg"
            >
              Practical technology education, industry-oriented
              projects and career-focused internships designed to
              bridge academic learning with real engineering work.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.26,
              }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#programs"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#e2d64b] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-teal-900/20 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-200"
              >
                Explore Programs

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <Play size={15} fill="currentColor" />

                Discover Avegenx
              </a>
            </motion.div>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-white/70"
            >
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4ab7e0]/20 text-[#4ab7e0]">
                  ✓
                </span>
                Live Projects
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4ab7e0]/20 text-[#4ab7e0]">
                  ✓
                </span>
                Industry Mentorship
              </span>

              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4ab7e0]/20 text-[#4ab7e0]">
                  ✓
                </span>
                Verified Credentials
              </span>
            </motion.div>
          </div>
        </div>

        {/* ================= FLOATING NAVIGATION ================= */}
        {/* Visible ONLY on laptop/desktop */}
        <div className="absolute bottom-7 left-1/2 z-30 hidden w-[calc(100%-2rem)] -translate-x-1/2 lg:flex sm:bottom-9 sm:w-auto">

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mx-auto flex w-full items-center justify-center gap-1 overflow-x-auto rounded-full border border-white/40 bg-white/90 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:w-auto sm:justify-start"
          >

            {/* Home */}
            <a
              href="#hero"
              className="shrink-0 rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800 sm:px-5"
            >
              Home
            </a>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="shrink-0 rounded-full px-3 py-2.5 text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 sm:px-4"
              >
                {item.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className="group hidden shrink-0 items-center gap-1.5 rounded-full bg-teal-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-teal-300 sm:inline-flex"
            >
              Get Started

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </motion.nav>
        </div>

        {/* ================= SCROLL INDICATOR ================= */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="absolute bottom-28 right-8 z-20 hidden items-center gap-2 text-xs font-semibold text-white/70 lg:flex"
        >
          Scroll to explore

          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ChevronDown size={15} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const years = [
  [
    '2023',
    'Foundation',
    'Inception & core build',
    'Founded and launched early AWS and cloud-computing learning tracks.',
    '1st cohort launch',
  ],
  [
    '2024',
    'Expansion',
    'Ecosystem expansion',
    'Expanded the syllabus into data science and advanced cybersecurity.',
    '400+ graduated',
  ],
  [
    '2025',
    'Partnerships',
    'Enterprise integration',
    'Expanded enterprise-facing partnerships and industry certification pathways.',
    '1,000+ placements',
  ],
  [
    '2026',
    'Next-gen',
    'The digital epoch',
    'Introduced custom sandbox environments and expanded modern web-engineering pathways.',
    '100% core placed',
  ],
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="scroll-mt-20 bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <SectionHeading
          eyebrow="Avegenx journey"
          title="Laying the foundational timeline"
          description="A visual progression based on the timeline presented on the current Avegenx website."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {years.map(
            ([year, badge, title, text, stat], i) => (
              <motion.article
                key={year}
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                className="
                  group
                  rounded-[1.75rem]
                  border
                  border-slate-200
                  bg-slate-50
                  p-7
                  text-slate-950
                  shadow-sm
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-2
                  hover:border-[#0d173b]
                  hover:bg-[#0d173b]
                  hover:text-white
                  hover:shadow-[0_20px_50px_rgba(13,23,59,0.20)]
                "
              >

                {/* Year + Badge */}
                <div className="flex items-center justify-between gap-3">

                  <span
                    className="
                      font-display
                      text-4xl
                      font-extrabold
                      text-[#0d173b]
                      transition-colors
                      duration-300
                      group-hover:text-[#4ab7e0]
                    "
                  >
                    {year}
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-white
                      px-3
                      py-1
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-slate-600
                      transition-all
                      duration-300

                      group-hover:bg-[#4ab7e0]
                      group-hover:text-[#0d173b]
                    "
                  >
                    {badge}
                  </span>

                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    font-display
                    text-lg
                    font-extrabold
                    uppercase
                    text-[#0d173b]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                    transition-colors
                    duration-300
                    group-hover:text-white/70
                  "
                >
                  {text}
                </p>

                {/* Bottom Stat */}
                <div
                  className="
                    mt-8
                    border-t
                    border-slate-200
                    pt-5
                    text-xs
                    font-bold
                    text-[#0d173b]
                    transition-all
                    duration-300

                    group-hover:border-white/20
                    group-hover:text-[#4ab7e0]
                  "
                >
                  Key stat: {stat}
                </div>

              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
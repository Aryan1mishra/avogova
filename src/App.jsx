import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import CourseChatbot from "./components/CourseChatbot";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Stats from './components/Stats'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Journey from './components/Journey'
import Programs from './components/Programs'
import ResourceHub from './components/ResourceHub'
import InternshipCTA from './components/InternshipCTA'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50 text-slate-950 selection:bg-teal-200 selection:text-slate-950">
            {/* NAVBAR */}
            <Navbar
                open={menuOpen}
                setOpen={setMenuOpen}
            />

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <MobileMenu setOpen={setMenuOpen} />
                )}
            </AnimatePresence>

            {/* MAIN WEBSITE */}
            <main>
                <Hero />

                <TrustBar />

                <Stats />

                <About />

                <WhyUs />

                <Journey />

                <Programs />

                <ResourceHub />

                <InternshipCTA />

                <Contact />

                <FAQ />
            </main>

            {/* FOOTER */}
            <Footer />
            <CourseChatbot />
        </div>
    )
}

function MobileMenu({ setOpen }) {
    const links = [
        ['About', 'about'],
        ['Programs', 'programs'],
        ['Internships', 'internships'],
        ['Journey', 'journey'],
        ['FAQ', 'faq'],
        ['Contact', 'contact'],
    ]

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -10,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: -10,
            }}
            className="fixed inset-x-3 top-[82px] z-50 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
        >
            <div className="grid gap-1">
                {links.map(([label, id]) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                    >
                        {label}
                    </a>
                ))}
            </div>

            <a
                href="#internships"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 font-bold text-white"
            >
                Apply for Internship
                <ArrowUpRight size={17} />
            </a>
        </motion.div>
    )
}
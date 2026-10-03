import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [['About','about'],['Programs','programs'],['Internships','internships'],['Journey','journey'],['FAQ','faq'],['Contact','contact']]

export default function Navbar({open,setOpen}) {
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
    <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex">
        {links.map(([label,id])=><a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-600 transition hover:text-teal-700">{label}</a>)}
      </nav>
      <div className="hidden items-center gap-3 lg:flex">
        <a href="tel:+916360111080" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:border-teal-300">+91 6360111080</a>
        <a href="#internships" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-800">Apply Internship <ArrowUpRight size={16}/></a>
      </div>
      <button onClick={()=>setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white lg:hidden" aria-label="Toggle navigation" aria-expanded={open}>{open?<X size={20}/>:<Menu size={20}/>}</button>
    </div>
  </header>
}

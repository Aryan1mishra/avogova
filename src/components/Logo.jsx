export default function Logo({light=false}) {
  return <a href="#top" className="flex items-center gap-3" aria-label="Avegenx Solutions home">
    <span className={`grid h-10 w-10 place-items-center rounded-xl font-display text-lg font-black shadow-sm ${light ? 'bg-teal-300 text-slate-950' : 'bg-slate-950 text-teal-300'}`}>A</span>
    <span className="leading-none"><span className={`block font-display text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-slate-950'}`}>AVEGENX</span><span className={`mt-1 block text-[8px] font-bold tracking-[.38em] ${light ? 'text-teal-300' : 'text-teal-700'}`}>SOLUTIONS</span></span>
  </a>
}

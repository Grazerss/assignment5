import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Explore clubs', to: '/clubs' },
  { label: 'About', to: '/about' },
]

export default function Navbar({ joinedCount = 0 }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const linkClass = ({ isActive }) => `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-[#eeedff] text-[#5b4fe8]' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7f8fc]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" className="group flex items-center gap-3" aria-label="Campus Club Finder home" onClick={() => setMobileOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#635bff] text-white shadow-lg shadow-indigo-200 transition group-hover:-rotate-6"><Compass size={22} strokeWidth={2.3} /></span>
          <span className="font-display text-[15px] font-extrabold leading-tight tracking-tight text-slate-950">campus<span className="text-[#635bff]">club</span><br /><span className="text-xs font-semibold tracking-[.15em] text-slate-400">FINDER</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>{item.label}</NavLink>)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600"><span className="h-2 w-2 rounded-full bg-emerald-400" />{joinedCount} joined</div>
          <Link to="/clubs" className="flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#635bff]">Find your club <ArrowUpRight size={16} /></Link>
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {mobileOpen && <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-2">{navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass} onClick={() => setMobileOpen(false)}>{item.label}</NavLink>)}<Link to="/clubs" onClick={() => setMobileOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white">Find your club <ArrowUpRight size={16} /></Link></div></nav>}
    </header>
  )
}

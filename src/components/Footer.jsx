import { Link } from 'react-router-dom'
import { Compass, Heart } from 'lucide-react'

export default function Footer() {
  return <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><Link to="/" className="flex items-center gap-2 font-display font-extrabold text-slate-900"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#635bff] text-white"><Compass size={17} /></span>Campus Club Finder</Link><p className="flex items-center gap-1 text-sm text-slate-500">Made for campus communities <Heart size={14} className="fill-rose-400 text-rose-400" /></p><p className="text-xs text-slate-400">© {new Date().getFullYear()} Campus Club Finder</p></div></footer>
}

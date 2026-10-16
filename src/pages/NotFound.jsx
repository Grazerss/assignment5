import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return <main className="flex min-h-[70vh] items-center justify-center px-5 py-20"><div className="max-w-xl text-center"><span className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-[22px] bg-[#eeedff] text-[#635bff]"><Compass size={30}/></span><p className="text-sm font-extrabold tracking-[.25em] text-[#635bff]">404 · WRONG TURN</p><h1 className="font-display mt-4 text-5xl font-extrabold tracking-[-.06em] text-slate-950 sm:text-6xl">This page wandered off.</h1><p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-500">Looks like this page isn't part of our campus map. Let's get you back somewhere familiar.</p><Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#635bff] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#5148e8]"><ArrowLeft size={16}/> Back to home</Link></div></main>
}

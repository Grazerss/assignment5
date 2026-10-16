import { Link } from 'react-router-dom'
import { ArrowUpRight, Users, CheckCircle2 } from 'lucide-react'

export default function ClubCard({ club, view = 'grid', isJoined = false }) {
  const isList = view === 'list'
  return (
    <article className={`group overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(31,41,55,0.035)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_45px_rgba(67,56,202,0.10)] ${isList ? 'flex flex-col sm:flex-row' : 'flex flex-col'}`}>
      <Link to={`/clubs/${club.id}`} className={`relative block shrink-0 overflow-hidden bg-slate-100 ${isList ? 'h-52 sm:h-auto sm:w-64' : 'h-52'}`} aria-label={`View details for ${club.name}`}>
        <img src={club.image} alt={club.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">{club.category}</span>
        {isJoined && <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm"><CheckCircle2 size={13} /> Joined</span>}
      </Link>
      <div className={`flex min-w-0 flex-1 flex-col p-5 sm:p-6 ${isList ? 'justify-center' : ''}`}>
        <div className="mb-2 flex items-start justify-between gap-3"><h2 className="font-display text-xl font-extrabold tracking-tight text-slate-950 sm:text-[22px]">{club.name}</h2><span className="mt-1 flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-400"><Users size={14} /> {club.members}</span></div>
        <p className="mb-5 max-w-lg text-sm leading-6 text-slate-500">{club.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-xs font-medium text-slate-400">{club.meeting.split(' · ')[0]} meetups</span><Link to={`/clubs/${club.id}`} className="inline-flex items-center gap-2 rounded-full bg-[#f0efff] px-4 py-2.5 text-sm font-bold text-[#5b4fe8] transition hover:bg-[#635bff] hover:text-white">View details <ArrowUpRight size={15} /></Link></div>
      </div>
    </article>
  )
}

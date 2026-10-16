import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Clubs from './pages/Clubs'
import ClubDetail from './pages/ClubDetail'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { useJoinedClubs } from './hooks/useJoinedClubs'

function AppLayout() {
  const { joinedClubs, joinClub } = useJoinedClubs()
  return <div className="flex min-h-screen flex-col"><Navbar joinedCount={joinedClubs.length}/><div className="flex-1"><Routes><Route path="/" element={<Home joinedClubs={joinedClubs}/>} /><Route path="/clubs" element={<Clubs joinedClubs={joinedClubs}/>} /><Route path="/clubs/:clubId" element={<ClubDetail joinedClubs={joinedClubs} joinClub={joinClub}/>} /><Route path="/about" element={<About/>} /><Route path="*" element={<NotFound/>} /></Routes></div><Footer/></div>
}

export default function App() {
  return <BrowserRouter><AppLayout/></BrowserRouter>
}

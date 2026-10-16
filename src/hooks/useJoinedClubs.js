import { useEffect, useState } from 'react'

const STORAGE_KEY = 'campus-club-finder:joined-clubs'

function readJoinedClubs() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    const parsed = stored ? JSON.parse(stored) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function useJoinedClubs() {
  const [joinedClubs, setJoinedClubs] = useState(readJoinedClubs)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(joinedClubs))
    } catch {
      // The app remains usable if browser storage is unavailable.
    }
  }, [joinedClubs])

  const joinClub = (clubId) => {
    setJoinedClubs((current) => current.includes(clubId) ? current : [...current, clubId])
  }

  return { joinedClubs, joinClub }
}

"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { formatNumber } from "../utils/format"
import { useRouter } from "next/navigation"
import { tournaments } from "../data/tournaments"

export function TournamentStats() {
  const router = useRouter()

  const handleTournamentClick = (tournamentId: number) => {
    router.push(`/tournament/tournament-stats-dark`)
  }
  
  return (
    <div className="rounded-lg border border-gray-800 bg-[#1C1C1F]">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-gray-800/50">
            <TableHead className="w-[400px]">Name</TableHead>
            <TableHead className="text-right">Prize Pool</TableHead>
            <TableHead className="text-right">Hours Watched</TableHead>
            <TableHead className="text-right">Peak Viewers</TableHead>
            <TableHead className="text-right">Airtime</TableHead>
            <TableHead className="text-right">Event Date</TableHead>
          </TableRow>
        </TableHeader>
        
        <TableBody>
          {tournaments.map((tournament) => (
            <TableRow 
              key={tournament.id} 
              className="hover:bg-gray-800/50 cursor-pointer"
              onClick={() => handleTournamentClick(tournament.id)}
            >
              <TableCell className="font-medium">
                <div className="flex items-center gap-4">
                  <Image
                    src={tournament.logo || "/placeholder.svg"}
                    alt={tournament.game}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span>{tournament.name}</span>
                      {tournament.status === "Ongoing" && <span className="text-xs text-green-400">Ongoing</span>}
                    </div>
                    <div className="text-sm text-gray-400">
                      {tournament.game}, {tournament.organizer}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                {tournament.prizePool ? tournament.prizePool : "-"}
              </TableCell>
              <TableCell className="text-right">{formatNumber(tournament.hoursWatched ?? 0)}</TableCell>
              <TableCell className="text-right">{formatNumber(tournament.peakViewers ?? 0)}</TableCell>
              <TableCell className="text-right">{tournament.airtime}</TableCell>
              <TableCell className="text-right">{tournament.dates}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}


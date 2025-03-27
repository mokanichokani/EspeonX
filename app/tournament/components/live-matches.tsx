import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Circle } from "lucide-react"

const liveMatches = [
  {
    id: 1,
    team1: { name: "Gen.G", logo: "/placeholder.svg" },
    team2: { name: "T1", logo: "/placeholder.svg" },
    event: "VCT 2025: Pacific Kickoff",
  },
  {
    id: 2,
    team1: { name: "DRX", logo: "/placeholder.svg" },
    team2: { name: "HLE", logo: "/placeholder.svg" },
    event: "LCK Cup 2025",
  },
  {
    id: 3,
    team1: { name: "NAVI", logo: "/placeholder.svg" },
    team2: { name: "Vitality", logo: "/placeholder.svg" },
    event: "ESL Pro League Season 21",
  },
  {
    id: 4,
    team1: { name: "Team Liquid", logo: "/placeholder.svg" },
    team2: { name: "Cloud9", logo: "/placeholder.svg" },
    event: "VCT 2025: Pacific Kickoff",
  },
  {
    id: 5,
    team1: { name: "FaZe Clan", logo: "/placeholder.svg" },
    team2: { name: "G2 Esports", logo: "/placeholder.svg" },
    event: "ESL Pro League Season 21",
  }
]

export function LiveMatches() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Circle className="h-4 w-4 fill-red-500 text-red-500" />
        <h2 className="font-semibold">LIVE matches</h2>
      </div>
      <div className="space-y-2">
        {liveMatches.map((match) => (
          <Button
            key={match.id}
            variant="outline"
            className="w-full justify-start border-gray-800 bg-[#1C1C1F] hover:bg-gray-800"
          >
            <div className="flex w-full min-w-0 items-center gap-4">
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <Image
                  src={match.team1.logo || "/placeholder.svg"}
                  alt={match.team1.name}
                  width={24}
                  height={24}
                  className="shrink-0 rounded"
                />
                <span className="truncate">{match.team1.name}</span>
              </div>
              <span className="shrink-0 text-gray-500">VS</span>
              <div className="flex min-w-0 flex-1 items-center gap-2">
                <Image
                  src={match.team2.logo || "/placeholder.svg"}
                  alt={match.team2.name}
                  width={24}
                  height={24}
                  className="shrink-0 rounded"
                />
                <span className="truncate">{match.team2.name}</span>
              </div>
              <span className="truncate text-sm text-gray-400">{match.event}</span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}


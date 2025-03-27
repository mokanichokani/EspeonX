import { TournamentStats } from "./components/tournament-stats"
import { LiveMatches } from "./components/live-matches"
import { StatsFilters } from "./components/stats-filters"
import { Button } from "@/components/ui/button"
import { ArrowDownUp, Plus } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Esports Tournaments - Statistics and Analytics</h1>
          <div className="flex gap-4">
            <Button variant="outline" className="border-blue-500 text-blue-500">
              <ArrowDownUp className="mr-2 h-4 w-4" />
              Compare
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Submit event
            </Button>
          </div>
        </div>
        <StatsFilters />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <TournamentStats />
        <LiveMatches />
      </div>
    </main>
  )
}


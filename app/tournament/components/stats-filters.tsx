"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Zap, Search } from "lucide-react"

export function StatsFilters() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select>
          <SelectTrigger className="bg-[#1C1C1F] border-gray-800">
            <SelectValue placeholder="All Games / Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Games / Categories</SelectItem>
            <SelectItem value="fps">FPS Games</SelectItem>
            <SelectItem value="moba">MOBA Games</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-[#1C1C1F] border-gray-800">
            <SelectValue placeholder="All publishers" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All publishers</SelectItem>
            <SelectItem value="riot">Riot Games</SelectItem>
            <SelectItem value="valve">Valve</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-[#1C1C1F] border-gray-800">
            <SelectValue placeholder="All time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All time</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-[#1C1C1F] border-gray-800">
            <SelectValue placeholder="All teams" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All teams</SelectItem>
            <SelectItem value="t1">T1</SelectItem>
            <SelectItem value="fnatic">Fnatic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="outline" className="bg-[#1C1C1F] border-gray-800">
          <Zap className="mr-2 h-4 w-4" />
          Esports only
        </Button>
        <Button variant="outline" className="bg-[#1C1C1F] border-gray-800">
          <Zap className="mr-2 h-4 w-4" />
          Mobile Esports
        </Button>
        <Button variant="outline" className="bg-[#1C1C1F] border-gray-800">
          <Zap className="mr-2 h-4 w-4" />
          Female Esports
        </Button>
        <Button variant="outline" className="bg-[#1C1C1F] border-gray-800">
          <Zap className="mr-2 h-4 w-4" />
          Battle Royale
        </Button>
        <Button variant="outline" className="bg-[#1C1C1F] border-gray-800">
          <Zap className="mr-2 h-4 w-4" />
          Collegiate
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input placeholder="Search tournament by name" className="pl-10 bg-[#1C1C1F] border-gray-800" />
        </div>
        <Select defaultValue="event-date">
          <SelectTrigger className="w-[180px] bg-[#1C1C1F] border-gray-800">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="event-date">Event Date</SelectItem>
            <SelectItem value="prize-pool">Prize Pool</SelectItem>
            <SelectItem value="viewers">Peak Viewers</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}


import { Search } from "lucide-react"
import DAppGrid from "@/components/DAppGrid"
import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto flex gap-6 px-4 py-8">
        <Sidebar />
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for a dapp"
                className="bg-black h-10 w-[300px] rounded-md bg-card pl-9 pr-4 text-sm text-card-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Show</span>
              <select className="rounded-md bg-card px-2 py-1 text-card-foreground">
                <option>1-50</option>
                <option>51-100</option>
                <option>101-143</option>
              </select>
              <span>of 143 results</span>
            </div>
          </div>
          <DAppGrid />
        </main>
      </div>
    </div>
  )
}


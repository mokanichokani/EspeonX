import { Search } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-accent-purple">dApp Discovery</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search dApps..."
            className="w-64 rounded-full bg-card py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent-purple"
          />
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
        </div>
      </div>
    </header>
  )
}


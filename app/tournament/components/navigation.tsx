import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BarChartIcon as ChartBar, GamepadIcon, MonitorPlay, NewspaperIcon, ShoppingBag, Info } from "lucide-react"

export function Navigation() {
  return (
    <nav className="border-b border-gray-800 bg-[#0B0B0E]">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-green-400 font-semibold">
              Tournaments
            </Link>
            <Link href="/data" className="text-gray-400 hover:text-gray-100 flex items-center gap-2">
              <ChartBar className="h-4 w-4" />
              Esports Data
            </Link>
            <Link href="/games" className="text-gray-400 hover:text-gray-100 flex items-center gap-2">
              <GamepadIcon className="h-4 w-4" />
              Games
            </Link>
            <Link href="/watch" className="text-gray-400 hover:text-gray-100 flex items-center gap-2">
              <MonitorPlay className="h-4 w-4" />
              Watch Now
            </Link>
            <Link href="/news" className="text-gray-400 hover:text-gray-100 flex items-center gap-2">
              <NewspaperIcon className="h-4 w-4" />
              News
            </Link>
            <Link href="/products" className="text-gray-400 hover:text-gray-100 flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              Products
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-gray-100 flex items-center gap-2">
              <Info className="h-4 w-4" />
              About
            </Link>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Pricing</Button>
        </div>
      </div>
    </nav>
  )
}


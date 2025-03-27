"use client"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const chains = [
  { name: "The Legend of Zelda", icon: "/coin1.png" },
  { name: "Super Mario Bros", icon: "/coin2.png" },
  { name: "Minecraft", icon: "/coin4.png" },
  { name: "Fortnite", icon: "/coin5.png" },
  { name: "Cyberpunk 2077", icon: "/coin6.png" },
  { name: "TYPE Z", icon: "/coin3.png" },
];

export default function Sidebar() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isGamesOpen, setIsGamesOpen] = useState(false)
  const [isChainOpen, setIsChainOpen] = useState(false)

  return (
    <aside className="w-[280px] space-y-6">
      <div>
        <h2 className="mb-4 text-xl font-bold neon-text">Filter</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <button 
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex w-full items-center justify-between rounded-xl bg-card p-4 text-sm font-medium neon-border hover-glow transition-all duration-300"
            >
              <span>Categories</span>
              {isCategoryOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            
            {isCategoryOpen && (
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => setIsGamesOpen(!isGamesOpen)}
                  className="flex w-full items-center justify-between rounded-xl bg-card p-4 text-sm font-medium neon-border hover-glow transition-all duration-300"
                >
                  <span>Decentralized Games</span>
                  {isGamesOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {isGamesOpen && (
                  <div className="ml-4 space-y-3 p-2">
                    <label className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 rounded border-muted accent-primary" />
                      AAA Web3 Games
                    </label>
                    <label className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      <input type="checkbox" className="h-4 w-4 rounded border-muted accent-primary" />
                      Web3 Games
                    </label>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <button 
              onClick={() => setIsChainOpen(!isChainOpen)}
              className="flex w-full items-center justify-between rounded-xl bg-card p-4 text-sm font-medium neon-border hover-glow transition-all duration-300"
            >
              <span>Explore By Chain</span>
              {isChainOpen ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            
            {isChainOpen && (
              <div className="ml-4 space-y-3 p-2">
                {chains.map((chain) => (
                  <label 
                    key={chain.name} 
                    className="flex items-center gap-4 text-sm text-muted-foreground hover:text-foreground transition-all cursor-pointer group"
                  >
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl neon-border">
                      <Image
                        src={chain.icon}
                        alt={chain.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-xl"
                        sizes="40px"
                      />
                    </div>
                    <span className="group-hover:neon-text">{chain.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}


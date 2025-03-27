"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Clock, Coins } from "lucide-react"
import { useState } from "react"
import GameGuideModal from "./GameGuideModal"

const dapps = [
  {
    id: 1,
    name: "Sorare",
    icon: "/sorare.png?height=48&width=48",
    tags: ["Free Customers", "Web3 Games"],
    description: "Sorare helps you experience fantasy sports through a virtual game.",
    coins: "250K",
    currency: {
      name: "SOR",
      icon: "/coin1.png"
    },
    avgPlayTime: "4.5h"
  },
  {
    id: 2,
    name: "Planet IX",
    icon: "/planet.png?height=48&width=48",
    tags: ["Web3 Games"],
    description: "Planet IX is the biggest GameFi platform on the entire Polygon blockchain.",
    coins: "180K",
    currency: {
      name: "PIX",
      icon: "/coin2.png"
    },
    avgPlayTime: "3.2h"
  },
  {
    id: 3,
    name: "The Sandbox",
    icon: "/sand.png?height=48&width=48",
    tags: ["Web3 3.0 Winners", "Web3 Games"],
    description:
      "The Sandbox, a popular 3D metaverse play-to-earn, allows users to create and monetize their gaming experiences.",
    coins: "500K",
    currency: {
      name: "SAND",
      icon: "/coin3.png"
    },
    avgPlayTime: "5.8h"
  },
  {
    id: 4,
    name: "Axie Infinity",
    icon: "/axie.png?height=48&width=48",
    tags: ["Enterprise Customers", "Web3 Games"],
    description: "Inspired by Nintendo's Pokémon series, Axie Infinity is a blockchain-based monster battling game.",
    coins: "750K",
    currency: {
      name: "AXS",
      icon: "/coin4.png"
    },
    avgPlayTime: "6.2h"
  },
  {
    id: 5,
    name: "Illuvium",
    icon: "/ill.png?height=48&width=48",
    tags: ["Enterprise Customers", "Web3 Games"],
    description: "Illuvium is a Web3 role-playing game, where users capture and battle NFT creatures and earn rewards.",
    coins: "320K",
    currency: {
      name: "ILV",
      icon: "/coin5.png"
    },
    avgPlayTime: "4.7h"
  },
  {
    id: 6,
    name: "TYPE-Z",
    icon: "/zombie.png?height=48&width=48",
    tags: ["Enterprise Customers", "Web3 Games"],
    description: "TYPE-Z is a zombie survival game where players earn rewards through gameplay and NFT trading.",
    coins: "420K",
    currency: {
      name: "TZ",
      icon: "/coin6.png"
    },
    avgPlayTime: "5.5h"
  },
]

export default function DAppGrid() {
  const [isGuideOpen, setIsGuideOpen] = useState(false)

  const handleDAppClick = (dappId: number) => {
    if (dappId === 6) { // TYPE-Z id
      setIsGuideOpen(true)
    }
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dapps.map((dapp) => (
          <div 
            key={dapp.id} 
            className="group relative rounded-xl border bg-card p-6 neon-border hover-glow transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => handleDAppClick(dapp.id)}
          >
            <div className="mb-6 flex flex-col items-center gap-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-2xl neon-border">
                <Image
                  src={dapp.icon}
                  alt={dapp.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                  sizes="(max-width: 768px) 128px, 128px"
                  priority
                />
              </div>
              <h3 className="text-xl font-bold neon-text text-center">{dapp.name}</h3>
            </div>
            
            {/* Stats Section */}
            <div className="mb-4 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 rounded-full overflow-hidden neon-border">
                  <Image
                    src={dapp.currency.icon}
                    alt={dapp.currency.name}
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
                <span className="text-muted-foreground">
                  {dapp.coins} <span className="text-xs">{dapp.currency.name}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>{dapp.avgPlayTime}</span>
              </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-2 justify-center">
              {dapp.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="rounded-full cyber-gradient hover:brightness-125 transition-all duration-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center">{dapp.description}</p>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      <GameGuideModal 
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
      />
    </>
  )
}


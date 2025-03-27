"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Trophy, Wallet, Timer, TrendingUp } from "lucide-react"

interface Match {
  id: string
  team1: string
  team2: string
  startTime: string
  totalStaked: number
  odds: {
    team1: number
    team2: number
  }
}

export default function Staking() {
  const [matches] = useState<Match[]>([
    {
      id: '1',
      team1: 'EspeonX Dragons',
      team2: 'Cyber Knights',
      startTime: '2024-04-15T18:00:00Z',
      totalStaked: 25000,
      odds: {
        team1: 1.85,
        team2: 2.15
      }
    },
    {
      id: '2',
      team1: 'Quantum Force',
      team2: 'Neo Tigers',
      startTime: '2024-04-15T20:00:00Z',
      totalStaked: 18000,
      odds: {
        team1: 2.45,
        team2: 1.65
      }
    }
  ])

  const [stakeAmount, setStakeAmount] = useState<number>(100)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary">Stream Staking</h1>
          <p className="text-muted-foreground">Stake on live matches and earn rewards</p>
        </div>
        <Button className="gaming-button">
          <Wallet className="mr-2 h-4 w-4" />
          View My Stakes
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wallet className="h-5 w-5 text-primary" />
              <span>Total Staked</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${matches.reduce((sum, match) => sum + match.totalStaked, 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Active Matches</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{matches.length}</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Potential Earnings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${(stakeAmount * 2.15).toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {matches.map((match) => (
          <Card key={match.id} className="gaming-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{match.team1} vs {match.team2}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Timer className="h-4 w-4 mr-1" />
                        {new Date(match.startTime).toLocaleString()}
                      </p>
                    </div>
                    <Badge variant="outline" className="gaming-border">
                      Live
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Odds</p>
                      <p className="font-semibold">{match.odds.team1}x</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Staked</p>
                      <p className="font-semibold">${match.totalStaked.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-auto space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">Stake Amount</label>
                    <div className="flex space-x-2">
                      <Input
                        type="number"
                        value={stakeAmount}
                        onChange={(e) => setStakeAmount(Number(e.target.value))}
                        className="w-32"
                      />
                      <Button className="gaming-button">Stake</Button>
                    </div>
                  </div>
                  <Slider
                    defaultValue={[100]}
                    max={1000}
                    step={10}
                    onValueChange={(value) => setStakeAmount(value[0])}
                    className="w-full md:w-64"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
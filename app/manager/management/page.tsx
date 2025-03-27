"use client"

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, Calendar, Trophy, GripHorizontal } from "lucide-react"

interface Player {
  id: string
  name: string
  salary: number
  availability: string
  performance: {
    winRate: number
    kdRatio: number
    tournaments: number
  }
  contractEnd: string
}

export default function Management() {
  const [players, setPlayers] = useState<Player[]>([
    {
      id: '1',
      name: 'Alex "Striker" Chen',
      salary: 5000,
      availability: 'active',
      performance: {
        winRate: 68,
        kdRatio: 1.8,
        tournaments: 12
      },
      contractEnd: '2024-12-31'
    },
    {
      id: '2',
      name: 'Sarah "Viper" Rodriguez',
      salary: 4500,
      availability: 'active',
      performance: {
        winRate: 72,
        kdRatio: 2.1,
        tournaments: 10
      },
      contractEnd: '2024-11-30'
    }
  ])

  const onDragEnd = (result: any) => {
    if (!result.destination) return
    
    const items = Array.from(players)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    
    setPlayers(items)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">Team Management</h1>
        <Button className="gaming-button">
          <Users className="mr-2 h-4 w-4" />
          Add Player
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Active Players</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{players.length}</p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <span>Total Salary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              ${players.reduce((sum, player) => sum + player.salary, 0).toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Team Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">
              {Math.round(players.reduce((sum, player) => sum + player.performance.winRate, 0) / players.length)}% WR
            </p>
          </CardContent>
        </Card>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="players">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {players.map((player, index) => (
                <Draggable key={player.id} draggableId={player.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="gaming-card p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div {...provided.dragHandleProps}>
                            <GripHorizontal className="h-5 w-5 text-primary cursor-move" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{player.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Contract ends: {player.contractEnd}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="gaming-border">
                          {player.availability}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Salary</p>
                          <p className="font-semibold">${player.salary.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Win Rate</p>
                          <p className="font-semibold">{player.performance.winRate}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">K/D Ratio</p>
                          <p className="font-semibold">{player.performance.kdRatio}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
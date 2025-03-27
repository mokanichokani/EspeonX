"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Vote, Clock, CheckCircle2, XCircle } from "lucide-react"

export default function Governance() {
  const [activeProposals] = useState([
    {
      id: 1,
      title: "Implement New Training Schedule",
      description: "Proposal to establish a structured training schedule for competitive matches",
      votesFor: 65,
      votesAgainst: 35,
      deadline: "2024-04-15",
      status: "active"
    },
    {
      id: 2,
      title: "Tournament Participation Strategy",
      description: "Decision on which upcoming tournaments to prioritize",
      votesFor: 80,
      votesAgainst: 20,
      deadline: "2024-04-20",
      status: "active"
    }
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Governance</h1>
        <Button>
          <Vote className="mr-2 h-4 w-4" />
          Create Proposal
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList className="mb-8">
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="executed">Executed</TabsTrigger>
          <TabsTrigger value="defeated">Defeated</TabsTrigger>
        </TabsList>

        <TabsContent value="active">
          <div className="grid gap-6">
            {activeProposals.map((proposal) => (
              <Card key={proposal.id}>
                <CardHeader>
                  <CardTitle>{proposal.title}</CardTitle>
                  <CardDescription>{proposal.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Votes</span>
                        <span>{proposal.votesFor}%</span>
                      </div>
                      <Progress value={proposal.votesFor} />
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Deadline: {proposal.deadline}</span>
                    </div>

                    <div className="flex space-x-4">
                      <Button className="flex-1" variant="default">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Vote For
                      </Button>
                      <Button className="flex-1" variant="outline">
                        <XCircle className="mr-2 h-4 w-4" />
                        Vote Against
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
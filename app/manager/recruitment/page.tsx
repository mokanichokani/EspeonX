"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Users, UserPlus, Shield, Star } from "lucide-react"

export default function Recruitment() {
  const [applications] = useState([
    {
      id: 1,
      username: "ProGamer123",
      experience: "5 years",
      achievements: ["Tournament Winner", "Team Leader"],
      status: "pending"
    },
    {
      id: 2,
      username: "eSportsElite",
      experience: "3 years",
      achievements: ["Regional Champion"],
      status: "pending"
    }
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Recruitment</h1>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Open Position
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Total Members</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">50</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Required Tokens</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,000 MATIC</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>Open Positions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications">
        <TabsList className="mb-8">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="members">Current Members</TabsTrigger>
        </TabsList>

        <TabsContent value="applications">
          <div className="grid gap-6">
            {applications.map((application) => (
              <Card key={application.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{application.username}</CardTitle>
                      <CardDescription>Experience: {application.experience}</CardDescription>
                    </div>
                    <Badge>{application.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {application.achievements.map((achievement, index) => (
                          <Badge key={index} variant="secondary">{achievement}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button className="flex-1" variant="default">
                        Approve
                      </Button>
                      <Button className="flex-1" variant="outline">
                        Reject
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
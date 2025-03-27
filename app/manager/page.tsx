import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Vote, Wallet, Trophy, Sword, Shield, Crosshair, Crown } from "lucide-react"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Welcome to EspeonX
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          The future of decentralized esports and gaming assets
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Vote className="h-5 w-5 text-primary" />
              <span>Governance</span>
            </CardTitle>
            <CardDescription>Shape the future of esports through DAO voting</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full gaming-button">View Proposals</Button>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sword className="h-5 w-5 text-primary" />
              <span>Asset Trading</span>
            </CardTitle>
            <CardDescription>Trade and manage your digital assets</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full gaming-button">Open Marketplace</Button>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Crown className="h-5 w-5 text-primary" />
              <span>Tournaments</span>
            </CardTitle>
            <CardDescription>Compete in verified esports events</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full gaming-button">View Events</Button>
          </CardContent>
        </Card>

        <Card className="gaming-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Staking</span>
            </CardTitle>
            <CardDescription>Earn rewards through asset staking</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full gaming-button">Start Staking</Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 gaming-card p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-primary">Why Choose EspeonX?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 gaming-border rounded-lg">
              <Crosshair className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">True Ownership</h3>
              <p className="text-muted-foreground">Complete control over your digital assets across games</p>
            </div>
            <div className="p-6 gaming-border rounded-lg">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fair Rewards</h3>
              <p className="text-muted-foreground">Performance-based rewards and transparent distribution</p>
            </div>
            <div className="p-6 gaming-border rounded-lg">
              <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Trading</h3>
              <p className="text-muted-foreground">Safe and verified cross-platform asset trading</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6 text-primary">Ready to Join?</h2>
        <Button className="gaming-button px-8 py-6 text-lg">
          Connect Wallet to Start
        </Button>
      </div>
    </main>
  )
}
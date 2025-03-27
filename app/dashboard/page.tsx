'use client';

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { Trophy, Twitch, Youtube, Wallet, GamepadIcon, Users, Calendar, Award, TrendingUp, Target, Users2 } from "lucide-react";
import { useRouter } from 'next/navigation';

const performanceData = [
  { name: 'Jan', matches: 45, kills: 120, winRate: 65 },
  { name: 'Feb', matches: 52, kills: 150, winRate: 70 },
  { name: 'Mar', matches: 48, kills: 140, winRate: 68 },
  { name: 'Apr', matches: 70, kills: 200, winRate: 75 },
  { name: 'May', matches: 65, kills: 180, winRate: 72 },
];

const earningsData = [
  { month: 'Jan', tournament: 5000, streaming: 3000, sponsorship: 4000 },
  { month: 'Feb', tournament: 7000, streaming: 3500, sponsorship: 4000 },
  { month: 'Mar', tournament: 4000, streaming: 4000, sponsorship: 4000 },
  { month: 'Apr', tournament: 9000, streaming: 4500, sponsorship: 5000 },
  { month: 'May', tournament: 6000, streaming: 5000, sponsorship: 5000 },
];

const viewershipData = [
  { month: 'Jan', twitch: 2500, youtube: 1800 },
  { month: 'Feb', twitch: 3000, youtube: 2200 },
  { month: 'Mar', twitch: 3200, youtube: 2600 },
  { month: 'Apr', twitch: 4000, youtube: 3000 },
  { month: 'May', twitch: 4500, youtube: 3500 },
];

const gameDistribution = [
  { name: 'Valorant', value: 45 },
  { name: 'CS:GO', value: 35 },
  { name: 'Apex Legends', value: 20 },
];

const COLORS = ['#22c55e', '#16a34a', '#15803d'];

const games = [
  { name: 'Valorant', image: 'https://images-na.ssl-images-amazon.com/images/I/217jLUOWPaS._UL500_.jpg?w=800&q=80', hours: 156 },
  { name: 'CS:GO', image: 'https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png?w=800&q=80', hours: 234 },
  { name: 'Apex Legends', image: 'https://seeklogo.com/images/A/apex-logo-C3478A4601-seeklogo.com.png?w=800&q=80', hours: 89 },
];

const skins = [
  { name: 'Dragon Lore AWP', game: 'CS:GO', price: '1820.00', image: 'https://app.skin.land/blogfiles/IFcIfH6p33zBlH2RXxoM6aPyoQ3r3NXJyK27dFmt.png?w=800&q=80' },
  { name: 'Reaver Vandal', game: 'Valorant', price: '125.00', image: 'https://valorantstrike.com/wp-content/uploads/2020/11/Valorant-Reaver-Collection-Vandal-Red-Variant.jpg?w=800&q=80' },
];

const tournaments = [
  { name: 'ESL Pro League Season 19', date: '2024-05-15', prize: '$850,000' },
  { name: 'VALORANT Champions Tour', date: '2024-06-01', prize: '$1,000,000' },
];

const aimTestResults = {
  status: 'Verified',
  lastTest: '2024-03-15',
  accuracy: 85,
  reactionTime: 180, // ms
  score: 950,
  expiresIn: 5, // days until expiration
};

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Player Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Card className="p-4 flex items-center space-x-2">
              <Wallet className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">ETH Balance</p>
                <p className="font-bold">12.45 ETH</p>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Add the new aim test card */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Anti-Cheat Verification
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-green-500 font-semibold">{aimTestResults.status}</span>
                {aimTestResults.expiresIn <= 7 && (
                  <span className="text-red-500 text-sm ml-auto">
                    Expires in {aimTestResults.expiresIn} days
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last Test</span>
                  <span>{aimTestResults.lastTest}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Accuracy</span>
                  <span>{aimTestResults.accuracy}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Reaction Time</span>
                  <span>{aimTestResults.reactionTime}ms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Score</span>
                  <span>{aimTestResults.score}</span>
                </div>
              </div>
              
              <button onClick={()=>{
                router.push('/dashboard/cheat')
              }} className="w-full bg-primary text-primary-foreground rounded-md py-2 text-sm font-medium hover:bg-primary/90">
                Take New Test
              </button>
              
            </div>
          </Card>

          {/* Application Status */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Team Applications
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Team Liquid</span>
                  <span className="text-primary">In Review</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Cloud9</span>
                  <span className="text-muted-foreground">Pending</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </div>
          </Card>

          {/* Streaming Earnings */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Streaming Revenue</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Twitch className="w-5 h-5 text-[#9146FF]" />
                  <span>Twitch</span>
                </div>
                <span className="font-bold">$2,450.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-[#FF0000]" />
                  <span>YouTube</span>
                </div>
                <span className="font-bold">$1,820.00</span>
              </div>
            </div>
          </Card>

          {/* Live Match Status */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GamepadIcon className="w-5 h-5 text-primary" />
              Live Match
            </h2>
            <div className="text-center">
              <p className="text-primary font-bold">LIVE NOW</p>
              <p className="text-2xl font-bold mt-2">Valorant Ranked</p>
              <p className="text-muted-foreground">Score: 7-5</p>
              <p className="mt-2">K/D/A: 15/3/4</p>
            </div>
          </Card>
        </div>

        {/* Performance Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Overview */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Performance Overview
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 15%)" />
                  <XAxis dataKey="name" stroke="hsl(0, 0%, 63.9%)" />
                  <YAxis stroke="hsl(0, 0%, 63.9%)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(0, 0%, 10%)',
                      border: '1px solid hsl(0, 0%, 15%)',
                    }}
                  />
                  <Line type="monotone" dataKey="kills" stroke="hsl(142, 76%, 36%)" strokeWidth={2} />
                  <Line type="monotone" dataKey="winRate" stroke="#16a34a" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Earnings Distribution */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-primary" />
              Monthly Earnings
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 15%)" />
                  <XAxis dataKey="month" stroke="hsl(0, 0%, 63.9%)" />
                  <YAxis stroke="hsl(0, 0%, 63.9%)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(0, 0%, 10%)',
                      border: '1px solid hsl(0, 0%, 15%)',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="tournament" fill="#22c55e" />
                  <Bar dataKey="streaming" fill="#16a34a" />
                  <Bar dataKey="sponsorship" fill="#15803d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Viewership Growth */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Users2 className="w-5 h-5 text-primary" />
              Viewership Growth
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={viewershipData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 15%)" />
                  <XAxis dataKey="month" stroke="hsl(0, 0%, 63.9%)" />
                  <YAxis stroke="hsl(0, 0%, 63.9%)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(0, 0%, 10%)',
                      border: '1px solid hsl(0, 0%, 15%)',
                    }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="twitch" stackId="1" stroke="#9146FF" fill="#9146FF" fillOpacity={0.5} />
                  <Area type="monotone" dataKey="youtube" stackId="1" stroke="#FF0000" fill="#FF0000" fillOpacity={0.5} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Game Distribution */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Game Distribution
            </h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gameDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {gameDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(0, 0%, 10%)',
                      border: '1px solid hsl(0, 0%, 15%)',
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Games and Skins Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Games */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Games Played</h2>
            <div className="space-y-4">
              {games.map((game) => (
                <div key={game.name} className="flex items-center space-x-4">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <p className="font-semibold">{game.name}</p>
                    <p className="text-sm text-muted-foreground">{game.hours} hours played</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skins */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Valuable Skins</h2>
            <div className="space-y-4">
              {skins.map((skin) => (
                <div key={skin.name} className="flex items-center space-x-4">
                  <img
                    src={skin.image}
                    alt={skin.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-semibold">{skin.name}</p>
                    <p className="text-sm text-muted-foreground">{skin.game}</p>
                  </div>
                  <p className="font-bold">${skin.price}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Tournaments and Sponsorships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tournaments */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Upcoming Tournaments
            </h2>
            <div className="space-y-4">
              {tournaments.map((tournament) => (
                <div key={tournament.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{tournament.name}</p>
                    <p className="text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {tournament.date}
                    </p>
                  </div>
                  <p className="font-bold text-primary">{tournament.prize}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Sponsorships */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Active Sponsorships
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Razer</span>
                  <span className="text-primary">$5,000/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Gaming peripherals and streaming setup</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Monster Energy</span>
                  <span className="text-primary">$3,000/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Energy drinks and merchandise</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

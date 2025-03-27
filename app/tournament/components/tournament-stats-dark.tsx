"use client"

import {
  CalendarIcon,
  TrophyIcon,
  UsersIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  DiscIcon as DiscordIcon,
  LinkedinIcon,
  EditIcon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TournamentStats() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Breadcrumb */}
      <div className="border-b border-zinc-800">
        <div className="container py-4">
          <nav className="flex items-center space-x-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-green-400">
              Esports Charts
            </Link>
            <span>/</span>
            <Link href="/tournaments" className="hover:text-green-400">
              Tournaments statistics
            </Link>
            <span>/</span>
            <Link href="/tournaments/mlbb" className="hover:text-green-400">
              Mobile Legends: Bang Bang
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container  py-6">
        <div className="grid gap-6   lg:grid-cols-3">
          {/* Tournament Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge variant="destructive" className="rounded-full">
                  LIVE
                </Badge>
                <span className="text-sm text-zinc-400">Moderated 1 minute ago</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <span>Data source:</span>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwDVxQk8XumdLlFqqVmX1bt9bcQ38e.png"
                  alt="Escharts Logo"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <EditIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwDVxQk8XumdLlFqqVmX1bt9bcQ38e.png"
                alt="Tournament Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <h1 className="text-2xl font-bold">VCT 2025: Pacific Kickoff</h1>
            </div>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-green-500/10 p-6">
                    <TrophyIcon className="h-12 w-12 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">The tournament is underway</h3>
                    <p className="text-zinc-400">
                      Follow the tournament updates and you will be notified as soon as all data is available.
                    </p>
                  </div>
                  <div className="space-y-4 w-full">
                    <Button className="bg-green-600 hover:bg-green-700 text-white w-full">Contribute</Button>
                    <div className="flex justify-center gap-2">
                      <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                        <TwitterIcon className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                        <FacebookIcon className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                        <InstagramIcon className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                        <DiscordIcon className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                        <LinkedinIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ongoing Tournaments */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <TrophyIcon className="h-5 w-5 text-green-500" />
                  Ongoing Tournaments
                </h2>
                <span className="text-sm text-zinc-400">by Date</span>
              </div>
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwDVxQk8XumdLlFqqVmX1bt9bcQ38e.png"
                          alt="Tournament Logo"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">ESL Challenger League Season 49: Europe</h3>
                          <p className="text-sm text-zinc-400">21.01.25 - 11.05.25</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Tournaments */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-purple-500" />
                  Past ML:BB Tournaments
                </h2>
                <span className="text-sm text-zinc-400">by Date</span>
              </div>
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwDVxQk8XumdLlFqqVmX1bt9bcQ38e.png"
                          alt="Tournament Logo"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">Snapdragon Pro Series Season 6 LATAM - Challenge Season</h3>
                          <p className="text-sm text-zinc-400">24.01.25 - 02.02.25</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Tournament Details */}
          <Card className="bg-zinc-900 border-zinc-800 h-fit">
            <CardHeader>
              <CardTitle>About tournament</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-zinc-400">Discipline:</span>
                <div className="flex items-center gap-2">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwDVxQk8XumdLlFqqVmX1bt9bcQ38e.png"
                    alt="MLBB Logo"
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="font-medium">Mobile Legends: Bang Bang</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Date:</span>
                <span className="font-medium">08.02.25 - 09.02.25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Prize Pool:</span>
                <span className="font-medium text-green-500">$39,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Series:</span>
                <span className="font-medium">Snapdragon Pro Series</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Type:</span>
                <Badge variant="secondary" className="bg-zinc-800">
                  Online
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Organizers:</span>
                <span className="font-medium">ESL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Sponsors:</span>
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwDVxQk8XumdLlFqqVmX1bt9bcQ38e.png"
                      alt="Monster Energy"
                      width={16}
                      height={16}
                      className="rounded"
                    />
                    <span>Monster Energy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GwDVxQk8XumdLlFqqVmX1bt9bcQ38e.png"
                      alt="Samsung"
                      width={16}
                      height={16}
                      className="rounded"
                    />
                    <span>Samsung</span>
                  </div>
                </div>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-zinc-800">
                  <UsersIcon className="w-3 h-3 mr-1" />
                  Esports
                </Badge>
                <Badge variant="secondary" className="bg-zinc-800">
                  <CalendarIcon className="w-3 h-3 mr-1" />
                  Mobile
                </Badge>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Follow for updates</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


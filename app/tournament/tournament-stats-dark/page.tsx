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
              VCT 2025: Pacific Kickoff
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-3">
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
                  src="https://www.creativefabrica.com/wp-content/uploads/2021/10/12/ES-logo-design-vector-Graphics-18681718-1-1-580x386.jpg"
                  alt="Escharts Logo"
                  width={50}
                  height={50}
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
                    <h3 className="text-xl font-semibold text-white">The tournament is underway</h3>
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
                          src="https://as1.ftcdn.net/jpg/05/12/23/56/1000_F_512235660_PI18wS7k5BO0jpTWoKaxFyzAjtFm6274.jpg"
                          alt="Tournament Logo"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <div className="flex-1 text-white">
                          <h3 className="font-medium text-white">ESL Challenger League Season 49: Europe</h3>
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
              <div className="flex items-center justify-between text-white">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-purple-500" />
                  Past ML:BB Tournaments
                </h2>
                <span className="text-sm text-white">by Date</span>
              </div>
              <div className="grid gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <Image
                          src="https://play-lh.googleusercontent.com/Ni-KscgEdMaoETSzv9BTOZZ-9RVQGg7P832ddPUnKPVUwxx5ihXEdr5R498ZozjPsCs=w240-h480-rw"
                          alt="Tournament Logo"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <div className="flex-1 text-white">
                          <h3 className="font-medium text-white">Snapdragon Pro Series Season 6 LATAM - Challenge Season</h3>
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
          <Card className="bg-zinc-900 border-zinc-800 h-fit text-white">
            <CardHeader>
              <CardTitle>About tournament</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-zinc-400">Discipline:</span>
                <div className="flex items-center gap-2">
                  <Image
                    src="https://i.pinimg.com/736x/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg"
                    alt="Valorant Logo"
                    width={30}
                    height={40}
                    className="rounded"
                  />
                  <span className="font-medium">VALORANT</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Date:</span>
                <span className="font-medium">13.01.25 - 21.01.25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Prize Pool:</span>
                <span className="font-medium text-green-500">$90,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Series:</span>
                <span className="font-medium">VCT Pacific</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Type:</span>
                <Badge variant="secondary" className="bg-green-600 text-white">
                  LAN
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Organizers:</span>
                <span className="font-medium">Riot Games</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Sponsors:</span>
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://yt3.googleusercontent.com/uRKrpN7-levqpjptf6nrIC406OVhVf4felZ3_WBWbGdrMa30J4-b_kFzAQj8ZymHjMdyFQcHGw=s900-c-k-c0x00ffffff-no-rj"
                      alt="Prime Gaming"
                      width={25}
                      height={25}
                      className="rounded"
                    />
                    <span>Prime Gaming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://yt3.googleusercontent.com/zMWFT8xnIGQdJiDNu4L2LO-h8dAP5ENuJlpBjvdWavdJMPsnfn1tj8b_0YTkv5rEXHsATpJWgg=s900-c-k-c0x00ffffff-no-rj"
                      alt="Red Bull"
                      width={25}
                      height={25}
                      className="rounded"
                    />
                    <span>Red Bull</span>
                  </div>
                </div>
              </div>
              <Separator className="bg-zinc-800" />
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-green-600 text-white">
                  <UsersIcon className="w-3 h-3 mr-1" />
                  Esports
                </Badge>
                <Badge variant="secondary" className="bg-green-600 text-white">
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


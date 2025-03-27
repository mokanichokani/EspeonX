import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const trendingGames = [
    {
      id: 1,
      name: "Ethereal Legends",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",
      items: 2345,
      volume: "12.5 ETH",
    },
    {
      id: 2,
      name: "Cyber Warriors",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
      items: 1876,
      volume: "8.2 ETH",
    },
    {
      id: 3,
      name: "Space Odyssey",
      image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&auto=format&fit=crop&q=60",
      items: 3421,
      volume: "15.7 ETH",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
          Trade Game Items as NFTs
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover, collect, and trade unique in-game items from your favorite games on the Ethereum blockchain.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/marketplace">
              <Sparkles className="mr-2 h-5 w-5" />
              Explore Marketplace
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/create">
              Create NFT
            </Link>
          </Button>
        </div>
      </div>

      {/* Trending Games Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            Trending Games
          </h2>
          <Button variant="ghost" asChild>
            <Link href="/games">View All Games</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingGames.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
                <div className="relative aspect-video">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
                    <div className="flex justify-between text-sm text-white/80">
                      <span>{game.items} Items</span>
                      <span>Volume: {game.volume}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-lg border border-border bg-card">
          <Gamepad2 className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Game Integration</h3>
          <p className="text-muted-foreground">
            Seamlessly connect your game items to the blockchain and trade them as NFTs.
          </p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card">
          <Sparkles className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Unique Items</h3>
          <p className="text-muted-foreground">
            Each NFT represents a unique in-game item with verifiable rarity and ownership.
          </p>
        </div>
        <div className="p-6 rounded-lg border border-border bg-card">
          <TrendingUp className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-2">Live Market</h3>
          <p className="text-muted-foreground">
            Track real-time prices and trading activity on the Sepolia testnet.
          </p>
        </div>
      </section>
    </div>
  );
}
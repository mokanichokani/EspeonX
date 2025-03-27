import { Card } from "@/components/ui/card";
import Link from "next/link";

// This would typically come from your database
const games = [
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

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
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
    </div>
  );
}
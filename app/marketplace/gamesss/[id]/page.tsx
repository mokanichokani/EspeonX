import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Wallet2 } from "lucide-react";
import Link from "next/link";

// This would typically come from your database
const games = [
  {
    id: 1,
    name: "Ethereal Legends",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=60",
    description: "A mystical RPG where every item tells a story. Trade legendary weapons, armor, and magical artifacts.",
    items: [
      { id: 1, name: "Sword of Light", price: "0.5 ETH", rarity: "Legendary", image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=800&auto=format&fit=crop&q=60" },
      { id: 2, name: "Ancient Shield", price: "0.3 ETH", rarity: "Epic", image: "https://images.unsplash.com/photo-1615672968435-75cd1c6a36f3?w=800&auto=format&fit=crop&q=60" },
    ]
  },
  {
    id: 2,
    name: "Cyber Warriors",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&auto=format&fit=crop&q=60",
    description: "A futuristic battle arena where cybernetic enhancements define your combat style.",
    items: [
      { id: 1, name: "Plasma Rifle", price: "0.4 ETH", rarity: "Rare", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&auto=format&fit=crop&q=60" },
      { id: 2, name: "Neural Implant", price: "0.6 ETH", rarity: "Legendary", image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&auto=format&fit=crop&q=60" },
    ]
  },
  {
    id: 3,
    name: "Space Odyssey",
    image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&auto=format&fit=crop&q=60",
    description: "Explore the cosmos and trade rare artifacts discovered across different galaxies.",
    items: [
      { id: 1, name: "Quantum Core", price: "0.8 ETH", rarity: "Mythical", image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?w=800&auto=format&fit=crop&q=60" },
      { id: 2, name: "Gravity Boots", price: "0.3 ETH", rarity: "Epic", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop&q=60" },
    ]
  },
];

export function generateStaticParams() {
  return games.map((game) => ({
    id: game.id.toString(),
  }));
}

export default function GamePage({ params }: { params: { id: string } }) {
  const game = games.find(g => g.id === parseInt(params.id));
  
  if (!game) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className="text-4xl font-bold text-white mb-2">{game.name}</h1>
          <p className="text-white/80 max-w-2xl">{game.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {game.items.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                  {item.rarity}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{item.price}</span>
                <Button size="sm" className="flex items-center gap-2">
                  <Wallet2 className="h-4 w-4" />
                  Buy Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
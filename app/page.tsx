"use client";
import { useState } from 'react';
import { connectWallet } from '@/utils/web3Config';
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Shield, Coins, Users, Trophy, ArrowRight, Twitter, Disc as Discord, Github, Heart, Twitch } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedText } from "@/components/ui/animated-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

interface WalletState {
  address: string;
  message: string;
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [walletInfo, setWalletInfo] = useState<WalletState>({ address: '', message: '' });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  const features = [
    {
      icon: Gamepad2,
      title: "Digital Asset Ownership",
      description: "Complete ownership and control over your in-game assets with blockchain technology"
    },
    {
      icon: Coins,
      title: "Fair Rewards",
      description: "Performance-driven reward system based on skill and engagement"
    },
    {
      icon: Shield,
      title: "Secure Marketplace",
      description: "Unified cross-platform marketplace for trading digital assets"
    },
    {
      icon: Trophy,
      title: "Competitive Integrity",
      description: "Verifiable tournament ecosystem with anti-cheat mechanisms"
    },
    {
      icon: Users,
      title: "Community Governance",
      description: "Decentralized decision-making empowering players and teams"
    }
  ];

  const featuredSkins = [
    {
      name: "Dragon Lore AWP",
      game: "CS:GO",
      price: "2.5 ETH",
      rarity: "Legendary",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=500"
    },
    {
      name: "Cyber Katana",
      game: "Cyberpunk Legends",
      price: "1.8 ETH",
      rarity: "Epic",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500"
    },
    {
      name: "Mythic Blade",
      game: "Eternal Realm",
      price: "3.2 ETH",
      rarity: "Mythical",
      image: "https://images.unsplash.com/photo-1533236897111-3e94666b2edf?q=80&w=500"
    }
  ];

  const upcomingTournaments = [
    {
      title: "EspeonX Masters",
      prize: "$100,000",
      date: "March 15, 2025",
      game: "CS:GO",
      participants: "32 Teams"
    },
    {
      title: "Cyber League",
      prize: "$75,000",
      date: "April 2, 2025",
      game: "Valorant",
      participants: "24 Teams"
    }
  ];

  const handleConnect = async () => {
    try {
      const result = await connectWallet();
      setWalletInfo({
        address: result.address,
        message: result.message
      });
      console.log('Connected:', result);
    } catch (error) {
      console.error('Failed to connect:', error);
      alert(error.message);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <nav className="absolute top-0 w-full p-6 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Gamepad2 className="w-8 h-8 text-[#48ff00]" />
            <span className="text-2xl font-bold glow-green">EspeonX</span>
          </motion.div>
          <div className="hidden md:flex gap-8">
            {["Features", "Marketplace", "Tournaments", "Governance", "Docs"].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConnect}
            >
              {walletInfo.address ? 
                `Connected: ${walletInfo.address.slice(0, 6)}...${walletInfo.address.slice(-4)}` : 
                'Connect Wallet'}
            </motion.button>
        </div>
      </nav>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <Spotlight className="max-w-3xl">
            <AnimatedText text="Revolutionizing Esports Through Decentralization" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 mb-8 mt-4"
            >
              Own your achievements, trade your assets, and shape the future of competitive gaming in a transparent, player-driven ecosystem.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 items-center"
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="flex items-center gap-2 text-[#48ff00] hover:text-[#3dd600] transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </Spotlight>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-black/50 backdrop-blur-lg p-6 rounded-xl border border-[#48ff00]/20 hover:border-[#48ff00]/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-[#48ff00] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Skins Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold mb-8 glow-green">Featured Skins</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredSkins.map((skin, index) => (
                <motion.div
                  key={skin.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="bg-black/50 backdrop-blur-lg rounded-xl overflow-hidden border border-[#48ff00]/20 hover:border-[#48ff00]/50 transition-all duration-300"
                >
                  <img src={skin.image} alt={skin.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{skin.name}</h3>
                    <p className="text-gray-400 mb-2">{skin.game}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#48ff00] font-semibold">{skin.price}</span>
                      <span className="text-sm text-gray-400">{skin.rarity}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tournaments Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold mb-8 glow-green">Upcoming Tournaments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingTournaments.map((tournament, index) => (
                <motion.div
                  key={tournament.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  className="bg-black/50 backdrop-blur-lg p-6 rounded-xl border border-[#48ff00]/20 hover:border-[#48ff00]/50 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{tournament.title}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Prize Pool</p>
                      <p className="text-[#48ff00] font-semibold">{tournament.prize}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Game</p>
                      <p className="text-white">{tournament.game}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Date</p>
                      <p className="text-white">{tournament.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Size</p>
                      <p className="text-white">{tournament.participants}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="h-screen flex flex-col justify-center items-center space-y-10 bg-black text-white">
      <VelocityScroll defaultVelocity={4} numRows={1} className="text-white-400 ">
      <span className="text-green-500 transition-all duration-300 hover:text-green-400 hover:neon-glow">
        EspeonX
      </span>:  Decentralized. 
      <span className="text-green-500 transition-all duration-300 hover:text-green-400 hover:neon-glow">
        Fair.
      </span> Player-First.
      </VelocityScroll>

      <VelocityScroll defaultVelocity={4} numRows={1} className="text-white-400 ">
      <span className="text-green-500 transition-all duration-300 hover:text-green-400 hover:neon-glow">
        EspeonX
      </span>:  Decentralized. Transparent. Fair. Limitless.  
      
      </VelocityScroll>

      {/* <VelocityScroll defaultVelocity={5} numRows={1} className="text-green-500">
         Fast and Interactive
      </VelocityScroll> */}
    </div>
        
        {/* Footer */}
        <footer className="mt-32 border-t border-[#48ff00]/20 bg-black/50 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Gamepad2 className="w-6 h-6 text-[#48ff00]" />
                  <span className="text-xl font-bold glow-green">EspeonX</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Revolutionizing the future of gaming through blockchain technology and decentralized ecosystems.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-[#48ff00] transition-colors">Marketplace</a></li>
                  <li><a href="#" className="hover:text-[#48ff00] transition-colors">Tournaments</a></li>
                  <li><a href="#" className="hover:text-[#48ff00] transition-colors">Leaderboard</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-[#48ff00] transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-[#48ff00] transition-colors">Whitepaper</a></li>
                  <li><a href="#" className="hover:text-[#48ff00] transition-colors">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Community</h4>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-[#48ff00] transition-colors">
                    <Discord className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#48ff00] transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#48ff00] transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-[#48ff00] transition-colors">
                    <Twitch className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#48ff00]/20 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 EspeonX. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                Made with <Heart className="w-4 h-4 text-[#48ff00]" /> for the gaming community
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
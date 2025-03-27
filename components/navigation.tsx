"use client";

import { Wallet2, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isConnected, setIsConnected] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleConnect = async () => {
    // Wallet connection logic would go here
    setIsConnected(true);
  };

  return (
    <nav className="border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            GameItems NFT
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/games" className="text-foreground/80 hover:text-primary transition-colors">
              Games
            </Link>
            <Link href="/marketplace" className="text-foreground/80 hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link href="/create" className="text-foreground/80 hover:text-primary transition-colors">
              Create
            </Link>
            <Button
              variant={isConnected ? "outline" : "default"}
              onClick={handleConnect}
              className="flex items-center gap-2"
            >
              <Wallet2 className="h-4 w-4" />
              {isConnected ? "0x1234...5678" : "Connect Wallet"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border/40"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/games"
                className="block text-foreground/80 hover:text-primary transition-colors"
              >
                Games
              </Link>
              <Link
                href="/marketplace"
                className="block text-foreground/80 hover:text-primary transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/create"
                className="block text-foreground/80 hover:text-primary transition-colors"
              >
                Create
              </Link>
              <Button
                variant={isConnected ? "outline" : "default"}
                onClick={handleConnect}
                className="w-full flex items-center justify-center gap-2"
              >
                <Wallet2 className="h-4 w-4" />
                {isConnected ? "0x1234...5678" : "Connect Wallet"}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
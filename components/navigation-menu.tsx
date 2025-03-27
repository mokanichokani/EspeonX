"use client"

import * as React from "react"
import Link from "next/link"
import { Users, Vote, Wallet, Menu, UserPlus, Trophy, Sword } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavigationMenu() {
  return (
    <nav className="border-b border-primary/20">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="font-bold text-primary">EspeonX</span>
          </Link>
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/manager/governance">
              <Button variant="ghost" className="gaming-button">
                <Vote className="mr-2 h-4 w-4" />
                Governance
              </Button>
            </Link>
            <Link href="/manager/management">
              <Button variant="ghost" className="gaming-button">
                <Users className="mr-2 h-4 w-4" />
                Team
              </Button>
            </Link>
            <Link href="/manager/staking">
              <Button variant="ghost" className="gaming-button">
                <Sword className="mr-2 h-4 w-4" />
                Staking
              </Button>
            </Link>
            <Link href="/manager/treasury">
              <Button variant="ghost" className="gaming-button">
                <Wallet className="mr-2 h-4 w-4" />
                Treasury
              </Button>
            </Link>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="md:hidden gaming-button">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="gaming-card">
              <DropdownMenuItem>
                <Link href="/manager/governance" className="flex items-center">
                  <Vote className="mr-2 h-4 w-4" />
                  Governance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/manager/management" className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/manager/staking" className="flex items-center">
                  <Sword className="mr-2 h-4 w-4" />
                  Staking
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/manager/treasury" className="flex items-center">
                  <Wallet className="mr-2 h-4 w-4" />
                  Treasury
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="gaming-button">Connect Wallet</Button>
        </div>
      </div>
    </nav>
  )
}
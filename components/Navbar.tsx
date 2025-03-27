import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-primary">
            EspeonX
          </Link>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              For developers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              For chains
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Solutions
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Company
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Resources
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm">
            Contact sales
          </Button>
          <Button className="text-sm">Sign in</Button>
        </div>
      </div>
    </nav>
  )
}


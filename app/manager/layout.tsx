import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { NavigationMenu } from '@/components/navigation-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DAO Clan Management',
  description: 'Decentralized clan and team management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationMenu />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
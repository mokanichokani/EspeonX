import "./globals.css"
import { Inter } from "next/font/google"
import { Navigation } from "./components/navigation"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Esports Statistics and Analytics",
  description: "Comprehensive esports tournament statistics and analytics platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0B0B0E] text-gray-100 min-h-screen`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}


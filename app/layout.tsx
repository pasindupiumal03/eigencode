import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "POLYBIUOS - AI-Powered Code Generation",
  description:
    "An intelligent CLI tool for code generation, analysis, and optimization powered by advanced machine learning models.",
  generator: 'v0.dev',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

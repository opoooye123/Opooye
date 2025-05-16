import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AosProvider from "@/components/aos-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Opooye Olamilekan | Frontend Developer Portfolio",
  description: "Professional portfolio showcasing frontend development skills and projects",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AosProvider>{children}</AosProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

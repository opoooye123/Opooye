"use client"

import type React from "react"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AosProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })
  }, [])

  return <>{children}</>
}

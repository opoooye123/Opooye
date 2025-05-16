"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
}

export default function AnimatedText({ text }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 150) // Adjust speed as needed

      return () => clearTimeout(timeout)
    } else if (isTyping && currentIndex >= text.length) {
      // When typing is complete, wait before starting to delete
      const timeout = setTimeout(() => {
        setIsTyping(false)
        setCurrentIndex(text.length - 1)
      }, 2000) // Wait 2 seconds before starting to delete

      return () => clearTimeout(timeout)
    } else if (!isTyping && currentIndex >= 0) {
      // Delete text
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex))
        setCurrentIndex((prev) => prev - 1)
      }, 75) // Delete faster than typing

      return () => clearTimeout(timeout)
    } else if (!isTyping && currentIndex < 0) {
      // Reset to start typing again
      const timeout = setTimeout(() => {
        setIsTyping(true)
        setCurrentIndex(0)
        setDisplayText("")
      }, 500) // Wait before starting to type again

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isTyping, text])

  return (
    <span className="relative">
      {displayText}
      <span className="absolute right-[-8px] top-0 h-full w-[3px] bg-emerald-400 animate-blink"></span>
    </span>
  )
}

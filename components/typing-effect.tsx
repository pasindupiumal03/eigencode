"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
}

export function TypingEffect({ text, speed = 50, delay = 0, className = "", showCursor = true }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(delayTimer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, isTyping, speed, text])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (currentIndex < text.length || isTyping) && (
        <span className="inline-block w-2 h-4 bg-cyber-green ml-0.5 animate-blink" />
      )}
    </span>
  )
}

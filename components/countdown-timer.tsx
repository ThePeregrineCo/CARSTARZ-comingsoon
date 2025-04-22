"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const target = new Date(targetDate).getTime()
      
      if (isNaN(target)) {
        throw new Error("Invalid target date")
      }

      const calculateTimeLeft = () => {
        const now = new Date().getTime()
        const difference = target - now

        if (difference <= 0) {
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          }
        }

        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        }
      }

      setTimeLeft(calculateTimeLeft())

      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft())
      }, 1000)

      return () => clearInterval(timer)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    }
  }, [targetDate])

  if (error) {
    return (
      <div className="py-8 text-center" role="alert">
        <p className="text-red-400">Unable to display countdown: {error}</p>
      </div>
    )
  }

  if (!timeLeft) {
    return (
      <div className="py-8">
        <div className="grid grid-cols-4 gap-4 text-center animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 w-full h-16" />
              <div className="h-4 w-16 bg-white/10 rounded mt-2" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="py-8" role="timer" aria-live="polite">
      <div className="grid grid-cols-4 gap-4 text-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 w-full"
        aria-label={`${value} ${label}`}
      >
        <span className="text-2xl md:text-4xl font-bold">{value.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-sm mt-2 text-slate-300">{label}</span>
    </div>
  )
}

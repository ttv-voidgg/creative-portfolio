"use client"

import { useEffect, useState } from "react"

interface LoaderProps {
  isLoading: boolean
  progress: number
}

export function Loader({ isLoading, progress }: LoaderProps) {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayProgress(progress)
    }, 100)
    return () => clearTimeout(timer)
  }, [progress])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-[#141414] z-[100] flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo/Title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[130%] font-pp-editorial">
            Carlos de Borja
          </h1>
          <p className="text-white/50 text-sm font-light">Loading portfolio...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-[80vw]">
          <div className="h-px bg-white/10 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-white/50 transition-all duration-300 ease-out"
              style={{ width: `${displayProgress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-white/40">
            <span>Loading assets</span>
            <span>{Math.round(displayProgress)}%</span>
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

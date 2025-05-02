"use client"

import { motion } from "framer-motion"
import { Play, Pause, Maximize2, Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface FeatureSectionProps {
  title: string
  description?: string
  videoSrc: string
  features: string[]
}

export function FeatureSection({ title, videoSrc, features }: FeatureSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeout = useRef<number | null>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  // Controls auto-hide
  const showControlsWithTimeout = () => {
    setShowControls(true)
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current)
    if (isPlaying) {
      controlsTimeout.current = window.setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  // Video Events
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
      showControlsWithTimeout()
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
      setShowControls(true)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen?.()
        ;(videoRef.current as any).webkitEnterFullscreen?.() // iOS fallback
      } else {
        document.exitFullscreen()
      }
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
      setDuration(videoRef.current.duration)
    }
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressBarRef.current) return
    const rect = progressBarRef.current.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const time = percent * duration
    videoRef.current.currentTime = time
    setCurrentTime(time)
  }

  useEffect(() => {
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current)
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video Section */}
        <div className="space-y-4">
          <div className="backdrop-blur-sm bg-[#1a1a1a]/90 rounded-2xl p-6 border border-[#262626] shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight">App Preview</h2>
            <div className="h-[2px] w-full bg-[#D70000] my-4" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-[75%] md:w-full mx-auto aspect-[9/16] rounded-xl overflow-hidden backdrop-blur-sm bg-[#1a1a1a]/80 border border-[#262626] shadow-lg group"
            onTouchStart={showControlsWithTimeout}
            onMouseEnter={showControlsWithTimeout}
            onMouseMove={showControlsWithTimeout}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              poster="/thumbnails/APPvideo THUMBPOSTER.png"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={() => {
                if (videoRef.current) {
                  setDuration(videoRef.current.duration)
                }
              }}
            />

            {/* Controls Overlay */}
            {showControls && (
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300">
                {/* Progress */}
                <div
                  ref={progressBarRef}
                  className="w-full h-1 bg-gray-600/50 cursor-pointer group-hover:h-2 transition-all duration-300"
                  onClick={handleSeek}
                >
                  <div
                    className="h-full bg-[#D70000]"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <button onClick={isPlaying ? handlePause : handlePlay} className="text-white hover:text-[#D70000]">
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    <button onClick={toggleMute} className="text-white hover:text-[#D70000]">
                      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                    <span className="text-white text-sm">{formatTime(currentTime)} / {formatTime(duration)}</span>
                  </div>
                  <button onClick={toggleFullscreen} className="text-white hover:text-[#D70000]">
                    <Maximize2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              </button>
            )}
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div className="backdrop-blur-sm bg-[#1a1a1a]/90 rounded-2xl p-6 border border-[#262626] shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <div className="h-[2px] w-full bg-[#D70000] my-4" />
            <div className="space-y-4">
              {features.map((feature, index) => (
                <p key={index} className="text-slate-300 text-base md:text-lg">{feature}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

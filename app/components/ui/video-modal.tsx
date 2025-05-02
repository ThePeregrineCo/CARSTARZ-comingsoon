"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Auto play when opened, pause/reset when closed
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isOpen) {
      video.play().catch(() => {}) // handle autoplay promise fail silently
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isOpen])

  // Allow closing modal with ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8">
      <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        {/* Video Player */}
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-contain"
          controls
          playsInline
          muted // Ensures autoplay works on mobile
          preload="metadata"
          poster="/thumbnails/APPvideo THUMBPOSTER.png"
        />
      </div>
    </div>
  )
}

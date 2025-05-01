import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          <X className="w-6 h-6 text-black" />
        </button>
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-contain"
          controls
          playsInline
        />
      </div>
    </div>
  )
} 
"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import ConvertKitForm from "@/components/convertkit-form"

interface LaunchModalProps {
  showModal: boolean
  setShowModal: (show: boolean) => void
}

export function LaunchModal({ showModal, setShowModal }: LaunchModalProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleFormSubmit = () => {
    setSubmitted(true)
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    })
    setTimeout(() => setShowModal(false), 4000)
  }

  return (
    <>
      {/* Launch App Button */}
      <button
        onClick={() => {
          setShowModal(true)
          setSubmitted(false)
        }}
        className="absolute top-4 right-4 bg-white text-black font-semibold px-5 py-2 rounded-full shadow hover:bg-slate-100 transition"
      >
        Launch App
      </button>

      {/* Modal with animation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white text-black max-w-md w-full p-6 rounded-xl relative space-y-4"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-black hover:text-gray-700 focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              {submitted ? (
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">Success</h2>
                  <p>Click the confirmation email and you will be one of the first in line!</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold">Get Early Access</h2>
                  <p>Enter your email to get notified when we go live.</p>
                  <div className="w-full">
                    <ConvertKitForm onSuccess={handleFormSubmit} />
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 
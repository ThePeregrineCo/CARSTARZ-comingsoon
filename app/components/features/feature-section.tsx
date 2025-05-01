"use client"

import { motion } from "framer-motion"

interface FeatureSectionProps {
  title: string
  description?: string
  videoSrc: string
  features: string[]
}

export function FeatureSection({ title, description, videoSrc, features }: FeatureSectionProps) {
  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[9/16] rounded-xl overflow-hidden backdrop-blur-sm bg-[#1a1a1a]/80 border border-[#262626] shadow-lg"
        >
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/APPvideo THUMBPOSTER.png"
          />
        </motion.div>

        {/* Features List */}
        <div className="space-y-6">
          <div className="backdrop-blur-sm bg-[#1a1a1a]/90 rounded-2xl p-6 border border-[#262626] shadow-lg">
            <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
            <div className="h-[2px] w-full bg-[#D70000] my-4" />
            <div className="space-y-4">
              <p className="text-slate-200">Claim your vehicle to create a unique ID and permanent profile page. Showcase your vehicle and partnerships across all social platforms.</p>
              <p className="text-slate-200">Add cryptographically secure attestations from licensed appraisers. Use verifiable trust for insurance or supporting vehicle sales.</p>
              <p className="text-slate-200">Enjoy algorithm-free social feeds curated by categories. Join private owner channels and IRL Car Clubs.</p>
              <p className="text-slate-200">Access end-to-end encrypted messaging between users.</p>
              <p className="text-slate-200">Research top service providers and products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
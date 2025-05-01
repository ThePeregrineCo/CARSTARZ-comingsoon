"use client"

import { useState } from "react"
import { CountdownTimer } from "@/components/countdown-timer"
import { Instagram } from "lucide-react"
import Image from "next/image"
import { LaunchModal } from "@/components/launch-modal"
import { FeatureSection } from "./components/features/feature-section"

export default function ComingSoonPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen p-4"
        role="main"
      >
        <LaunchModal showModal={showModal} setShowModal={setShowModal} />

        <div className="w-full max-w-3xl mx-auto text-center space-y-16 md:space-y-24">
          {/* Logo */}
          <div className="flex justify-center mt-12">
            <div className="w-[77%]">
              <Image
                src="/CARSTARZhorzwhite.svg"
                width={400}
                height={150}
                alt="CARSTARZ Logo"
                priority
                className="w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-300">
            A digital vehicle registry and owners club for enthusiasts and collectors.
          </p>

          {/* Feature Section */}
          <FeatureSection
            title="CARSTARZ Features"
            description="Experience the future of vehicle ownership with our comprehensive platform designed for enthusiasts and collectors."
            videoSrc="/demos/CARSTARZ DEMO v2_SM.mp4"
            features={[
              "Create and customize your digital vehicle profile",
              "Track service history and maintenance records",
              "Connect with fellow enthusiasts in our exclusive club",
              "Share your vehicle's story on social media",
              "Access verified marketplace for buying and selling",
              "Earn through affiliate links and content sharing"
            ]}
          />

          {/* Headline and Signup */}
          <div className="space-y-6 max-w-xl mx-auto mt-8 md:mt-16">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Coming Soon</h1>
            </div>
            <CountdownTimer targetDate="2025-06-15T00:00:00" />
            
            {/* Join Waitlist Button */}
            <div className="pt-8 md:pt-12">
              <button
                onClick={() => setShowModal(true)}
                className="inline-block bg-white text-black text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:bg-slate-100 transition"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center mt-8 md:mt-12">
            <a
              href="https://www.instagram.com/carstarz_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slate-300 transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400">
        <p>© {new Date().getFullYear()} CARSTARZ. All rights reserved.</p>
      </footer>
    </div>
  )
}

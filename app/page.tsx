"use client"

import { useState } from "react"
import { CountdownTimer } from "@/components/countdown-timer"
import { Instagram, MailPlus, Rocket } from "lucide-react"
import Image from "next/image"
import { LaunchModal } from "@/components/launch-modal"
import { FeatureSection } from "./components/features/feature-section"

export default function ComingSoonPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] text-white">
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen p-4"
        role="main"
      >
        <LaunchModal showModal={showModal} setShowModal={setShowModal} />

        {/* Launch App Button - Top Right */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D70000] to-[#FF4B2B] text-white text-sm md:text-lg font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:shadow-[0_0_15px_#D70000] transition-all duration-300"
          >
            <Rocket className="w-4 h-4 md:w-5 md:h-5" />
            Launch App
          </button>
        </div>

        <div className="w-full max-w-3xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Logo */}
          <div className="flex justify-center mt-16 md:mt-12">
            <div className="w-[77%] backdrop-blur-sm bg-[#0f0f0f]/80 rounded-2xl p-6">
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
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_rgba(0,0,0,1)_100%)]" />
            <div className="relative backdrop-blur-sm bg-[#0f0f0f]/80 rounded-2xl p-6">
              <p className="text-lg md:text-xl text-slate-300">
                A digital vehicle registry and owner ecosystem for enthusiasts based on authenticity and curated car culture. Users of the platform own their vehicles, their content, and the ability to monetize it.
              </p>
            </div>
          </div>

          {/* Feature Section */}
          <div className="relative py-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_rgba(0,0,0,1)_100%)]" />
            <div className="relative">
              <FeatureSection
                title="CARSTARZ Highlights"
                videoSrc="/demos/CARSTARZ DEMO v2_SM.mp4"
                features={[
                  "Claim your vehicle to create a unique ID and permanent, media rich, profile page",
                  "Add secure attestations from licensed appraisers, builders, and restylers",
                  "Use verifiable trust for insurance or supporting vehicle sale",
                  "Research top service providers and products",
                  "Showcase your vehicle and partnerships from any social platforms",
                  
                ]}
              />
            </div>
          </div>

          {/* Headline and Signup */}
          <div className="relative py-8">
            <div className="relative space-y-6 max-w-xl mx-auto">
              <div className="space-y-2 backdrop-blur-sm bg-[#1a1a1a]/90 rounded-2xl p-6 border border-[#262626] shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Coming Soon</h1>
                <div className="h-[2px] w-full bg-[#D70000] my-4" />
              </div>
              <CountdownTimer targetDate="2025-06-15T00:00:00" />
              
              {/* Join Waitlist Button */}
              <div className="pt-8 md:pt-12 flex justify-center">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D70000] to-[#FF4B2B] text-white text-lg font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-[0_0_15px_#D70000] transition-all duration-300"
                >
                  <MailPlus className="w-5 h-5" />
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="relative py-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_rgba(0,0,0,1)_100%)]" />
            <div className="relative flex justify-center mt-4 md:mt-6">
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
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 border-t border-[#262626]">
        <p>© {new Date().getFullYear()} Peregrine LTD. All rights reserved.</p>
      </footer>
    </div>
  )
}

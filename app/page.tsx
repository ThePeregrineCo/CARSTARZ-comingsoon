import { CountdownTimer } from "@/components/countdown-timer"
import ConvertKitForm from "@/components/convertkit-form"
import { Instagram } from 'lucide-react'
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "CARSTARZ - Digital Vehicle Registry & Owners Club",
  description: "A digital vehicle registry and owners club for enthusiasts and collectors based on authenticity and curated car culture.",
  keywords: ["car registry", "vehicle registry", "car enthusiasts", "car collectors", "car culture"],
  openGraph: {
    title: "CARSTARZ - Digital Vehicle Registry & Owners Club",
    description: "A digital vehicle registry and owners club for enthusiasts and collectors based on authenticity and curated car culture.",
    type: "website",
    images: ["/CARSTARZhorzwhite.svg"],
  },
}

export default function ComingSoonPage() {
  return (
    <div 
      className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4"
      role="main"
    >
      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        {/* Logo section */}
        <div className="flex justify-center mt-12 mb-16">
          <div className="w-[77%]">
            <Image
              src="/CARSTARZhorzwhite.svg?height=150&width=400"
              width={400}
              height={150}
              alt="CARSTARZ Logo"
              priority
              className="w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Coming Soon</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
            CARSTARZ is a digital vehicle registry and owners club for enthusiasts and collectors based on authenticity and curated car culture.
          </p>
        </div>

        <CountdownTimer targetDate="2025-06-15T00:00:00" />

        <div 
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 space-y-4 max-w-xl mx-auto"
          role="region"
          aria-label="Launch notification signup"
        >
          <h2 className="text-2xl font-semibold">Get Notified When We Launch</h2>
          <p className="text-slate-300">Be the first to know when we go live. No spam, just a friendly update.</p>
          <div className="relative">
            <ConvertKitForm />
          </div>
        </div>
        
        <footer className="pt-8 text-slate-400">
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/carstarz_io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-full"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-20 h-20" />
            </a>
          </div>
          <p className="mt-4">© {new Date().getFullYear()} CARSTARZ. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

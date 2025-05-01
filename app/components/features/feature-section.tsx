"use client"

interface FeatureSectionProps {
  title: string
  description: string
  videoSrc: string
  features: string[]
}

export function FeatureSection({ title, description, videoSrc, features }: FeatureSectionProps) {
  return (
    <div className="w-full py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Video */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[9/16] bg-gray-500 rounded-3xl shadow-lg overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/demos/CARSTARZ DEMO v2_SM.mp4"
                muted
                playsInline
                loop
                autoPlay
                preload="auto"
                poster="/APPvideo THUMBPOSTER.png"
                onLoadedData={() => console.log("Video loaded")}
              >
                <source src="/demos/CARSTARZ DEMO v2_SM.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-white">{title}</h2>
              <p className="text-lg text-slate-300">{description}</p>
            </div>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white mt-1">•</span>
                  <span className="text-lg text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 
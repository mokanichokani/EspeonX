import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const guideSteps = [
  {
    title: "Welcome to TYPE-Z",
    description: "A zombie survival game where you fight, craft, and earn crypto rewards.",
    image: "/guide-1.png"
  },
  {
    title: "Survival Basics",
    description: "Every zombie will have a diffrent word above them and user has to type the word correctly to kill the zombie.",
    image: "/guide-2.png"
  },
  {
    title: "Earning Rewards",
    description: "The intensity of the zombies will increase as the game progresses and so will the rewards. If you get killed, you will lose all your resources and the zombies will be released and kill the Player.",
    image: "/guide-3.png"

  },
  {
    title: "Ready to Play",
    description: "Connect your wallet and start your survival journey in TYPE-Z!",
    image: "/guide-1.png"
  }
]

interface GameGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GameGuideModal({ isOpen, onClose }: GameGuideModalProps) {
  const [currentStep, setCurrentStep] = useState(0)

  if (!isOpen) return null

  const handleNext = () => {
    if (currentStep < guideSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSkip = () => {
    onClose()
    setCurrentStep(0)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-2xl bg-card p-8 neon-border">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-8">
          <div className="relative h-64 w-full overflow-hidden rounded-xl neon-border mb-6">
            <Image
              src={guideSteps[currentStep].image}
              alt={guideSteps[currentStep].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <h2 className="text-2xl font-bold neon-text mb-2">
            {guideSteps[currentStep].title}
          </h2>
          <p className="text-muted-foreground">
            {guideSteps[currentStep].description}
          </p>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleSkip}
            className="px-6 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Skip Guide
          </button>
          <div className="flex gap-4">
            {currentStep < guideSteps.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-full bg-primary text-sm font-medium neon-border hover-glow transition-all"
              >
                Next
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-primary text-sm font-medium neon-border hover-glow transition-all"
              >
                Get Started
              </button>
            )}
          </div>
        </div>

        {/* Step indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {guideSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentStep 
                  ? 'bg-primary w-4' 
                  : 'bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 
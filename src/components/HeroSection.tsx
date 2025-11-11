import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import heroImage from '@/assets/hero-paddles.jpg'

export const HeroSection = () => {
  const scrollToPaddles = () => {
    const element = document.getElementById('featured-paddles')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Find Your Perfect Paddle
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Premium pickleball and padel gear for players at every level. From beginner to pro, we have the equipment you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToPaddles}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Choose Your Paddle <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
              onClick={() => document.getElementById('starter-kits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Starter Kits
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ProductCard } from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Package } from 'lucide-react'
import type { Product } from '@/lib/supabase'

interface StarterKitsSectionProps {
  products: Product[]
}

export const StarterKitsSection = ({ products }: StarterKitsSectionProps) => {
  const starterKits = products.filter(p => p.tags?.includes('starter-kit'))

  if (starterKits.length === 0) return null

  return (
    <section id="starter-kits" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
            <Package className="h-8 w-8 text-accent-foreground" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Starter Kits</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to start playing in one convenient package. Perfect for beginners or gift-giving.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {starterKits.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2"
            onClick={() => {
              const element = document.getElementById('featured-paddles')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Or Browse Individual Paddles
          </Button>
        </div>
      </div>
    </section>
  )
}

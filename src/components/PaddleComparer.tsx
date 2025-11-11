import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '@/lib/supabase'
import { useSettings } from '@/contexts/SettingsContext'

interface PaddleComparerProps {
  products: Product[]
}

export const PaddleComparer = ({ products }: PaddleComparerProps) => {
  const [paddle1, setPaddle1] = useState<Product | null>(null)
  const [paddle2, setPaddle2] = useState<Product | null>(null)
  const { formatMoney } = useSettings()

  const featuredPaddles = products.filter(p => p.featured).slice(0, 6)

  const getProductFeatures = (product: Product): string[] => {
    const features: string[] = []
    if (product.tags?.includes('advanced')) features.push('Advanced Level')
    if (product.tags?.includes('intermediate')) features.push('Intermediate Level')
    if (product.tags?.includes('beginner')) features.push('Beginner Level')
    if (product.tags?.includes('carbon-fiber')) features.push('Carbon Fiber')
    if (product.tags?.includes('power')) features.push('Power Focused')
    if (product.tags?.includes('control')) features.push('Control Focused')
    if (product.tags?.includes('lightweight')) features.push('Lightweight')
    return features
  }

  return (
    <section id="paddle-comparer" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Compare Paddles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Can't decide? Compare two paddles side by side to find the perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Paddle 1 */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Paddle 1</CardTitle>
              <Select 
                value={paddle1?.id || ''} 
                onValueChange={(id) => setPaddle1(featuredPaddles.find(p => p.id === id) || null)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a paddle" />
                </SelectTrigger>
                <SelectContent>
                  {featuredPaddles.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              {paddle1 ? (
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    {paddle1.images && paddle1.images.length > 0 ? (
                      <img 
                        src={paddle1.images[0]}
                        alt={paddle1.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No image
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{paddle1.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {formatMoney(paddle1.price || 0)}
                    </p>
                    <div className="space-y-2 mb-4">
                      {getProductFeatures(paddle1).map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link to={`/products/${paddle1.slug}`}>
                      <Button className="w-full">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  Select a paddle to compare
                </div>
              )}
            </CardContent>
          </Card>

          {/* Paddle 2 */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Paddle 2</CardTitle>
              <Select 
                value={paddle2?.id || ''} 
                onValueChange={(id) => setPaddle2(featuredPaddles.find(p => p.id === id) || null)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a paddle" />
                </SelectTrigger>
                <SelectContent>
                  {featuredPaddles.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              {paddle2 ? (
                <div className="space-y-4">
                  <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                    {paddle2.images && paddle2.images.length > 0 ? (
                      <img 
                        src={paddle2.images[0]}
                        alt={paddle2.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        No image
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{paddle2.title}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {formatMoney(paddle2.price || 0)}
                    </p>
                    <div className="space-y-2 mb-4">
                      {getProductFeatures(paddle2).map((feature) => (
                        <div key={feature} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link to={`/products/${paddle2.slug}`}>
                      <Button className="w-full">
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  Select a paddle to compare
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, Target, Zap } from 'lucide-react'
import type { Collection } from '@/lib/supabase'

interface LevelGuideProps {
  collections: Collection[]
  onViewCollection: (collectionId: string) => void
}

export const LevelGuide = ({ collections, onViewCollection }: LevelGuideProps) => {
  const levels = [
    {
      icon: Target,
      title: 'Beginner',
      description: 'Just starting out? Choose paddles with larger sweet spots and forgiving designs.',
      features: ['Easy to control', 'Lightweight', 'Great value'],
      collectionName: 'Beginner Paddles',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Intermediate',
      description: 'Ready to level up? Balanced paddles that combine power and precision.',
      features: ['Versatile play', 'Better materials', 'Improved control'],
      collectionName: 'Intermediate Paddles',
      color: 'from-primary to-primary/80'
    },
    {
      icon: Trophy,
      title: 'Advanced',
      description: 'Competitive player? Professional-grade paddles with maximum performance.',
      features: ['Tournament-ready', 'Premium materials', 'Superior power'],
      collectionName: 'Advanced Paddles',
      color: 'from-accent to-accent/80'
    }
  ]

  const getCollectionByName = (name: string) => {
    return collections.find(c => c.name === name)
  }

  return (
    <section id="level-guide" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Find Your Level</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Not sure which paddle to choose? Let us guide you based on your skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level) => {
            const Icon = level.icon
            const collection = getCollectionByName(level.collectionName)
            
            return (
              <Card key={level.title} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{level.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {level.description}
                  </p>
                  <ul className="space-y-2">
                    {level.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {collection && (
                    <Button 
                      className="w-full mt-4"
                      onClick={() => onViewCollection(collection.id)}
                    >
                      View {level.title} Paddles
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

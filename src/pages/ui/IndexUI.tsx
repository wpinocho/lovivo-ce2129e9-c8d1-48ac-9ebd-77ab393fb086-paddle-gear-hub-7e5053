import { ProductCard } from '@/components/ProductCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import { HeroSection } from '@/components/HeroSection';
import { PaddleComparer } from '@/components/PaddleComparer';
import { StarterKitsSection } from '@/components/StarterKitsSection';
import { LevelGuide } from '@/components/LevelGuide';
import { Button } from '@/components/ui/button';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Clean pickleball & padel gear store homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    filteredProducts,
    handleViewCollectionProducts,
  } = logic;

  const featuredProducts = filteredProducts.filter(p => p.featured);

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Paddles */}
      <section id="featured-paddles" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Top Paddles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular paddles trusted by thousands of players
            </p>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {featuredProducts.slice(0, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No featured products available.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Paddle Comparer */}
      <PaddleComparer products={filteredProducts} />

      {/* Starter Kits */}
      <StarterKitsSection products={filteredProducts} />

      {/* Level Guide */}
      <LevelGuide 
        collections={collections}
        onViewCollection={handleViewCollectionProducts}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of players who trust us for their pickleball and padel gear
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            onClick={() => {
              const element = document.getElementById('featured-paddles')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Choose Your Paddle
          </Button>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};

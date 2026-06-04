import { Navigation } from '@/components/sections/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProductsSection } from '@/components/sections/products'
import { ValuesSection } from '@/components/sections/values'
import { ContactSection } from '@/components/sections/contact'
import { FooterSection } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ValuesSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

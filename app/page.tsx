import { Navigation } from '@/components/sections/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ServicesSection } from '@/components/sections/services'
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
      <ServicesSection />
      <ProductsSection />
      <ValuesSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

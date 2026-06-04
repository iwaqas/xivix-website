'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

export const services = [
  {
    title: 'Office Augmentation',
    description: 'Streamline workflows and boost productivity through customized office technologies. We optimize office environments with tailored solutions for efficiency and employee collaboration.',
    image: 'https://cdn.abacus.ai/images/f5453ca6-6d02-499a-a1bd-0c85c212fe68.png',
    features: ['Workflow Optimization', 'Productivity Tools', 'Collaboration Systems'],
  },
  {
    title: 'AI & Data Tech',
    description: 'Leverage AI and data-driven strategies to unlock business insights and competitive advantages. From predictive analytics to machine learning development and NLP solutions.',
    image: 'https://cdn.abacus.ai/images/a3044b45-8b1e-4489-a8a1-7f6d26dd7533.png',
    features: ['Machine Learning', 'Predictive Analytics', 'NLP Solutions'],
  },
  {
    title: 'Hardware & Apps',
    description: 'Integrate hardware and software solutions for seamless business operations. From smart home devices to custom business applications for convenience and operational improvement.',
    image: 'https://cdn.abacus.ai/images/8980bcf2-2238-4822-bde3-2c558df786ca.png',
    features: ['Hardware Integration', 'Custom Apps', 'Smart Solutions'],
  },
  {
    title: 'Deployment Services',
    description: 'Ensure smooth implementation of technology solutions through expert deployment services. Comprehensive consulting from initial consultation through final deployment.',
    image: 'https://cdn.abacus.ai/images/d93218d4-8d18-4062-a261-db8c1d0a3637.png',
    features: ['IT Infrastructure', 'System Optimization', 'End-to-End Support'],
  },
  {
    title: 'Remote Network Administration',
    description: 'Remote monitoring and maintenance to minimize downtime. Scheduled maintenance, security updates, and performance optimization for your network infrastructure.',
    image: 'https://cdn.abacus.ai/images/a36d13bf-9bd3-4338-a5a3-62e0ddde2ca9.png',
    features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization'],
  },
  {
    title: 'Cyber & Information Security',
    description: 'Protect your cyber assets and safeguard critical information with state-of-the-art technologies. Risk inspection, advanced protections, and round-the-clock monitoring.',
    image: 'https://cdn.abacus.ai/images/431c90e8-06bf-47be-bf8d-f1cb1279f460.png',
    features: ['Threat Detection', 'Risk Assessment', 'Compliance'],
  },
  {
    title: 'eCommerce Virtual Agents',
    description: 'Improve your digital customer experience with AI-powered virtual agents. 24/7 support, personalized recommendations, and NLP-driven interactions for easier buying.',
    image: 'https://cdn.abacus.ai/images/0bd25750-3db0-41c4-9d6d-7eb0d5b82278.png',
    features: ['AI Chatbots', 'Personalized Recommendations', '24/7 Support'],
  },
  {
    title: 'Wealth & Business Portfolio Management',
    description: 'Achieve your financial goals and optimize your assets with tailored portfolio management. Our experienced advisors provide expert guidance on investment options, risk management, and wealth preservation.',
    image: 'https://cdn.abacus.ai/images/31a3ff6e-489c-4c21-bc54-8379b8de17c2.png',
    features: ['Investment Strategy', 'Risk Management', 'Wealth Preservation'],
  },
]

interface ServicesCarouselProps {
  theme?: 'light' | 'dark'
}

export function ServicesCarousel({ theme = 'light' }: ServicesCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dark = theme === 'dark'

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }, [])

  const startAutoplay = useCallback(() => {
    stopAutoplay()
    autoplayRef.current = setInterval(() => emblaApi?.scrollNext(), 5000)
  }, [emblaApi, stopAutoplay])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  }, [startAutoplay, stopAutoplay])

  return (
    <div onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      {/* Slides */}
      <div className="overflow-hidden -mx-6 px-6 md:-mx-0 md:px-0" ref={emblaRef}>
        <div className="flex gap-5">
          {services.map((service, index) => (
            <div key={service.title} className="flex-none w-[88%] md:w-[82%]">
              <div className="bg-white rounded-2xl overflow-hidden border border-white/20 shadow-lg flex flex-col md:flex-row min-h-[360px] md:min-h-[400px]">
                {/* Image panel */}
                <div className="relative w-full md:w-[44%] aspect-[16/10] md:aspect-auto shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 88vw, 44vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(213,72%,20%)]/65 to-transparent" />
                  <div className="absolute bottom-5 left-6 font-mono text-6xl font-bold text-white/20 leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                {/* Content panel */}
                <div className="flex-1 p-7 md:p-9 flex flex-col justify-center">
                  <span className="text-[hsl(190,60%,45%)] text-xs font-medium tracking-widest uppercase mb-3 block">
                    Business Solution
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-3 py-1.5 rounded-full bg-[hsl(190,60%,45%)]/10 text-[hsl(190,60%,40%)] font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="self-start inline-flex items-center gap-2 bg-gradient-to-r from-[hsl(213,72%,30%)] to-[hsl(190,60%,45%)] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <span className={`text-sm font-mono tabular-nums w-16 ${dark ? 'text-white/50' : 'text-muted-foreground'}`}>
          <span className={`font-semibold ${dark ? 'text-white' : 'text-foreground'}`}>
            {String(selectedIndex + 1).padStart(2, '0')}
          </span>
          &nbsp;/&nbsp;{String(services.length).padStart(2, '0')}
        </span>

        <div className="flex gap-1.5 items-center">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? `w-7 h-2 ${dark ? 'bg-white' : 'bg-[hsl(213,72%,30%)]'}`
                  : `w-2 h-2 ${dark ? 'bg-white/30 hover:bg-white/60' : 'bg-border hover:bg-[hsl(190,60%,45%)]'}`
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-3 w-16 justify-end items-center">
          <button
            onClick={scrollPrev}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${
              dark
                ? 'border-white/30 text-white hover:bg-white hover:text-foreground hover:border-white'
                : 'border-border text-foreground hover:bg-foreground hover:text-background hover:border-foreground'
            }`}
            aria-label="Previous solution"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[hsl(213,72%,30%)] to-[hsl(190,60%,45%)] text-white flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Next solution"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

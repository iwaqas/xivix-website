'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { ServicesCarousel } from './services-carousel'

export function HeroSection() {
  const handleScrollDown = () => {
    const el = document.querySelector('#about')
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/c11a0d38-3eb6-4450-94bd-017fa353b677.png"
          alt="Modern technology workspace with digital transformation elements"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10, 25, 55, 0.93) 0%, rgba(12, 30, 60, 0.90) 50%, rgba(10, 45, 55, 0.88) 100%)' }} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {[...Array(20)]?.map((_, i: number) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/20"
            style={{
              left: `${(i * 5.3 + 10) % 100}%`,
              top: `${(i * 7.1 + 5) % 100}%`,
            }}
            animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-[1200px] mx-auto w-full px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-[hsl(190,60%,55%)]" />
          <span className="text-[hsl(190,60%,65%)] text-sm font-medium tracking-widest uppercase">
            Technology Consulting Excellence
          </span>
          <Sparkles className="w-5 h-5 text-[hsl(190,60%,55%)]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          Smart Tech &{' '}
          <span className="bg-gradient-to-r from-[hsl(190,60%,55%)] to-[hsl(190,80%,70%)] bg-clip-text text-transparent">
            Wealth Partnership
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
        >
          Empowering Innovation, Driving Success. We deliver tailored technology
          solutions that transform businesses and unlock new opportunities.
        </motion.p>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="w-full mb-10"
        >
          <ServicesCarousel theme="dark" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#services')
              el?.scrollIntoView?.({ behavior: 'smooth' })
            }}
            className="bg-gradient-to-r from-[hsl(190,60%,45%)] to-[hsl(190,80%,55%)] text-white px-8 py-4 rounded-lg font-medium text-base hover:shadow-lg hover:shadow-[hsl(190,60%,45%)]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Our Solutions
          </button>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              el?.scrollIntoView?.({ behavior: 'smooth' })
            }}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-medium text-base hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mb-8 self-center"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.button>
    </section>
  )
}

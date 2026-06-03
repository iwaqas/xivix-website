'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, GraduationCap, Bot, Users, MessageSquare, BookOpen, Mic } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    name: 'AcadPak',
    tagline: 'Learn, Grow, Succeed',
    description:
      'AcadPak connects learners with experienced mentors, structured courses, and curated career opportunities to help you make informed academic and professional decisions.',
    features: [
      { icon: GraduationCap, label: 'Mentorship' },
      { icon: BookOpen, label: 'Structured Courses' },
      { icon: Users, label: 'Career Opportunities' },
    ],
    image: 'https://cdn.abacus.ai/images/4ab86c93-955b-455e-94f1-3495f7b6df97.png',
    url: 'https://acadpak.com',
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    iconColor: 'text-teal-600',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'myParrot',
    tagline: 'AI Agents, Instantly',
    description:
      'Build, brand, and publish AI agents your customers can use instantly. Launch voice, text, and SMS assistants with modern dashboards, public share pages, and Azure-based scale.',
    features: [
      { icon: Bot, label: 'AI Assistants' },
      { icon: MessageSquare, label: 'Multi-Channel' },
      { icon: Mic, label: 'Voice & SMS' },
    ],
    image: 'https://cdn.abacus.ai/images/465f2389-414d-470e-9343-a1dd17c04090.png',
    url: 'https://myparrot.live',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    iconColor: 'text-orange-600',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
]

export function ProductsSection() {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="products" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Powering Innovation with{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Purpose-Built Products
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            XiViX proudly owns and operates two cutting-edge platforms designed to transform education and AI communication.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="space-y-16 md:space-y-24">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: (typeof products)[number]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const isReversed = index % 2 !== 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-14 items-center`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className={`absolute -inset-3 bg-gradient-to-r ${product.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/50">
            <Image
              src={product.image}
              alt={`${product.name} platform preview`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-10`} />
          </div>
        </motion.div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 ${product.badgeColor}`}>
            {product.tagline}
          </span>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {product.name}
          </h3>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {product.features.map((feature) => (
              <div
                key={feature.label}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${product.bgColor} border ${product.borderColor} transition-shadow hover:shadow-md`}
              >
                <feature.icon className={`w-4 h-4 ${product.iconColor}`} />
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${product.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300`}
          >
            Visit {product.name}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

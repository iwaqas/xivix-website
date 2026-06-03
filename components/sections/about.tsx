'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const highlights = [
  { icon: Target, label: 'Tailored Solutions', description: 'Custom strategies for your unique challenges' },
  { icon: Users, label: 'Expert Team', description: 'Seasoned professionals with startup & enterprise experience' },
  { icon: Lightbulb, label: 'Innovation First', description: 'Cutting-edge technology at the forefront' },
  { icon: TrendingUp, label: 'Measurable Results', description: 'Data-driven approaches with proven outcomes' },
]

export function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="https://cdn.abacus.ai/images/031176b7-281c-43f2-8bd8-8204105bee06.png"
                alt="XiViX team collaborating on technology solutions in modern office"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-lg border border-border"
            >
              <div className="text-3xl font-display font-bold text-gradient">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[hsl(190,60%,45%)] text-sm font-medium tracking-widest uppercase mb-3 block">
              Your Trusted Partner
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Pioneering Technology Consulting
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              XiViX, LLC is a pioneering technology consulting firm dedicated to
              driving innovation and empowering businesses to thrive in the digital
              age. Our team of seasoned professionals combines startup venture
              experience with extensive tech consulting expertise.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              We help businesses solve complex problems, unlock new opportunities,
              and achieve their goals. Our commitment to innovation, collaboration,
              and integrity ensures you always stay ahead of the curve.
            </p>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights?.map?.((item: any, index: number) => {
                const Icon = item?.icon
                return (
                  <motion.div
                    key={item?.label ?? index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[hsl(190,60%,45%)/0.1] flex items-center justify-center flex-shrink-0">
                      {Icon ? <Icon className="w-5 h-5 text-[hsl(190,60%,45%)]" /> : null}
                    </div>
                    <div>
                      <div className="font-medium text-sm text-foreground">{item?.label ?? ''}</div>
                      <div className="text-xs text-muted-foreground">{item?.description ?? ''}</div>
                    </div>
                  </motion.div>
                )
              }) ?? []}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Clock, Rocket } from 'lucide-react'

const values = [
  {
    icon: GraduationCap,
    title: 'The Knowledge You Deserve',
    description: 'With years of expertise, we deliver tailored solutions rooted in innovation. Our team brings deep technical knowledge to every project.',
    color: 'from-[hsl(213,72%,30%)] to-[hsl(213,72%,45%)]',
    bgColor: 'bg-[hsl(213,72%,30%)/0.08]',
  },
  {
    icon: Clock,
    title: 'We Respect Your Time',
    description: 'Efficient processes and dedicated teams guarantee on-time project delivery. We value your schedule and work relentlessly to meet deadlines.',
    color: 'from-[hsl(190,60%,40%)] to-[hsl(190,60%,55%)]',
    bgColor: 'bg-[hsl(190,60%,45%)/0.08]',
  },
  {
    icon: Rocket,
    title: 'Unlock Your Potential',
    description: 'Exceptional customer care supports you at every step of your tech journey. We are committed to helping you achieve extraordinary results.',
    color: 'from-[hsl(213,72%,35%)] to-[hsl(190,60%,45%)]',
    bgColor: 'bg-[hsl(213,50%,40%)/0.08]',
  },
]

export function ValuesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section className="py-24 md:py-32 bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(190,60%,45%)] text-sm font-medium tracking-widest uppercase mb-3 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Built on a foundation of expertise, efficiency, and excellence.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values?.map?.((value: any, index: number) => {
            const Icon = value?.icon
            return (
              <motion.div
                key={value?.title ?? index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${value?.bgColor ?? ''} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {Icon ? <Icon className="w-7 h-7 text-[hsl(213,72%,30%)]" /> : null}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value?.title ?? ''}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                  {value?.description ?? ''}
                </p>
              </motion.div>
            )
          }) ?? []}
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-[hsl(213,72%,30%)] to-[hsl(190,60%,40%)] rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '7', label: 'Service Areas' },
              { number: '99%', label: 'Client Retention' },
              { number: '24/7', label: 'Support Available' },
            ]?.map?.((stat: any, i: number) => (
              <div key={stat?.label ?? i}>
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{stat?.number ?? ''}</div>
                <div className="text-white/70 text-sm">{stat?.label ?? ''}</div>
              </div>
            )) ?? []}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

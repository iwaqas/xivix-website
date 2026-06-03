'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const services = [
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
    description: 'Achieve your financial goals and optimize your assets with tailored portfolio management. Our experienced advisors provide expert guidance on investment options, risk management, and wealth preservation to help you ride the waves of wealth management confidently.',
    image: 'https://cdn.abacus.ai/images/31a3ff6e-489c-4c21-bc54-8379b8de17c2.png',
    features: ['Investment Strategy', 'Risk Management', 'Wealth Preservation'],
  },
]

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(190,60%,45%)] text-sm font-medium tracking-widest uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Our Tech Consulting Solutions
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Comprehensive technology services designed to accelerate your business growth
            and digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services?.map?.((service: any, index: number) => (
            <motion.div
              key={service?.title ?? index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {/* Service Image */}
              <div className="relative aspect-video bg-muted overflow-hidden">
                <Image
                  src={service?.image ?? ''}
                  alt={service?.title ?? 'Service illustration'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2 flex items-center justify-between">
                  {service?.title ?? ''}
                  <ArrowRight className={`w-4 h-4 text-[hsl(190,60%,45%)] transition-transform duration-300 ${expandedIndex === index ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service?.description ?? ''}
                </p>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2">
                  {service?.features?.map?.((feature: string) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-[hsl(190,60%,45%)/0.08] text-[hsl(190,60%,40%)] font-medium"
                    >
                      {feature}
                    </span>
                  )) ?? []}
                </div>
              </div>
            </motion.div>
          )) ?? []}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              el?.scrollIntoView?.({ behavior: 'smooth' })
            }}
            className="bg-gradient-to-r from-[hsl(213,72%,30%)] to-[hsl(190,60%,45%)] text-white px-8 py-4 rounded-lg font-medium text-base hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

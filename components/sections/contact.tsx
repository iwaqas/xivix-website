'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Globe, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {}
    setFormData((prev: any) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast?.success?.('Message sent! We will get back to you shortly.')
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '(949) 742-5202', href: 'tel:+19497425202' },
    { icon: Mail, label: 'Email', value: 'info@xivixllc.com', href: 'mailto:info@xivixllc.com' },
    { icon: Globe, label: 'Website', value: 'xivixllc.com', href: 'https://www.xivixllc.com' },
    { icon: MapPin, label: 'Location', value: 'United States', href: null },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[hsl(190,60%,45%)] text-sm font-medium tracking-widest uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Ready to transform your business? Contact us today and let's discuss how
            we can help you achieve your technology goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-[hsl(213,72%,30%)] to-[hsl(190,60%,40%)] rounded-2xl p-8 text-white">
              <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo?.map?.((item: any, i: number) => {
                  const Icon = item?.icon
                  const content = (
                    <div className="flex items-start gap-4" key={item?.label ?? i}>
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        {Icon ? <Icon className="w-5 h-5 text-white" /> : null}
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-0.5">{item?.label ?? ''}</div>
                        <div className="text-white text-sm font-medium">{item?.value ?? ''}</div>
                      </div>
                    </div>
                  )
                  if (item?.href) {
                    return (
                      <a key={item?.label ?? i} href={item?.href} target={item?.href?.startsWith?.('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    )
                  }
                  return content
                }) ?? []}
              </div>
            </div>

            {/* Social / WhatsApp */}
            <div className="bg-white rounded-xl border border-border p-6">
              <h4 className="font-medium text-foreground mb-3 text-sm">Quick Connect</h4>
              <a
                href="https://wa.me/19497425202"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] rounded-lg px-4 py-3 font-medium text-sm hover:bg-[#25D366]/20 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData?.firstName ?? ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(213,72%,30%)/0.3] focus:border-[hsl(213,72%,30%)] transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData?.lastName ?? ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(213,72%,30%)/0.3] focus:border-[hsl(213,72%,30%)] transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData?.email ?? ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(213,72%,30%)/0.3] focus:border-[hsl(213,72%,30%)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData?.phone ?? ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(213,72%,30%)/0.3] focus:border-[hsl(213,72%,30%)] transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData?.message ?? ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(213,72%,30%)/0.3] focus:border-[hsl(213,72%,30%)] transition-all resize-none"
                  placeholder="Tell us about your project or how we can help..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[hsl(213,72%,30%)] to-[hsl(190,60%,45%)] text-white py-4 rounded-lg font-medium text-base hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

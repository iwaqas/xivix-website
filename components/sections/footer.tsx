'use client'

import { Mail, Phone, Globe, ArrowUp } from 'lucide-react'

const footerLinks = [
  {
    title: 'Services',
    links: [
      'Office Augmentation',
      'AI & Data Tech',
      'Hardware & Apps',
      'Deployment Services',
      'Remote Network Admin',
      'Cyber Security',
      'eCommerce Agents',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact Us'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms & Conditions', 'Merchant Policies', 'Legal Notice', 'Refund Policy'],
  },
]

export function FooterSection() {
  const scrollToTop = () => {
    window?.scrollTo?.({ top: 0, behavior: 'smooth' })
  }

  const handleFooterNavClick = (label: string) => {
    const sectionMap: Record<string, string> = {
      'About Us': '#about',
      'Contact Us': '#contact',
    }
    const target = sectionMap?.[label]
    if (target) {
      const el = document.querySelector(target)
      el?.scrollIntoView?.({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-[hsl(215,25%,12%)] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(213,72%,40%)] to-[hsl(190,60%,50%)] flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">X</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                XiViX<span className="text-[hsl(190,60%,55%)] ml-1 text-sm font-normal">LLC</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              A pioneering technology consulting firm dedicated to driving innovation
              and empowering businesses to thrive in the digital age.
            </p>
            <div className="space-y-3">
              <a href="tel:+19497425202" className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4" /><span>{"(949) 742-5202"}</span>
              </a>
              <a href="mailto:info@xivixllc.com" className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4" /><span>{"info@xivixllc.com"}</span>
              </a>
              <a href="https://www.xivixllc.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors">
                <Globe className="w-4 h-4" /><span>{"xivixllc.com"}</span>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks?.map?.((group: any) => (
            <div key={group?.title ?? ''}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                {group?.title ?? ''}
              </h4>
              <ul className="space-y-2.5">
                {group?.links?.map?.((link: string) => (
                  <li key={link}>
                    <button
                      onClick={() => handleFooterNavClick(link)}
                      className="text-white/60 text-sm hover:text-white transition-colors text-left"
                    >
                      {link}
                    </button>
                  </li>
                )) ?? []}
              </ul>
            </div>
          )) ?? []}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 XiViX, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">
              Payment Methods: Visa, Mastercard, American Express, Discover
            </span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

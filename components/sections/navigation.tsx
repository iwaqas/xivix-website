'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView?.({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(213,72%,30%)] to-[hsl(190,60%,45%)] flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">X</span>
            </div>
            <span className={`font-display font-bold text-xl tracking-tight transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              XiViX<span className="text-[hsl(190,60%,45%)] ml-1 text-sm font-normal">LLC</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map?.((link: any) => (
              <button
                key={link?.href ?? ''}
                onClick={() => handleNavClick(link?.href ?? '#')}
                className={`text-sm font-medium transition-colors hover:text-[hsl(190,60%,45%)] ${
                  isScrolled ? 'text-foreground' : 'text-white/90'
                }`}
              >
                {link?.label ?? ''}
              </button>
            )) ?? []}
            <a
              href="tel:+19497425202"
              className="flex items-center gap-2 bg-gradient-to-r from-[hsl(213,72%,30%)] to-[hsl(190,60%,45%)] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              (949) 742-5202
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks?.map?.((link: any) => (
                <button
                  key={link?.href ?? ''}
                  onClick={() => handleNavClick(link?.href ?? '#')}
                  className="text-lg font-medium text-foreground py-3 border-b border-border text-left hover:text-[hsl(190,60%,45%)] transition-colors"
                >
                  {link?.label ?? ''}
                </button>
              )) ?? []}
              <a
                href="tel:+19497425202"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(213,72%,30%)] to-[hsl(190,60%,45%)] text-white px-5 py-3 rounded-lg text-base font-medium mt-4"
              >
                <Phone className="w-5 h-5" />
                (949) 742-5202
              </a>
              <a
                href="mailto:info@xivixllc.com"
                className="flex items-center justify-center gap-2 border-2 border-[hsl(213,72%,30%)] text-[hsl(213,72%,30%)] px-5 py-3 rounded-lg text-base font-medium"
              >
                <Mail className="w-5 h-5" />
                info@xivixllc.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

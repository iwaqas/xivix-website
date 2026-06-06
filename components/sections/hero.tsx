'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X, Satellite, Building2, Brain, Cpu, Rocket, Network,
  Shield, Headphones, TrendingUp, GraduationCap, Feather,
} from 'lucide-react'

// ---- Types ----
interface ModalInfo {
  icon: React.ReactNode
  type: string
  typeColor: string
  borderColor: string
  shadowColor: string
  bgColor: string
  title: string
  desc: string
  isProduct?: boolean
  externalHref?: string
}

// ---- Modal content ----
const MODALS: Record<string, ModalInfo> = {
  mothership: {
    icon: <Satellite className="w-6 h-6 text-[#B9B2FF]" />,
    type: 'Mission Control · Command Vessel',
    typeColor: 'text-[#A9F0FF]',
    borderColor: 'border-[#6D5DF6]/40',
    shadowColor: 'shadow-[#6D5DF6]/30',
    bgColor: 'bg-[#0E0B22]/80',
    title: 'XiViX Mothership',
    desc: 'The command center that unifies all ten vessels. XiViX orchestrates your services and products from a single launchpad — one partner, one mission, the whole fleet at your command.',
  },
  svc1: {
    icon: <Building2 className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'Office Augmentation',
    desc: 'Scale your team with embedded specialists who plug straight into your workflow. Vetted talent that integrates seamlessly with your existing operations — ramping up capacity without the overhead of full-time hiring.',
  },
  svc2: {
    icon: <Brain className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'AI & Data Tech',
    desc: 'Models, pipelines, and analytics that turn raw data into a competitive edge. From data strategy to production-grade machine learning — smarter decisions, grounded in your own data.',
  },
  svc3: {
    icon: <Cpu className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'Hardware & Apps',
    desc: 'From device fleets to custom applications — built, integrated, and supported. We design and ship the hardware and software your operation runs on, then keep it humming.',
  },
  svc4: {
    icon: <Rocket className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'Deployment Services',
    desc: 'Roll out new systems on time, on budget, with zero-drama transitions. We plan, stage, and execute deployments so your teams keep moving while the new platform comes online.',
  },
  svc5: {
    icon: <Network className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'Remote Network Administration',
    desc: '24/7 monitoring and management of your network from our mission control. We watch your infrastructure around the clock, resolving issues before they reach your users.',
  },
  svc6: {
    icon: <Shield className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'Cyber & Information Security',
    desc: 'Threat defense, compliance, and resilience to keep your mission secure. From audits to active monitoring and incident response — hardening your defenses against evolving threats.',
  },
  svc7: {
    icon: <Headphones className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'eCommerce Virtual Agents',
    desc: 'Always-on virtual agents that sell, support, and convert around the clock. Intelligent assistants that answer questions, recover carts, and close sales — turning every visitor into a conversation.',
  },
  svc8: {
    icon: <TrendingUp className="w-6 h-6 text-[#7FE9FF]" />,
    type: 'Consulting Service', typeColor: 'text-[#22D3EE]',
    borderColor: 'border-[#22D3EE]/35', shadowColor: 'shadow-[#22D3EE]/20', bgColor: 'bg-[#0E0B22]/80',
    title: 'Wealth & Business Portfolio Management',
    desc: 'Strategic stewardship of your business and financial portfolio for the long haul. Allocate, diversify, and grow — aligning your assets and ventures with a clear, future-proof flight plan.',
  },
  myparrot: {
    icon: <Feather className="w-6 h-6 text-[#FBA8D4]" />,
    type: 'XiViX Product', typeColor: 'text-[#F472B6]',
    borderColor: 'border-[#F472B6]/40', shadowColor: 'shadow-[#F472B6]/25', bgColor: 'bg-[#1a0f24]/80',
    title: 'MyParrot',
    desc: 'A live conversational platform that gives your voice and presence a real-time digital companion. MyParrot brings always-on, natural conversation to your audience — wherever and whenever they engage.',
    isProduct: true, externalHref: 'https://myparrot.live',
  },
  acadpak: {
    icon: <GraduationCap className="w-6 h-6 text-[#FBA8D4]" />,
    type: 'XiViX Product', typeColor: 'text-[#F472B6]',
    borderColor: 'border-[#F472B6]/40', shadowColor: 'shadow-[#F472B6]/25', bgColor: 'bg-[#1a0f24]/80',
    title: 'AcadPak',
    desc: 'An academic productivity platform that packages learning resources into a single streamlined launchpad. AcadPak helps students and educators organize, access, and act on their materials — all in one place.',
    isProduct: true, externalHref: 'https://acadpak.com',
  },
}

// ---- Vessel layout data ----
// Stage: 1100 × 700 px, center = (550, 350)
const SHUTTLES = [
  { id: 'svc1', label: 'Office Augmentation',            x: 550, y: 120, floatClass: 'vessel-float'  },
  { id: 'svc2', label: 'AI & Data Tech',                 x: 805, y: 187, floatClass: 'vessel-float2' },
  { id: 'svc3', label: 'Hardware & Apps',                x: 910, y: 350, floatClass: 'vessel-float3' },
  { id: 'svc4', label: 'Deployment Services',            x: 805, y: 513, floatClass: 'vessel-float'  },
  { id: 'svc5', label: 'Remote Network Administration',  x: 550, y: 580, floatClass: 'vessel-float2' },
  { id: 'svc6', label: 'Cyber & Information Security',   x: 295, y: 513, floatClass: 'vessel-float3' },
  { id: 'svc7', label: 'eCommerce Virtual Agents',       x: 190, y: 350, floatClass: 'vessel-float'  },
  { id: 'svc8', label: 'Wealth & Business Portfolio',    x: 295, y: 187, floatClass: 'vessel-float2' },
]
const PODS = [
  { id: 'myparrot', label: 'MyParrot', icon: <Feather className="w-2.5 h-2.5 text-[#FBA8D4]" />, x: 218, y: 131, floatClass: 'vessel-float3' },
  { id: 'acadpak',  label: 'AcadPak',  icon: <GraduationCap className="w-2.5 h-2.5 text-[#FBA8D4]" />, x: 882, y: 569, floatClass: 'vessel-float'  },
]

// ---- Component ----
export function HeroSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [scale, setScale]             = useState(1)

  // Responsive scale — stage is 1100px wide
  useEffect(() => {
    const update = () => setScale(Math.min(1, (window.innerWidth * 0.98) / 1100))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveModal(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const modal = activeModal ? MODALS[activeModal] : null

  return (
    <section id="home" className="starfield relative w-full overflow-hidden">
      {/* Fast star layer */}
      <div className="starfield-fast absolute inset-0 opacity-70 pointer-events-none" />

      {/* Nebula wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(900px 600px at 50% 50%, rgba(109,93,246,0.20), transparent 70%), radial-gradient(700px 500px at 80% 80%, rgba(34,211,238,0.10), transparent 70%)',
        }}
      />

      {/* ---- Headline ---- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center pt-10 px-6"
      >
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6D5DF6]/40 bg-[#6D5DF6]/10 text-[#B9B2FF] text-xs font-semibold tracking-widest uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <Satellite className="w-3.5 h-3.5" /> Mission Control · XiViX LLC
        </span>
        <h1
          className="font-extrabold text-4xl md:text-5xl leading-tight mt-6 text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Smart Tech &amp;{' '}
          <span className="bg-gradient-to-r from-[#22D3EE] via-[#8B7BFF] to-[#F472B6] bg-clip-text text-transparent">
            Wealth Partnership
          </span>
        </h1>
        <p className="text-[#9CA3C7] max-w-2xl mx-auto mt-4 text-base">
          Eight consulting services and two products, orbiting one command center.
          Click any vessel to explore what it brings to your mission.
        </p>
      </motion.div>

      {/* ---- Orbital stage ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 mt-2 mx-auto overflow-visible"
        style={{
          width: `${1100 * scale}px`,
          height: `${700 * scale}px`,
        }}
      >
        {/* Inner transform wrapper that applies the CSS scale */}
        <div
          style={{
            width: 1100,
            height: 700,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {/* ---- Orbit rings ---- */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6D5DF6]/25 pointer-events-none"
            style={{ width: 740, height: 480 }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#22D3EE]/18 pointer-events-none"
            style={{ width: 960, height: 640 }}
          />

          {/* ---- Mothership (center) ---- */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
            style={{ width: 440 }}
            onClick={() => setActiveModal('mothership')}
          >
            {/* Violet glow blob */}
            <div
              className="mothership-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{ width: 420, height: 420, background: '#6D5DF6', filter: 'blur(80px)' }}
            />
            {/* Ship image */}
            <div className="vessel-float relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/mothership.png"
                alt="XiViX command mothership"
                className="w-full h-auto transition-all duration-300 group-hover:brightness-125 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 10px 40px rgba(109,93,246,0.55))' }}
              />
              <div className="absolute left-1/2 bottom-14 -translate-x-1/2 flex flex-col items-center text-center pointer-events-none">
                <span
                  className="font-extrabold text-2xl tracking-[0.3em] text-white"
                  style={{ fontFamily: "'Orbitron', sans-serif", textShadow: '0 2px 8px rgba(109,93,246,0.9)' }}
                >
                  XiViX
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#A9F0FF] uppercase">Command Vessel</span>
              </div>
            </div>
          </div>

          {/* ---- Service shuttles ---- */}
          {SHUTTLES.map((s) => (
            <div
              key={s.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-[12]"
              style={{ left: s.x, top: s.y }}
            >
              <div
                className={`${s.floatClass} relative cursor-pointer group`}
                style={{ width: 150 }}
                onClick={() => setActiveModal(s.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/shuttle.png"
                  alt={`${s.label} shuttle`}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-125 group-hover:scale-110"
                  style={{ filter: 'drop-shadow(0 6px 18px rgba(34,211,238,0.45))' }}
                />
                <div
                  className="absolute left-1/2 -bottom-3 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full border border-[#22D3EE]/50 text-[#A9F0FF] text-[11px] font-semibold"
                  style={{ backdropFilter: 'blur(4px)', background: 'rgba(14,11,34,0.85)' }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}

          {/* ---- Product pods ---- */}
          {PODS.map((p) => (
            <div
              key={p.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ left: p.x, top: p.y }}
            >
              <div
                className={`${p.floatClass} relative cursor-pointer group`}
                style={{ width: 96 }}
                onClick={() => setActiveModal(p.id)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/pod.png"
                  alt={`${p.label} product pod`}
                  className="w-full h-auto transition-all duration-300 group-hover:brightness-125 group-hover:scale-110"
                  style={{ filter: 'drop-shadow(0 6px 16px rgba(244,114,182,0.45))' }}
                />
                <span
                  className="absolute top-1 left-2 w-6 h-6 rounded-full flex items-center justify-center shadow"
                  style={{ background: 'rgba(14,11,34,0.90)', border: '1px solid rgba(244,114,182,0.70)', boxShadow: '0 0 8px rgba(244,114,182,0.4)' }}
                >
                  {p.icon}
                </span>
                <div
                  className="absolute left-1/2 -bottom-3 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full border border-[#F472B6]/50 text-[#FBA8D4] text-[11px] font-semibold"
                  style={{ backdropFilter: 'blur(4px)', background: 'rgba(14,11,34,0.85)' }}
                >
                  {p.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ---- Legend + CTA ---- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-20 flex flex-col items-center gap-6 pb-12 px-6"
      >
        {/* Legend */}
        <div className="flex items-center justify-center gap-8 text-xs text-[#9CA3C7]">
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[#22D3EE] inline-block" />
            8 Consulting Services
          </span>
          <span className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#F472B6] inline-block" />
            2 Products
          </span>
          <span className="flex items-center gap-2 hidden sm:flex">
            <span className="text-[#8B7BFF]">✦</span>
            Click any vessel to explore
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#6D5DF6]/40"
            style={{ background: 'linear-gradient(to right, #6D5DF6, #8B7BFF)' }}
          >
            Explore Our Solutions
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full font-semibold text-sm text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </motion.div>

      {/* ---- Frosted-glass modals ---- */}
      <AnimatePresence>
        {modal && activeModal && (
          <motion.div
            key={activeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setActiveModal(null)}
          >
            {/* backdrop */}
            <div className="absolute inset-0" style={{ background: 'rgba(5,3,15,0.55)', backdropFilter: 'blur(10px)' }} />

            {/* card */}
            <motion.div
              initial={{ scale: 0.95, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 24 }}
              transition={{ duration: 0.3, ease: [0.18, 0.85, 0.25, 1] }}
              className={`relative w-full max-w-lg rounded-2xl border ${modal.borderColor} ${modal.bgColor} p-8 shadow-2xl ${modal.shadowColor}`}
              style={{ backdropFilter: 'blur(24px)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* close */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[#C7C0FF] hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <X className="w-4 h-4" />
              </button>

              {/* icon chip */}
              <span
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${modal.borderColor} border`}
                style={{ background: 'rgba(255,255,255,0.06)' }}
              >
                {modal.icon}
              </span>

              <p className={`text-[10px] tracking-[0.3em] uppercase mt-5 ${modal.typeColor}`}>
                {modal.type}
              </p>
              <h3
                className="font-bold text-2xl text-white mt-1"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {modal.title}
              </h3>
              <p className="text-sm text-[#9CA3C7] mt-4 leading-relaxed">{modal.desc}</p>

              {modal.isProduct ? (
                <a
                  href={modal.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: 'linear-gradient(to right, #F472B6, #8B7BFF)', boxShadow: '0 4px 20px rgba(244,114,182,0.4)' }}
                >
                  Visit {modal.externalHref?.replace('https://', '')}
                </a>
              ) : (
                <button
                  onClick={() => { setActiveModal(null); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: 'linear-gradient(to right, #6D5DF6, #8B7BFF)', boxShadow: '0 4px 20px rgba(109,93,246,0.4)' }}
                >
                  Book a Call
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

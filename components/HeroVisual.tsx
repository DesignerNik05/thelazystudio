"use client";

import { motion } from "framer-motion";

const cards = [
  {
    label: "UI/UX Design",
    sub: "Figma · Prototyping · Research",
    icon: "✦",
    top: "4%",
    left: "8%",
    duration: 4.2,
    delay: 0,
  },
  {
    label: "Web Development",
    sub: "Next.js · React · WordPress",
    icon: "◈",
    top: "2%",
    left: "52%",
    duration: 3.8,
    delay: 0.6,
  },
  {
    label: "Branding & Identity",
    sub: "Logo · Visual System · Typography",
    icon: "◎",
    top: "42%",
    left: "0%",
    duration: 4.8,
    delay: 1.1,
  },
  {
    label: "Digital Marketing",
    sub: "SEO · Social · Campaigns",
    icon: "◉",
    top: "46%",
    left: "50%",
    duration: 4.0,
    delay: 0.4,
  },
  {
    label: "AI-Powered Workflow",
    sub: "Claude AI · Cursor · Figma Make",
    icon: "◇",
    top: "82%",
    left: "20%",
    duration: 3.6,
    delay: 0.9,
  },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[480px] select-none pointer-events-none">

      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#FF6B35]/8 blur-[80px]" />

      {/* Outer ring — pulsing */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-[#FF6B35]/20"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border border-[#FF6B35]/10"
      />

      {/* Centre dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-full bg-[#FF6B35]/15 border border-[#FF6B35]/30 flex items-center justify-center"
        >
          <div className="w-5 h-5 rounded-full bg-[#FF6B35]" />
        </motion.div>
      </div>

      {/* Floating service cards */}
      {cards.map((card) => (
        <motion.div
          key={card.label}
          style={{ top: card.top, left: card.left, position: "absolute" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: card.delay },
            y: {
              duration: card.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            },
          }}
        >
          <div className="bg-[#111111]/90 backdrop-blur-sm border border-white/6 rounded-2xl px-4 py-3.5 min-w-[175px] max-w-[210px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            {/* Top row */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#FF6B35] text-xs">{card.icon}</span>
              <span className="text-white text-sm font-semibold leading-tight">{card.label}</span>
            </div>
            <div className="text-[#555] text-[11px] leading-snug pl-4">{card.sub}</div>
            {/* Bottom bar */}
            <div className="mt-3 h-px bg-gradient-to-r from-[#FF6B35]/40 to-transparent" />
          </div>
        </motion.div>
      ))}

      {/* Connecting dots floating */}
      {[
        { top: "28%", left: "35%", size: 3, delay: 0.2 },
        { top: "68%", left: "70%", size: 2, delay: 1.0 },
        { top: "20%", left: "78%", size: 4, delay: 0.5 },
        { top: "75%", left: "10%", size: 2, delay: 1.4 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
          className="rounded-full bg-[#FF6B35]"
          style={{
            top: dot.top,
            left: dot.left,
            position: "absolute",
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
    </div>
  );
}

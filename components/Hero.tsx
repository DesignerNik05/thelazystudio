"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import HeroVisual from "./HeroVisual";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: "circOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-8 pt-20 overflow-hidden">

      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #FF6B35 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">

        {/* ── LEFT: Text content ── */}
        <div>
          {/* Status + location */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <span className="flex items-center gap-2 bg-[#1f0900] border border-[#FF6B35]/25 text-[#FF6B35] text-xs font-medium px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
              Available for new projects
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#555]">
              <MapPin size={12} className="text-[#444]" />
              Chandigarh, India · Working Worldwide
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-[#f0f0f0]"
          >
            We make it
          </motion.h1>
          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-tight text-[#FF6B35]"
          >
            look easy.
          </motion.h1>

          {/* Byline */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 text-[#666] text-base lg:text-lg max-w-md leading-relaxed"
          >
            A freelance design & development studio from Chandigarh —
            building digital products for{" "}
            <span className="text-[#f0f0f0] font-medium">Indian brands and global clients.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-white text-[#080808] font-bold px-7 py-3.5 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 text-sm"
            >
              See Our Work
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-medium px-7 py-3.5 rounded-full hover:border-white/40 hover:text-white transition-all text-sm"
            >
              Start a Project
            </a>
          </motion.div>

          {/* Identity strip */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-14 pt-8 border-t border-[#161616] flex flex-wrap items-center justify-between gap-6"
          >
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { label: "Based in", value: "Chandigarh, India" },
                { label: "Serving", value: "India & Worldwide" },
                { label: "Languages", value: "English, Hindi, Punjabi" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] text-[#444] tracking-widest uppercase mb-0.5">{item.label}</div>
                  <div className="text-xs text-[#888]">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-[#444]">
              <span>₹</span><span className="text-[#1e1e1e]">·</span>
              <span>$</span><span className="text-[#1e1e1e]">·</span>
              <span>€</span>
              <span className="ml-1 text-[#333]">All currencies welcome</span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Hero visual ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden lg:block relative h-[520px]"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

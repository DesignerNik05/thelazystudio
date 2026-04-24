"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

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

      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #c8ff00 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#c8ff00]/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">

        {/* Status + location */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <span className="flex items-center gap-2 bg-[#0f1f00] border border-[#c8ff00]/20 text-[#c8ff00] text-xs font-medium px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse" />
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
          className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-tight text-[#f0f0f0]"
        >
          We make it
        </motion.h1>
        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.95] tracking-tight text-[#c8ff00]"
        >
          look easy.
        </motion.h1>

        {/* Byline */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-[#666] text-base lg:text-lg max-w-lg leading-relaxed"
        >
          Design & development by{" "}
          <span className="text-[#f0f0f0] font-medium">Nikita & Akash Kalsi</span>
          {" "}— a freelance duo from Chandigarh building digital products for
          Indian brands and global clients.
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
            className="group inline-flex items-center gap-2 bg-[#c8ff00] text-[#080808] font-bold px-7 py-3.5 rounded-full hover:bg-white transition-colors text-sm"
          >
            See Our Work
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#999] font-medium px-7 py-3.5 rounded-full hover:border-[#c8ff00]/50 hover:text-[#f0f0f0] transition-all text-sm"
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
          className="mt-20 pt-8 border-t border-[#161616] flex flex-wrap items-center justify-between gap-6"
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
    </section>
  );
}

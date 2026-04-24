"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "circOut" },
  }),
};

const tags = [
  "UI/UX Design",
  "Web Development",
  "Branding",
  "Digital Marketing",
  "AI-Powered Workflow",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 lg:px-8 pt-20">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c8ff00]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 mb-8"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">
            Creative Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.8rem,8vw,7rem)] font-bold leading-[1.02] tracking-tight text-[#f0f0f0] max-w-4xl"
        >
          We Design.
          <br />
          We Build.
          <br />
          <span className="text-[#c8ff00]">We Deliver.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 max-w-xl text-lg text-[#777] leading-relaxed"
        >
          A two-person creative studio blending UI/UX design and front-end
          development to craft digital experiences that feel effortless — and
          look stunning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-[#c8ff00] text-[#080808] font-semibold px-7 py-3.5 rounded-full hover:bg-[#d4ff33] transition-colors text-sm"
          >
            View Our Work
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#333] text-[#f0f0f0] font-medium px-7 py-3.5 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-colors text-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Tags */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-wide text-[#555] border border-[#222] px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#444] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#c8ff00] to-transparent"
        />
      </motion.div>
    </section>
  );
}

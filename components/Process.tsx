"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Understand",
    label: "We listen more than we talk.",
    desc: "A proper brief, a real conversation, and a few honest questions. We want to understand your goals, your users, and what success actually looks like — before touching a single tool.",
  },
  {
    num: "02",
    title: "Design",
    label: "Pixels with purpose.",
    desc: "We take the brief and turn it into something visual — wireframes first, high-fidelity next. You'll see and feel the product before a line of code is written. Changes are easy here.",
  },
  {
    num: "03",
    title: "Build",
    label: "Code that doesn't break.",
    desc: "Nikita builds what Akash designed — clean, fast, and responsive. We use modern frameworks and AI tools to move quickly without skipping the details that matter.",
  },
  {
    num: "04",
    title: "Launch & Stick Around",
    label: "We don't vanish after delivery.",
    desc: "Go-live is just the beginning. We help you launch smoothly, handle the post-launch tweaks, and stay available. Because relationships beat transactions every time.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">The Lazy Method</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#f0f0f0]">
              How we{" "}
              <span className="text-[#c8ff00]">actually work.</span>
            </h2>
            <p className="mt-6 text-[#666] leading-relaxed text-lg max-w-md">
              No 47-step onboarding process. No jargon-filled proposals. Just a straightforward way of working that gets great things built.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 border border-[#1e1e1e] rounded-full px-5 py-2.5 text-xs text-[#555]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse" />
              Currently available · Response within 24 hrs
            </div>
          </motion.div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.55, ease: "circOut" }}
                className="group relative pl-14 pb-10 last:pb-0"
              >
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[18px] top-8 bottom-0 w-px bg-[#1a1a1a]" />
                )}
                {/* Step dot */}
                <div className="absolute left-0 top-0.5 w-9 h-9 rounded-full bg-[#0e0e0e] border border-[#222] flex items-center justify-center group-hover:border-[#c8ff00]/40 group-hover:bg-[#0f1f00] transition-all">
                  <span className="text-[10px] font-mono text-[#555] group-hover:text-[#c8ff00] transition-colors">{step.num}</span>
                </div>

                <div>
                  <div className="text-[#f0f0f0] font-semibold mb-0.5 group-hover:text-[#c8ff00] transition-colors">{step.title}</div>
                  <div className="text-xs text-[#c8ff00]/60 mb-3 italic">{step.label}</div>
                  <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    desc: "We start with a deep-dive into your goals, audience, and competitors. No assumptions — we ask the right questions to understand what you truly need.",
  },
  {
    number: "02",
    title: "Design",
    desc: "From wireframes to high-fidelity prototypes, we craft visual experiences that balance beauty with usability. You'll see and feel the product before a single line of code.",
  },
  {
    number: "03",
    title: "Develop",
    desc: "Clean, performant, and maintainable code — built with modern tech and AI-assisted tools. We build fast without sacrificing quality.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "Launch day is just the beginning. We ensure a smooth handoff, support you through go-live, and remain available for iterations and growth.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">
            Our Process
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#f0f0f0]">
              How we{" "}
              <span className="text-[#c8ff00]">work</span>
            </h2>
            <p className="mt-6 text-[#777] leading-relaxed text-lg max-w-md">
              A focused, transparent process that keeps you in the loop at every
              stage — no surprises, just results.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[#1f1f1f] hidden sm:block" />

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: "circOut" }}
                  className="flex gap-6 sm:gap-8 items-start group"
                >
                  <div className="relative flex-shrink-0 w-11 h-11 rounded-full bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#c8ff00] group-hover:bg-[#c8ff00]/10 transition-all duration-300 z-10">
                    <span className="text-xs font-mono text-[#c8ff00]">{step.number}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2 group-hover:text-[#c8ff00] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[#777] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

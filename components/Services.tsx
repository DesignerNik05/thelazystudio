"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "UI/UX Design",
    desc: "Interfaces that feel obvious in hindsight. From research and wireframes to polished, click-ready prototypes.",
    tags: ["User Research", "Wireframing", "Prototyping", "Figma"],
    wide: false,
  },
  {
    num: "02",
    title: "Web Development",
    desc: "Websites that load fast, look sharp, and don't break when someone opens them on a 2019 Android phone.",
    tags: ["Next.js", "React", "Tailwind CSS", "WordPress"],
    wide: false,
  },
  {
    num: "03",
    title: "Branding & Identity",
    desc: "A logo is just the beginning. We build complete visual systems — colors, typography, tone — that make your brand impossible to ignore.",
    tags: ["Logo Design", "Brand System", "Style Guide"],
    wide: true,
  },
  {
    num: "04",
    title: "Digital Marketing",
    desc: "Strategy and creative that gets your brand in front of the right people — whether they're in Chandigarh or California.",
    tags: ["Social Media", "Content Strategy", "SEO", "Campaign Design"],
    wide: false,
  },
  {
    num: "05",
    title: "AI-Powered Workflow",
    desc: "We use Claude AI, Cursor, Figma Make, and other tools to ship 2× faster without cutting corners on quality.",
    tags: ["Claude AI", "Cursor", "Figma Make", "Automation"],
    wide: false,
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">What We Do</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="text-4xl lg:text-5xl font-bold text-[#f0f0f0] max-w-lg leading-tight"
          >
            The full stack,{" "}
            <span className="text-[#c8ff00]">without the agency.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#555] text-sm lg:text-right lg:max-w-xs"
          >
            From your first sketch to your live URL — we handle it all, in both ₹ and $.
          </motion.p>
        </div>

        {/* Service list — editorial numbered style */}
        <div className="flex flex-col divide-y divide-[#161616]">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group grid grid-cols-[60px_1fr] lg:grid-cols-[80px_1fr_auto] items-start gap-4 lg:gap-8 py-8 cursor-default hover:bg-[#0e0e0e] px-4 -mx-4 rounded-xl transition-colors"
            >
              <div className="text-[#333] text-xs font-mono pt-1">{s.num}</div>

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#f0f0f0] group-hover:text-[#c8ff00] transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-[#666] text-sm leading-relaxed max-w-xl mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs text-[#444] border border-[#1e1e1e] px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex items-start pt-1">
                <ArrowRight
                  size={16}
                  className="text-[#2a2a2a] group-hover:text-[#c8ff00] group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-14 bg-[#c8ff00] rounded-2xl p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
        >
          <div>
            <div className="text-[#080808] text-xl font-bold">Need something specific?</div>
            <div className="text-[#3a4a00] text-sm mt-1">We're happy to scope a custom package — for Indian and international projects.</div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#080808] text-[#c8ff00] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#111] transition-colors whitespace-nowrap"
          >
            Let's Talk <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

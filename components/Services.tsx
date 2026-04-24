"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Code2, Megaphone, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User research, wireframes, interactive prototypes, and polished interfaces — designed for real people with real goals.",
    tags: ["User Research", "Wireframing", "Prototyping", "Figma"],
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive, and accessible websites built with modern frameworks. From landing pages to full web applications.",
    tags: ["Next.js", "React", "Tailwind CSS", "WordPress"],
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Logos, color systems, typography, and brand guidelines that tell your story and make you unforgettable.",
    tags: ["Logo Design", "Brand System", "Style Guide", "Visual Identity"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Strategy, content, and social media that drives real engagement and connects your brand with the right audience.",
    tags: ["Social Media", "Content Strategy", "SEO", "Campaign Design"],
  },
  {
    icon: Cpu,
    title: "AI-Powered Solutions",
    desc: "We integrate the latest AI tools to accelerate design and development workflows — delivering more, faster, smarter.",
    tags: ["Claude AI", "Cursor", "Figma Make", "Automation"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">
            Services
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-end mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold leading-tight text-[#f0f0f0]"
          >
            What we{" "}
            <span className="text-[#c8ff00]">do best</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#777] leading-relaxed lg:text-right lg:max-w-sm lg:ml-auto"
          >
            From pixels to production — we cover the full creative and technical
            spectrum so you don't have to juggle multiple agencies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: "circOut" }}
                className={`group bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#c8ff00]/30 transition-all duration-300 cursor-default ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8ff00]/20 transition-colors">
                  <Icon size={20} className="text-[#c8ff00]" />
                </div>
                <h3 className="text-lg font-semibold text-[#f0f0f0] mb-3">{service.title}</h3>
                <p className="text-[#777] text-sm leading-relaxed mb-6">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#555] border border-[#222] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* CTA card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="group bg-[#c8ff00] rounded-2xl p-7 flex flex-col justify-between min-h-[200px] hover:bg-[#d4ff33] transition-colors"
          >
            <div className="text-[#080808] text-xl font-bold leading-snug">
              Ready to start your project?
            </div>
            <div className="flex items-center gap-2 text-[#080808] font-semibold text-sm mt-6">
              Let's Talk
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

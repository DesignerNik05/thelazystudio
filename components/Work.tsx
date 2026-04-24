"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const categories = ["All", "UI/UX", "Development", "Branding"];

const projects = [
  {
    title: "FinTech Dashboard",
    category: "UI/UX",
    tags: ["UI/UX Design", "Figma", "Dashboard"],
    year: "2024",
    color: "#1a1a2e",
    accent: "#7c3aed",
  },
  {
    title: "E-Commerce Platform",
    category: "Development",
    tags: ["Next.js", "Tailwind", "Stripe"],
    year: "2024",
    color: "#0d1f0d",
    accent: "#22c55e",
  },
  {
    title: "Brand Identity — Bloom Co.",
    category: "Branding",
    tags: ["Logo", "Brand System", "Typography"],
    year: "2023",
    color: "#1f0d0d",
    accent: "#f97316",
  },
  {
    title: "SaaS Marketing Site",
    category: "Development",
    tags: ["React", "Animations", "SEO"],
    year: "2024",
    color: "#0d1a1f",
    accent: "#06b6d4",
  },
  {
    title: "Mobile App UX — Wello",
    category: "UI/UX",
    tags: ["Mobile", "User Research", "Prototype"],
    year: "2023",
    color: "#1a0d1f",
    accent: "#e879f9",
  },
  {
    title: "Restaurant Brand & Web",
    category: "Branding",
    tags: ["Branding", "WordPress", "Photography"],
    year: "2023",
    color: "#1f1a0d",
    accent: "#eab308",
  },
];

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">
            Our Work
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-[#f0f0f0]"
          >
            Selected{" "}
            <span className="text-[#c8ff00]">projects</span>
          </motion.h2>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-2 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-2 rounded-full border transition-colors ${
                  active === cat
                    ? "bg-[#c8ff00] text-[#080808] border-[#c8ff00] font-semibold"
                    : "border-[#222] text-[#777] hover:border-[#444] hover:text-[#f0f0f0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative bg-[#111] border border-[#222] rounded-2xl overflow-hidden hover:border-[#333] transition-all duration-300"
            >
              {/* Placeholder image area */}
              <div
                className="h-52 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <div
                  className="w-24 h-24 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: project.accent }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundColor: project.accent }}
                />
                <span
                  className="relative z-10 text-sm font-semibold tracking-widest uppercase opacity-40"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs text-[#555] mb-1">{project.year}</div>
                    <h3 className="font-semibold text-[#f0f0f0] group-hover:text-[#c8ff00] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[#333] group-hover:text-[#c8ff00] transition-colors mt-1 flex-shrink-0"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#555] border border-[#1f1f1f] px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#555] text-sm mb-4">More projects coming soon.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#333] text-[#f0f0f0] text-sm font-medium px-6 py-3 rounded-full hover:border-[#c8ff00] hover:text-[#c8ff00] transition-colors"
          >
            Start a project with us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

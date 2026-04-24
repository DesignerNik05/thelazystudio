"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Combined Experience" },
  { value: "40+", label: "Projects Delivered" },
  { value: "2", label: "Core Team Members" },
  { value: "100%", label: "Client Satisfaction" },
];

const team = [
  {
    role: "UI/UX Designer",
    name: "The Designer",
    desc: "Crafting intuitive user flows, sleek interfaces, and cohesive visual identities that leave a lasting impression.",
    skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Visual Design"],
  },
  {
    role: "Front-End Developer",
    name: "The Developer",
    desc: "Translating designs into pixel-perfect, responsive, and performant web experiences using modern technologies.",
    skills: ["React / Next.js", "Tailwind CSS", "WordPress", "Animation", "AI Tools"],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "circOut" } },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">
            About Us
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#f0f0f0]">
              Small studio.{" "}
              <span className="text-[#c8ff00]">Big thinking.</span>
            </h2>
            <p className="mt-6 text-[#777] leading-relaxed text-lg">
              We are The Lazy Studio — a design-and-development duo who believe
              that great digital products shouldn't feel like hard work. Behind
              every pixel is intentional thinking; behind every line of code is
              a refined experience.
            </p>
            <p className="mt-4 text-[#777] leading-relaxed">
              Our workflow is turbocharged by the latest AI tools — Claude AI,
              Cursor, Figma Make — letting us deliver at speed without cutting
              corners on quality. From concept to launch, we work closely with
              clients to turn ideas into reality.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-t border-[#222] pt-5">
                  <div className="text-3xl font-bold text-[#c8ff00]">{s.value}</div>
                  <div className="text-sm text-[#777] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Team cards */}
          <div className="flex flex-col gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: "circOut" }}
                className="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#c8ff00]/30 transition-colors"
              >
                <div className="text-xs text-[#c8ff00] tracking-widest uppercase mb-1">
                  {member.role}
                </div>
                <div className="text-lg font-semibold text-[#f0f0f0] mb-3">{member.name}</div>
                <p className="text-[#777] text-sm leading-relaxed mb-5">{member.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-[#555] border border-[#222] px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

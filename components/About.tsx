"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "circOut" } },
};

const perks = [
  { emoji: "🤝", title: "You talk to us directly", desc: "No account managers, no middle layers. You get the actual designer and developer on every call." },
  { emoji: "⚡", title: "We move faster", desc: "A two-person team makes decisions in minutes, not meetings. Faster iterations, quicker launches." },
  { emoji: "🎯", title: "Your project isn't outsourced", desc: "Every pixel is designed by our designer. Every line of code is written by our developer. Full stop." },
  { emoji: "💸", title: "No agency markup", desc: "Straightforward pricing. You pay for the work — not a fancy Gurugram office and 40 employees." },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">About Us</span>
        </motion.div>

        {/* Intro block */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#f0f0f0]">
              Hi, we're{" "}
              <span className="text-[#c8ff00]">The Lazy Studio.</span>
            </h2>
            <p className="mt-6 text-[#666] leading-relaxed text-lg">
              A freelance design and development studio based in{" "}
              <span className="text-[#f0f0f0]">Chandigarh, Punjab</span> — yes, the city with the best roads in India and an unmatched eye for aesthetics.
            </p>
            <p className="mt-4 text-[#666] leading-relaxed">
              Our designer obsesses over user flows, visual hierarchy, and the tiny details that make an interface feel inevitable rather than designed.
              Our developer turns those designs into fast, responsive, real websites that work on every screen.
            </p>
            <p className="mt-4 text-[#666] leading-relaxed">
              We work with startups, founders, and businesses across India — and with international clients who value a focused team over a bloated agency. We've found that being small is our biggest advantage.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                { value: "9+", label: "Years Experience" },
                { value: "40+", label: "Projects Shipped" },
                { value: "🇮🇳 + 🌍", label: "India & Worldwide" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.label} className="border-t border-[#1e1e1e] pt-4">
                  <div className="text-2xl font-bold text-[#c8ff00]">{s.value}</div>
                  <div className="text-xs text-[#666] mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — personal cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                name: "UI/UX Designer",
                role: "Design Lead",
                from: "Chandigarh, India",
                desc: "Obsesses over user flows, visual hierarchy, and the tiny details that make an interface feel inevitable rather than designed.",
                skills: ["User Research", "Wireframing", "Prototyping", "Figma", "Visual Identity"],
              },
              {
                name: "Front-End Developer",
                role: "Development Lead",
                from: "Chandigarh, India",
                desc: "Turns designs into pixel-perfect, performant websites — with clean code, smooth animations, and zero tolerance for layout bugs.",
                skills: ["Next.js", "React", "Tailwind CSS", "WordPress", "AI Tools"],
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: "circOut" }}
                className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-7 hover:border-[#c8ff00]/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-[#f0f0f0] font-semibold text-lg">{person.name}</div>
                    <div className="text-[#c8ff00] text-xs tracking-widest uppercase mt-0.5">{person.role}</div>
                  </div>
                  <span className="text-[#333] text-xs border border-[#1e1e1e] px-2.5 py-1 rounded-full">
                    📍 {person.from}
                  </span>
                </div>
                <p className="text-[#666] text-sm leading-relaxed mb-5">{person.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {person.skills.map((s) => (
                    <span key={s} className="text-xs text-[#555] border border-[#1e1e1e] px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why freelance section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-px bg-[#c8ff00]" />
            <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">Why Not an Agency?</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#f0f0f0] mb-10 max-w-xl">
            Being small is our{" "}
            <span className="text-[#c8ff00]">biggest advantage.</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#c8ff00]/20 transition-colors"
              >
                <div className="text-2xl mb-3">{perk.emoji}</div>
                <div className="text-sm font-semibold text-[#f0f0f0] mb-2">{perk.title}</div>
                <p className="text-xs text-[#666] leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

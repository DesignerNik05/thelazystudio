"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#c8ff00]" />
          <span className="text-[#c8ff00] text-sm tracking-widest uppercase font-medium">
            Contact
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#f0f0f0]">
              Let's build something{" "}
              <span className="text-[#c8ff00]">great together.</span>
            </h2>
            <p className="mt-6 text-[#777] leading-relaxed text-lg max-w-md">
              Whether you have a clear brief or just a rough idea — we'd love to
              hear from you. No project is too small or too big to discuss.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:hello@thelazystudio.com"
                className="flex items-center gap-3 text-[#f0f0f0] hover:text-[#c8ff00] transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center group-hover:border-[#c8ff00]/30 transition-colors">
                  <Mail size={16} className="text-[#c8ff00]" />
                </div>
                <span className="text-sm">hello@thelazystudio.com</span>
              </a>
            </div>

            <div className="mt-12">
              <p className="text-xs text-[#555] tracking-widest uppercase mb-4">We work with</p>
              <div className="flex flex-wrap gap-3">
                {["Startups", "Founders", "Agencies", "Brands", "Small Businesses"].map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-[#222] text-[#555] px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#111] border border-[#222] rounded-2xl p-8"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#c8ff00]/10 border border-[#c8ff00]/30 flex items-center justify-center mb-6">
                  <span className="text-[#c8ff00] text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">Message sent!</h3>
                <p className="text-[#777] text-sm">
                  We'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs text-[#777] mb-2 tracking-wide">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#444] focus:outline-none focus:border-[#c8ff00]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#777] mb-2 tracking-wide">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#444] focus:outline-none focus:border-[#c8ff00]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#777] mb-2 tracking-wide">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="We're looking to redesign our website and need..."
                    rows={5}
                    className="w-full bg-[#161616] border border-[#222] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#444] focus:outline-none focus:border-[#c8ff00]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#c8ff00] text-[#080808] font-semibold px-6 py-3.5 rounded-full hover:bg-[#d4ff33] transition-colors text-sm mt-1"
                >
                  Send Message
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

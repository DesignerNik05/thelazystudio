"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const budgets = ["Under ₹50K", "₹50K–₹1.5L", "₹1.5L–₹5L", "₹5L+", "Let's discuss", "$500–$2K", "$2K–$10K", "$10K+"];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="py-28 lg:py-36 px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-[#FF6B35]" />
          <span className="text-[#FF6B35] text-sm tracking-widest uppercase font-medium">Get in Touch</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#f0f0f0]">
              Got a project?{" "}
              <span className="text-[#FF6B35]">Let's build it.</span>
            </h2>
            <p className="mt-6 text-[#666] leading-relaxed text-lg max-w-sm">
              Whether you're a startup in Chandigarh or a brand in California — if you have an idea, we want to hear it.
            </p>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:hello@thelazystudio.com"
                className="flex items-center gap-3 group text-[#666] hover:text-[#f0f0f0] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#0e0e0e] border border-[#1e1e1e] flex items-center justify-center group-hover:border-[#FF6B35]/30 transition-colors">
                  <Mail size={14} className="text-[#FF6B35]" />
                </div>
                <span className="text-sm">hello@thelazystudio.com</span>
              </a>
            </div>

            {/* Location + availability */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: "Location", value: "Chandigarh, India" },
                { label: "Timezone", value: "IST (UTC +5:30)" },
                { label: "Response time", value: "Within 24 hours" },
                { label: "Availability", value: "Open to projects" },
              ].map((item) => (
                <div key={item.label} className="border border-[#1a1a1a] rounded-xl p-4">
                  <div className="text-[10px] text-[#444] tracking-widest uppercase mb-1">{item.label}</div>
                  <div className="text-sm text-[#888]">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Client types */}
            <div className="mt-8">
              <p className="text-[10px] text-[#444] tracking-widest uppercase mb-3">We work with</p>
              <div className="flex flex-wrap gap-2">
                {["Indian Startups", "D2C Brands", "SaaS Products", "Founders", "SMEs", "International Clients", "Agencies"].map((t) => (
                  <span key={t} className="text-xs border border-[#1e1e1e] text-[#555] px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-2xl p-8"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-14">
                <div className="w-16 h-16 rounded-full bg-[#1f0900] border border-[#FF6B35]/30 flex items-center justify-center mb-6">
                  <span className="text-[#FF6B35] text-xl">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">Got it — thanks!</h3>
                <p className="text-[#666] text-sm max-w-xs">
                  The Lazy Studio team will get back to you within 24 hours. Check your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#555] mb-2 tracking-wide">Your name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full bg-[#111] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#FF6B35]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#555] mb-2 tracking-wide">Email address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      className="w-full bg-[#111] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#FF6B35]/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#555] mb-2 tracking-wide">Approximate budget</label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full bg-[#111] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#888] focus:outline-none focus:border-[#FF6B35]/40 transition-colors"
                  >
                    <option value="" disabled>Select a range...</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#555] mb-2 tracking-wide">Tell us about your project</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="We need a website for our new D2C brand. We're based in Delhi and launching in 2 months..."
                    rows={5}
                    className="w-full bg-[#111] border border-[#1e1e1e] rounded-xl px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#333] focus:outline-none focus:border-[#FF6B35]/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-white text-[#080808] font-bold px-6 py-3.5 rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 text-sm mt-1"
                >
                  Send Message <ArrowRight size={14} />
                </button>

                <p className="text-center text-[10px] text-[#444]">
                  We respond within 24 hours · IST (UTC +5:30)
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

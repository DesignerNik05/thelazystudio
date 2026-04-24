const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#111] bg-[#080808] px-6 lg:px-8 py-14">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-3">
              <span className="text-[#c8ff00] font-bold text-xl">TLS</span>
              <span className="text-[#f0f0f0] font-medium text-sm opacity-40 tracking-widest uppercase hidden sm:block">The Lazy Studio</span>
            </a>
            <p className="text-xs text-[#444] leading-relaxed max-w-[220px]">
              A freelance design & development studio based in Chandigarh, India. Working with clients nationally and globally.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[10px] text-[#333] tracking-widest uppercase mb-4">Navigation</div>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-xs text-[#555] hover:text-[#f0f0f0] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] text-[#333] tracking-widest uppercase mb-4">Contact</div>
            <div className="flex flex-col gap-2">
              <a href="mailto:hello@thelazystudio.com" className="text-xs text-[#555] hover:text-[#c8ff00] transition-colors">
                hello@thelazystudio.com
              </a>
              <div className="text-xs text-[#444]">📍 Chandigarh, India</div>
              <div className="text-xs text-[#444]">🕐 IST (UTC +5:30)</div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse" />
                <span className="text-xs text-[#555]">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#0f0f0f] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px] text-[#2e2e2e]">
            © {year} The Lazy Studio · Chandigarh, India
          </p>
          <p className="text-[11px] text-[#2e2e2e]">
            Built with Next.js · Serving India 🇮🇳 & Worldwide 🌍
          </p>
        </div>
      </div>
    </footer>
  );
}

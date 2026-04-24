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
    <footer className="border-t border-[#111] bg-[#080808] px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="text-[#c8ff00] font-bold text-xl tracking-tight">TLS</span>
              <span className="text-[#f0f0f0] font-medium text-sm tracking-widest uppercase opacity-50 hidden sm:block">
                The Lazy Studio
              </span>
            </a>
            <p className="mt-2 text-xs text-[#444] max-w-xs">
              Design & Development studio crafting effortless digital experiences.
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-[#555] hover:text-[#f0f0f0] transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[#111] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-[#333]">
            © {year} The Lazy Studio. All rights reserved.
          </p>
          <p className="text-xs text-[#333]">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

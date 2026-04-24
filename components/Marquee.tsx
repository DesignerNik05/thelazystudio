"use client";

const items = [
  "UI/UX Design",
  "Web Development",
  "Branding & Identity",
  "Digital Marketing",
  "AI-Powered Workflow",
  "Chandigarh, India",
  "National Projects",
  "International Projects",
  "The Lazy Studio",
  "Pixels with Purpose",
  "Code that Delivers",
];

const separator = "✦";

const track = items.map((item) => `${item} ${separator}`).join("  ");
const doubled = `${track}  ${track}`;

export default function Marquee({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      className={`overflow-hidden py-4 border-y ${
        inverted
          ? "bg-[#c8ff00] border-[#b8ef00] text-[#080808]"
          : "bg-[#0d0d0d] border-[#1a1a1a] text-[#555]"
      }`}
    >
      <div
        className="whitespace-nowrap text-sm font-medium tracking-wide"
        style={{
          display: "inline-block",
          animation: "marquee 28s linear infinite",
        }}
      >
        {doubled}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Lazy Studio — Design & Development",
  description:
    "A creative studio blending UI/UX design and front-end development to craft digital experiences that feel effortless.",
  keywords: [
    "UI/UX Design",
    "Web Development",
    "Branding",
    "Digital Marketing",
    "Creative Studio",
  ],
  authors: [{ name: "The Lazy Studio" }],
  openGraph: {
    title: "The Lazy Studio — Design & Development",
    description:
      "A creative studio blending UI/UX design and front-end development to craft digital experiences that feel effortless.",
    url: "https://thelazystudio.com",
    siteName: "The Lazy Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4ede3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f0e" },
  ],
};

export const metadata: Metadata = {  title: "SectionForge — Premium Next.js Landing Sections",
  description:
    "60+ conversion-focused landing sections for Next.js: heroes, pricing, testimonials, FAQs, CTAs and more. Copy-paste, docs-first, real copy included.",
  openGraph: {
    title: "SectionForge — Premium Next.js Landing Sections",
    description:
      "Copy-paste landing sections with real conversion copy, dark/light mode, and documentation that teaches.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

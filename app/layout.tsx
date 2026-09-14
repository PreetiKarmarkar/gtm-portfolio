import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Loaded and exposed as a CSS variable, but not applied to any element (reserved).
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Preeti Karmarkar — Product Manager",
  description:
    "Portfolio of Preeti Karmarkar, Product Manager building at the intersection of product, growth, and AI. NYU · New York.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorant.variable} ${caveat.variable}`}>
        {children}
      </body>
    </html>
  );
}

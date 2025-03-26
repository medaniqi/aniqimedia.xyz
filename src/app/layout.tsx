// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Primary font - Poppins for headings and bold elements
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

// Secondary font - Roboto for body text
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "ANIQI MEDIA - Creative Director & Multimedia Strategist",
  description: "aNiqi Media a Creative Director & Multimedia Strategist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body>
        <div className="min-h-screen bg-dark text-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

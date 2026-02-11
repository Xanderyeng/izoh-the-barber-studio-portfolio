import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IZOH | The Barber – Portfolio",
  description:
    "Isaac Mayiaka (IZOH) - Senior Stylist & Barber with 13 years of experience. All hair textures. Nairobi, Kenya.",
  keywords: [
    "barber",
    "hair stylist",
    "Nairobi",
    "Kenya",
    "Izoh",
    "Isaac Mayiaka",
    "skin fade",
    "hair textures",
    "multicultural",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}

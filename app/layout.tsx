import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Vastgoed | Exclusieve Begeleiding",
  description: "Uw partner in luxe vastgoedprojecten, van renovatie tot verkoop in België.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-off-white text-charcoal`}>
        {children}
      </body>
    </html>
  );
}



import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const font = Nunito_Sans({ variable: "--font-main", subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jn-lawn-and-landscape.growlocalvisibility.com"),
  title: "J&N Lawn and Landscape | Landscaping, Garden Cleanups & Permanent Lights near Peterborough",
  description:
    "Landscape design, garden cleanups, mulching, stone and brick repair, storm cleanup and permanent LED lighting near Peterborough and Port Hope, Ontario. 5.0 stars from 32 Google reviews. Call (905) 396-5611.",
  openGraph: {
    title: "J&N Lawn and Landscape | Gardens, Stonework & Year-Round Lights",
    description: "Jeremy and Nick's landscaping crew. 5.0 stars from 32 Google reviews. Call or text (905) 396-5611.",
    type: "website",
    locale: "en_CA",
    images: ["/images/p3.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${font.variable} antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}

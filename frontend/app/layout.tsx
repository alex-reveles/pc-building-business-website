import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AlexBuilds PC | Custom Gaming PCs — La Puente, CA",
  description:
    "Hand-built custom gaming and workstation PCs. Expert assembly, tested and ready to ship. Serving Southern California.",
  keywords: ["custom PC", "gaming PC", "PC builder", "La Puente", "Los Angeles County", "Orange County"],
  openGraph: {
    title: "AlexBuilds PC | Custom Gaming PCs",
    description: "Hand-built custom PCs — tested, guaranteed, delivered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

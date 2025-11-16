import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Kim Electric LLC - Fire Protection Commercial & Residential",
  description: "Licensed fire protection contractor serving New Jersey. State of NJ Fire Protection Contractor Permit No. P01654. Commercial and residential fire alarm systems and monitoring.",
  keywords: "fire protection, fire alarm, commercial electrical, residential electrical, New Jersey, NJ contractor, fire alarm monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

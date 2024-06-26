import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Notifcations from "@/components/Notifcations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chick fill-A",
  description: "Best burgers around you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Notifcations />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}

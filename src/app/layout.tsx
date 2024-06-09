import Notification from "@/components/Notification";
import "./globals.css";
import type { Metadata } from "next";

import { Roboto } from 'next/font/google';
import { Rubik } from 'next/font/google';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  variable: "--font-roboto",
})

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-rubik",
})

export const metadata: Metadata = {
  title: "Resto Mini Apps",
  description: "My Resto Mini Apps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${rubik.variable}`}>
      <body>
        <div className="text1">
          <Notification />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
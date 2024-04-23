import "./globals.css";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le valou",
  description: "Le wiki du Valentinisme",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

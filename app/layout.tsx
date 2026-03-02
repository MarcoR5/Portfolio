import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Londrina_Shadow } from "next/font/google";

import "./globals.css";

// my custom one from google fonts
const londrina = Londrina_Shadow({
  variable: "--font-londrina",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${londrina.variable}  antialiased`}>{children}</body>
    </html>
  );
}

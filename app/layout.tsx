import type { Metadata } from "next";
import { Inter } from "next/font/google";
//@ts-ignore
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uploadinary - AI-powered video workflow",
  description: "AI-powered video workflow for uploading, managing, and sharing videos with smart AI support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" data-theme="dark">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}

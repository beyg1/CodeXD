import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import { metadata } from "./metadata";
import "./globals.css";
import DottedBackground from "../components/ui/dotted-bg";
import type React from "react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              const savedTheme = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = savedTheme ? savedTheme : prefersDark ? 'dark' : 'light';
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <DottedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

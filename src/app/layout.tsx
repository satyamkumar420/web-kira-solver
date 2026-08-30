import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "http://localhost:3000"),
  title: {
    default: "Kira Solver: Crack your Interview in Invisible Mode",
    template: `%s | Kira Solver`,
  },
  description:
    "AI Powered Interview Cracker Kira Solver App. The ultimate undetectable AI assistant for live interviews. Solve coding questions and MCQs from screenshots, get real-time chat support, and stay completely invisible. Crack your interview with Kira Solver.",
  keywords: [
    "Crack interview using Kira Solver App",
    "AI Powered Interview Cracker App",
    "Invisible AI interview tool",
    "Undetectable AI interview assistant",
    "Interview Cracker App",
    "AI Interview Copilot",
    "AI interview assistant",
    "undetectable interview tool",
    "live coding help",
    "MCQ solver",
    "Invisible during screenshare",
    "technical interview prep",
    "coding challenge solver",
    "Satyam Yadav",
    "Kira Solver",
    "interview copilot",
    "stealth interview tool",
    "Screen capture analysis",
    "Smart clipboard integration",
    "Context-based prompts",
    "Discreet functioning",
    "Live chatbot",
    "Screenshot Solver",
    "Discreet coding assistant",
    "Global hotkeys",
    "Screenshot-based coding solver",
    "Invisible (discreet) coding test assistant",
  ],
  authors: [
    {
      name: "Satyam Yadav",
    },
  ],
  creator: "Satyam Yadav",
  openGraph: {
    title: "Kira Solver: Undetectable AI Assistant for Interviews",
    description:
      "AI Powered Interview Cracker Kira Solver App. The ultimate undetectable AI assistant for live interviews. Solve coding questions and MCQs from screenshots, get real-time chat support, and stay completely invisible. Crack your interview with Kira Solver.",
    url: process.env.NEXTAUTH_URL || "https://kirasolver.com",
    siteName: "Kira Solver",
    images: [
      {
        url: "/logo3.png",
        width: 1200,
        height: 630,
        alt: "Kira Solver - Undetectable AI Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kira Solver: Undetectable AI Assistant for Interviews",
    description:
      "AI Powered Interview Cracker Kira Solver App. The ultimate undetectable AI assistant for live interviews. Solve coding questions and MCQs from screenshots, get real-time chat support, and stay completely invisible. Crack your interview with Kira Solver.",
    creator: "@satyam",
    images: ["/logo3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

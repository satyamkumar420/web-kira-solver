import { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Problem from "@/components/landing/Problem";
import Solution from "@/components/landing/Solution";
import FAQ from "@/components/landing/FAQ";
import { faqData } from "@/components/landing/faqData";

export const metadata: Metadata = {
  title: "Kira Solver: Crack your Interview in Invisible Mode",
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
  creator: "Satyam Yadav",
  openGraph: {
    title: "Kira Solver: Undetectable AI Assistant for Interviews",
    description:
      "AI Powered Interview Cracker Kira Solver App. The ultimate undetectable AI assistant for live interviews. Solve coding questions and MCQs from screenshots, get real-time chat support, and stay completely invisible. Crack your interview with Kira Solver.",
    url: process.env.NEXTAUTH_URL || "https://www.kirasolver.com",
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
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Testimonials />
      <FAQ faqs={faqData} />
    </>
  );
}

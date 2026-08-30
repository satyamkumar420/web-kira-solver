"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import VideoModal from "./VideoModal";

/**
 * 🎨 Renders the Hero section for the landing page.
 * This component features a clean, modern design with a subtle gradient dot pattern in the background.
 * It includes a prominent headline, a brief description, and a primary call-to-action button,
 * all centered for a focused user experience.
 */
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/1Ac_lnWqCHY"
      />
      <section
        id="hero"
        className="relative w-full h-screen flex items-center justify-center overflow-hidden shimmer-overlay"
      >
        {/* Subtle gradient dot pattern */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 z-10">
          {/* Text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-curved-shadow"
            >
              Crack Your Interview in Invisible Mode
              <br /> with <span className="text-primary">Kira Solver</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 mx-auto max-w-2xl text-lg text-slate-400 md:text-xl leading-relaxed"
            >
              The ultimate undetectable AI assistant for live interviews. Solve
              coding questions and MCQs from screenshots, get real-time chat
              support, and stay completely invisible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex justify-center"
            >
              <Button
                size="lg"
                className="bg-blue-800/90 text-primary-foreground hover:bg-blue-900 h-12 px-8 text-base font-semibold rounded-full shadow-lg shadow-primary/30 transition-transform transform hover:scale-105 flex items-center gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                Preview Kira Solver
                <PlayCircle className="size-7 animate-ping" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

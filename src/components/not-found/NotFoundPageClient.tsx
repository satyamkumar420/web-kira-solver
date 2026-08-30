"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const NotFoundPageClient = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold tracking-tight sm:text-8xl text-curved-shadow">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <p className="text-muted-foreground">
          It seems you&apos;ve taken a wrong turn. Let&apos;s get you back on
          track.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10"
      >
        <Button
          size="lg"
          className="group flex items-center"
          onClick={handleGoBack}
        >
          <ArrowLeft className="ml-2 transition-transform duration-200 group-hover:-translate-x-px" />
          Go Back to Home
        </Button>
      </motion.div>
    </div>
  );
};

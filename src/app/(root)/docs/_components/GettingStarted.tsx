"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Download,
  Package,
  LogIn,
  CheckSquare,
  Settings,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";

/**
 * 🚀 A visually enhanced 'Getting Started' component for documentation.
 * This component guides users through setup with an engaging, icon-based, card-style layout.
 */
const GettingStarted = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const steps = [
    {
      icon: <Download className="w-6 h-6 text-blue-400" />,
      title: "Download the App",
      description: "Grab the latest release for your operating system.",
      link: "/download",
    },
    {
      icon: <Package className="w-6 h-6 text-purple-400" />,
      title: "Install the Application",
      description: "Run the installer and install Kira Solver on your machine.",
    },
    {
      icon: <LogIn className="w-6 h-6 text-yellow-400" />,
      title: "Launch the App",
      description: "Open Kira Solver to start using the assistant.",
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-teal-400" />,
      title: "Perform Basic Checks",
      description:
        "Ensure hotkeys and capture tools run smoothly on your system.",
      link: "/docs/basic-checks",
    },
    {
      icon: <Settings className="w-6 h-6 text-indigo-400" />,
      title: "Configure Preferences",
      description: "Set your preferred language and shortcut settings.",
      link: "/docs/language-configuration",
    },
    {
      icon: <PartyPopper className="w-6 h-6 text-orange-400" />,
      title: "You're All Set!",
      description:
        "Congratulations! You're ready to start acing your technical interviews.",
    },
  ];

  return (
    <div className="text-white">
      <motion.div
        className="mb-6 border-b border-gray-700 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-gray-100">
          Getting Started
        </h1>
        <p className="text-gray-400">
          Welcome to Kira Solver. This guide will help you get up and running
          quickly.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex items-start gap-4 p-6 rounded-lg border border-gray-800 bg-gray-900/50"
          >
            <div className="absolute bg-gray-800/50 px-2.5 rounded-full top-3 right-4 text-lg font-bold text-blue-500">
              {index + 1}
            </div>
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-100 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
              {step.link && (
                <div className="mt-3">
                  <Link
                    href={step.link}
                    className="text-blue-400 hover:underline text-sm font-semibold"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GettingStarted;

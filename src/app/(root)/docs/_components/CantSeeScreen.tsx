"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Keyboard, Download } from "lucide-react";
import Link from "next/link";

/**
 * 🛠️ A component for troubleshooting screen visibility issues.
 * This provides a clear, step-by-step guide to help users resolve problems.
 */
const CantSeeScreen = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
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
      icon: <Keyboard className="w-6 h-6 text-blue-400" />,
      title: "Toggle Application Visibility",
      description:
        "If the app window is hidden, this is the quickest way to bring it back. This simple shortcut resolves most visibility issues.",
      shortcut: "Press ⌘ + B to toggle visibility",
    },
    {
      icon: <Download className="w-6 h-6 text-green-400" />,
      title: "Perform a Clean Reinstallation",
      description:
        "If toggling visibility doesn't work, a fresh installation can resolve underlying display conflicts or corrupt files.",
      link: "/download",
      linkText: "Download the latest version",
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
          Can&apos;t See The Screen?
        </h1>
        <p className="text-gray-400">
          Follow these steps to resolve screen visibility issues.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <h2 className="text-xl font-semibold text-gray-200">
          Troubleshooting Steps
        </h2>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4 p-6 rounded-lg border border-gray-800 bg-gray-900/50"
          >
            <div className="flex-shrink-0">{step.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-100 mb-1">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
              {step.shortcut && (
                <p className="mt-2">
                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-200 bg-gray-800 border border-gray-600 rounded-md">
                    {step.shortcut}
                  </kbd>
                </p>
              )}
              {step.link && (
                <div className="mt-3">
                  <Link
                    href={step.link}
                    className="text-blue-400 hover:underline text-sm font-semibold"
                  >
                    {step.linkText} &rarr;
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

export default CantSeeScreen;

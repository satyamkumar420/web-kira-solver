"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Download, Share2, Eye } from "lucide-react";

/**
 * 📝 A visually enhanced 'Basic Checks' component for documentation.
 * This component provides clear, card-based verification steps for users.
 */
const BasicChecks = () => {
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

  const checks = [
    {
      icon: <Download className="w-6 h-6 text-blue-400" />,
      title: "Download & Install",
      description:
        "Securely download and install the latest version of the Kira Solver application from our official website to begin.",
    },
    {
      icon: <Share2 className="w-6 h-6 text-green-400" />,
      title: "Share Your Screen",
      description:
        "Start a meeting with yourself on your provider of choice (e.g., Google Meet, Zoom) and share your entire screen.",
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />,
      title: "Check Application Visibility",
      description:
        "With screen sharing active, ensure the application's interface is completely invisible to others.",
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
          Basic System Checks
        </h1>
        <p className="text-gray-400">
          Verify that Kira Solver works correctly on your system before
          subscribing.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {checks.map((check, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex items-start gap-4 p-6 rounded-lg border border-gray-800 bg-gray-900/50"
          >
            <div className="absolute bg-gray-800/50 px-2.5 rounded-full top-3 right-4 text-lg font-bold text-blue-500">
              {index + 1}
            </div>
            <div className="flex-shrink-0">{check.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-100 mb-1">
                Step {index + 1}: {check.title}
              </h3>
              <p className="text-gray-400">{check.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BasicChecks;

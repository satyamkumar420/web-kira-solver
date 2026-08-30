"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Globe, Languages } from "lucide-react";

/**
 * 🌐 A visually enhanced component for language configuration documentation.
 * This component provides a clear, card-based guide for setting language preferences.
 */
const LanguageConfiguration = () => {
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
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Locate the Language Icon",
      description:
        "In the top-right corner of the application, you will find the language selection icon.",
    },
    {
      icon: <Languages className="w-8 h-8 text-green-400" />,
      title: "Choose Your Language",
      description:
        "Click the icon to open a list of available languages, then select your preferred one to instantly update the UI.",
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
          Language Configuration
        </h1>
        <p className="text-gray-400">
          This guide will help you configure the language settings in the
          application.
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
            className="relative flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-gray-800 bg-gray-900/50"
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
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LanguageConfiguration;

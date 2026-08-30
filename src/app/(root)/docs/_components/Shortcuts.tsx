"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Move,
  X,
  Eye,
  RefreshCw,
  Camera,
  Scan,
  ArrowLeftRight,
} from "lucide-react";

/**
 * ⌨️ A component to display keyboard shortcuts with a clean and professional UI.
 * This component lists all the essential shortcuts with descriptions and icons.
 */
const Shortcuts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const shortcuts = [
    {
      keys: ["CTRL", "ArrowKeys"],
      description: "Move the application window across your screen.",
      icon: <Move className="w-6 h-6 text-blue-400" />,
    },
    {
      keys: ["CTRL", "Q"],
      description: "Quickly close the application window.",
      icon: <X className="w-6 h-6 text-red-400" />,
    },
    {
      keys: ["CTRL", "B"],
      description: "Toggle the visibility of the window to show or hide it.",
      icon: <Eye className="w-6 h-6 text-green-400" />,
    },
    {
      keys: ["CTRL", "R"],
      description: "Clear the current conversation or chat history.",
      icon: <RefreshCw className="w-6 h-6 text-yellow-400" />,
    },
    {
      keys: ["CTRL", "H"],
      description: "Take a screenshot of a specific area on your screen.",
      icon: <Camera className="w-6 h-6 text-purple-400" />,
    },
    {
      keys: ["CTRL", "ENTER"],
      description: "Analyze the content of the captured screenshot.",
      icon: <Scan className="w-6 h-6 text-indigo-400" />,
    },
    {
      keys: ["CTRL", "TAB"],
      description: "Switch to the next tab within the application.",
      icon: <ArrowLeftRight className="w-6 h-6 text-pink-400" />,
    },
    {
      keys: ["CTRL", "SHIFT", "TAB"],
      description: "Switch back to the previous tab.",
      icon: <ArrowLeftRight className="w-6 h-6 text-teal-400" />,
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
          Keyboard Shortcuts
        </h1>
        <p className="text-gray-400">
          Boost your productivity with these powerful keyboard shortcuts.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {shortcuts.map((shortcut, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 shadow-lg flex items-start space-x-4"
            variants={itemVariants}
          >
            <div className="flex-shrink-0">{shortcut.icon}</div>
            <div>
              <div className="flex items-center space-x-2 mb-2">
                {shortcut.keys.map((key) => (
                  <kbd
                    key={key}
                    className="px-2 py-1 text-xs font-semibold text-gray-200 bg-gray-900 border border-gray-800 rounded-md"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
              <p className="text-gray-400">{shortcut.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Shortcuts;

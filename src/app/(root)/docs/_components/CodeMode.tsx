"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Camera, Scan, ChevronsRight, GitCompare, Zap } from "lucide-react";

/**
 * 🚀 A component to explain the powerful 'Code Mode' feature.
 * This component details the workflow from screenshot to dual-solution analysis.
 */
const CodeMode = () => {
  const containerVariants = {
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

  return (
    <div className="text-white">
      <motion.div
        className="mb-6 border-b border-gray-700 pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-2 text-gray-100">
          Code Mode: From Screenshot to Solution
        </h1>
        <p className="text-gray-400">
          Unlock powerful brute-force and optimized solutions from simple
          screenshots.
        </p>
      </motion.div>

      {/* Workflow Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-200">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <motion.div variants={itemVariants} className="flex-1">
            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
              <Camera className="w-8 h-8 mx-auto mb-2 text-purple-400" />
              <p className="font-semibold">1. Capture Screenshots</p>
              <p className="text-sm text-gray-400">
                Use <kbd className="px-1 bg-gray-600 rounded">CTRL+H</kbd> up to
                4 times.
              </p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <ChevronsRight className="w-8 h-8 text-gray-500" />
          </motion.div>
          <motion.div variants={itemVariants} className="flex-1">
            <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
              <Scan className="w-8 h-8 mx-auto mb-2 text-indigo-400" />
              <p className="font-semibold">2. Analyze Images</p>
              <p className="text-sm text-gray-400">
                Press <kbd className="px-1 bg-gray-600 rounded">CTRL+ENTER</kbd>{" "}
                to process.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Showcase */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-200">
          Visual Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="">
            <Image
              src="/code1.png"
              alt="Image 1"
              width={490}
              height={300}
              className="rounded-xl object-cover"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="">
            <Image
              src="/code2.png"
              alt="Image 2"
              width={470}
              height={300}
              className="rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Solution Comparison */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-200">
          Dual Solution Analysis
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Brute-force Solution */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg border border-gray-700 bg-gray-900/50"
          >
            <div className="flex items-center mb-4">
              <GitCompare className="w-6 h-6 mr-3 text-orange-400" />
              <h3 className="font-semibold text-xl text-orange-400">
                Brute-Force Solution
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                <strong>🤔 Thoughts:</strong> A straightforward approach to the
                problem...
              </p>
              <div>
                <strong>💻 Code:</strong>
                <pre className="bg-gray-800 p-3 rounded-md mt-1 text-sm text-gray-300">
                  <code>{`// Brute-force code example...`} </code>
                </pre>
              </div>
              <p className="text-gray-300">
                <strong>📊 Complexity:</strong> O(n²), O(n)
              </p>
            </div>
          </motion.div>

          {/* Optimized Solution */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg border border-green-500/50 bg-green-900/20"
          >
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 mr-3 text-green-400" />
              <h3 className="font-semibold text-xl text-green-400">
                Optimized Solution
              </h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                <strong>🤔 Thoughts:</strong> A more efficient solution
                leveraging...
              </p>
              <div>
                <strong>💻 Code:</strong>
                <pre className="bg-gray-800 p-3 rounded-md mt-1 text-sm text-gray-300">
                  <code>{`// Optimized code example...`} </code>
                </pre>
              </div>
              <p className="text-gray-300">
                <strong>📊 Complexity:</strong> O(n), O(1)
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodeMode;

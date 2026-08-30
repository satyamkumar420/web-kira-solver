"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert } from "lucide-react";

/**
 * 🛡️ A component explaining the app's undetectability features.
 * This component details common detection methods and how the app counters them.
 */
const Undetectability = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const features = [
    {
      detectionMethod: "Screen Sharing Detection",
      detectionDescription:
        "Interviewers may require you to share your screen on platforms such as Zoom, Google Meet, HackerRank, or CoderPad to monitor your activity.",
      counterMeasure:
        "Our app remains completely invisible to screen sharing software and screenshots, ensuring your usage is undetectable and your privacy is maintained at all times.",
    },
    {
      detectionMethod: "Requesting Solution Reasoning",
      detectionDescription:
        "Interviewers often ask you to explain your thought process or reasoning behind your solutions, rather than just providing the final answer.",
      counterMeasure:
        "The 'Code' tab offers well-commented code and step-by-step explanations, enabling you to confidently articulate your approach. In the 'MCQ' tab, detailed answer rationales help you justify your choices naturally.",
    },
    {
      detectionMethod: "Webcam and Eye Movement Monitoring",
      detectionDescription:
        "Some platforms monitor your webcam for suspicious behavior, such as frequent glances away from the screen or off-screen activity.",
      counterMeasure:
        "Effortlessly reposition the app over your coding area using ⌘ + arrow keys, so your gaze remains focused. You can also hover to scroll content without clicking, keeping your cursor and attention on the main screen.",
    },
    {
      detectionMethod: "Active Tab and Cursor Monitoring",
      detectionDescription:
        "Certain platforms track cursor movement and detect if you switch away from the active tab, flagging inactivity or distraction.",
      counterMeasure:
        "Utilize hotkeys (⌘ + arrow keys, ⌘ + B) to discreetly move or hide the app. This ensures your eyes and cursor never leave the main screen, demonstrating continuous engagement.",
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
          Detection Methods & Our Counter-Measures
        </h1>
        <p className="text-gray-400">
          Here’s how we make our app undetectable, keeping you safe and focused.
        </p>
      </motion.div>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 shadow-lg"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <ShieldAlert className="w-6 h-6 mr-3 text-red-500" />
              <h3 className="font-semibold text-xl text-red-400">
                {feature.detectionMethod}
              </h3>
            </div>
            <p className="text-gray-400 ml-9 mb-6">
              {feature.detectionDescription}
            </p>

            <div className="border-t border-dashed border-gray-700 my-4"></div>

            <div className="flex items-center mt-4">
              <ShieldCheck className="w-6 h-6 mr-3 text-green-500" />
              <h3 className="font-semibold text-xl text-green-400">
                Our Counter-Measure
              </h3>
            </div>
            <p className="text-gray-300 ml-9">{feature.counterMeasure}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Undetectability;

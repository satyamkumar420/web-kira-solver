"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { User, Bot, Code, BrainCircuit, ListChecks } from "lucide-react";

/**
 * 💬 A component to demonstrate the 'AI Chat Mode' feature.
 * This component showcases a sample conversation in a clean, chat-style UI.
 */
const AiChatMode = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const chatHistory = [
    {
      sender: "human",
      text: "Can you explain the difference between REST and GraphQL?",
    },
    {
      sender: "bot",
      text: "Of course! REST is an architectural style with fixed endpoints, while GraphQL is a query language that allows clients to request exactly the data they need, often in a single request.",
    },
    {
      sender: "human",
      text: "Which one is better for mobile apps?",
    },
    {
      sender: "bot",
      text: "GraphQL is often favored for mobile apps because it can reduce the number of network requests and minimize the amount of data transferred, which is crucial for users on slower networks.",
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
          AI Chat Mode
        </h1>
        <p className="text-gray-400">
          Get instant, intelligent answers from our AI. Here’s a look at how it
          works.
        </p>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        className="mb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl font-semibold mb-6 text-gray-200">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div
            variants={itemVariants}
            className="p-4 bg-gray-900/50 rounded-lg border border-gray-700"
          >
            <Code className="w-8 h-8 mx-auto mb-2 text-green-400" />
            <p className="font-semibold">Code Generation</p>
            <p className="text-sm text-gray-400">
              Get code snippets in any language.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-4 bg-gray-900/50 rounded-lg border border-gray-700"
          >
            <BrainCircuit className="w-8 h-8 mx-auto mb-2 text-blue-400" />
            <p className="font-semibold">Complex Problems</p>
            <p className="text-sm text-gray-400">
              Break down and solve tough questions.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="p-4 bg-gray-900/50 rounded-lg border border-gray-700"
          >
            <ListChecks className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
            <p className="font-semibold">Detailed Explanations</p>
            <p className="text-sm text-gray-400">
              Understand concepts step-by-step.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <h2 className="text-xl font-semibold mb-6 text-gray-200">
        Example Conversation
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="p-4 md:p-6 border border-gray-800 bg-gray-900/50 rounded-lg space-y-6"
      >
        {chatHistory.map((chat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`flex items-start gap-4 ${
              chat.sender === "human" ? "justify-end" : "justify-start"
            }`}
          >
            {chat.sender === "bot" && (
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400 flex-shrink-0">
                <Bot className="w-5 h-5 text-purple-300" />
              </div>
            )}
            <div
              className={`max-w-md p-3 rounded-lg ${
                chat.sender === "human" ? "bg-gray-700" : "bg-purple-800/40"
              }`}
            >
              <p className="text-gray-200">{chat.text}</p>
            </div>
            {chat.sender === "human" && (
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400 flex-shrink-0">
                <User className="w-5 h-5 text-blue-300" />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AiChatMode;

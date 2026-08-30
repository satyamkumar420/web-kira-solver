"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Camera,
  Scan,
  HelpCircle,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

/**
 * ❓ A component to explain the 'MCQ Mode' feature with an awesome UI.
 * This component breaks down the MCQ analysis process and displays results clearly.
 */
const McqMode = () => {
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

  const mcqs = [
    {
      question:
        "What is the purpose of Django's built-in authentication system?",
      correctAnswer: "B",
      explanation:
        "This is the core function of Django's authentication system (`django.contrib.auth`), which provides tools for user account management, verifying credentials (login), creating new users (registration), and handling sessions.",
      options: [
        {
          id: "A",
          text: "This describes authorization (what a user can do), which is built upon the authentication system but is not its primary purpose. The main goal of authentication is to verify identity.",
        },
        {
          id: "B",
          text: "This is the core function of Django's authentication system (`django.contrib.auth`), which provides tools for user account management, verifying credentials (login), creating new users (registration), and handling sessions.",
        },
        {
          id: "C",
          text: "This is a general purpose of the entire Django web framework, handled by views and the template engine, not specifically the authentication system.",
        },
        {
          id: "D",
          text: "This is the role of Django's Forms framework (`django.forms`). While authentication forms use this framework for validation, it is not the purpose of the authentication system itself.",
        },
      ],
    },
    {
      question:
        "In Django, what does LOGIN_URL = '/login/' in settings.py specify?",
      correctAnswer: "A",
      explanation:
        "Correct. The LOGIN_URL setting in settings.py specifies the URL where requests are redirected for login when using authentication decorators like @login_required. It points to the URL pattern that serves the login page..",
      options: [
        {
          id: "A",
          text: "Correct. The LOGIN_URL setting in settings.py specifies the URL where requests are redirected for login when using authentication decorators like @login_required. It points to the URL pattern that serves the login page.",
        },
        {
          id: "B",
          text: "Incorrect. The setting to redirect users after a successful login is LOGIN_REDIRECT_URL, which often points to a home page or dashboard.",
        },
        {
          id: "C",
          text: " Incorrect. There is no built-in Django setting for the user registration URL; developers typically define this URL pattern themselves.",
        },
        {
          id: "D",
          text: "Incorrect. Password reset functionality has its own set of URL patterns and views, usually included from django.contrib.auth.urls, and is not specified by LOGIN_URL.",
        },
      ],
    },
    // Add more MCQs here as needed
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
          MCQ Solver Mode
        </h1>
        <p className="text-gray-400">
          Instantly solve and understand multiple-choice questions from
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
          <motion.div
            variants={itemVariants}
            className="flex-1 p-4 bg-gray-900/50 rounded-lg border border-gray-700"
          >
            <Camera className="w-8 h-8 mx-auto mb-2 text-purple-400" />
            <p className="font-semibold">1. Capture MCQs</p>
            <p className="text-sm text-gray-400">
              Use <kbd className="px-1 bg-gray-600 rounded">CTRL+H</kbd> to
              screenshot questions.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex-1 p-4 bg-gray-900/50 rounded-lg border border-gray-700"
          >
            <Scan className="w-8 h-8 mx-auto mb-2 text-indigo-400" />
            <p className="font-semibold">2. Get Solutions</p>
            <p className="text-sm text-gray-400">
              Press <kbd className="px-1 bg-gray-600 rounded">CTRL+ENTER</kbd>{" "}
              for answers.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* MCQ Results */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {mcqs.map((mcq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 shadow-lg"
          >
            <div className="flex items-start mb-4">
              <HelpCircle className="w-6 h-6 mr-3 text-blue-400 flex-shrink-0" />
              <h3 className="font-semibold text-lg text-gray-100">
                Question {index + 1}: {mcq.question}
              </h3>
            </div>

            <div className="flex items-center mb-6 ml-9">
              <CheckCircle2 className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
              <p className="font-semibold text-gray-200">
                Correct Answer: {mcq.correctAnswer}
              </p>
            </div>

            <div className="ml-9">
              <div className="flex items-start mb-4">
                <Lightbulb className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" />
                <h4 className="font-semibold text-md text-yellow-400">
                  Explanation
                </h4>
              </div>
              <div className="space-y-3 ml-9">
                {mcq.options.map((option) => (
                  <div
                    key={option.id}
                    className={`p-3 rounded-md border ${
                      option.id === mcq.correctAnswer
                        ? "bg-green-900/30 border-green-500/50"
                        : "bg-red-900/30 border-red-500/50"
                    }`}
                  >
                    <p className="font-bold text-gray-200">
                      {option.id}:{" "}
                      <span className="font-normal">{option.text}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default McqMode;

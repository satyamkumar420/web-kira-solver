"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Award } from "lucide-react";

const solutions = [
  {
    icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    title: "Undetectable Stealth",
    description:
      "Run our software in the background. It's invisible to screen sharing and proctoring tools, giving you a secret advantage.",
  },
  {
    icon: <Zap className="w-8 h-8 text-green-500" />,
    title: "Instant Screenshot Analysis",
    description:
      "Take a screenshot of any coding problem or MCQ, and get 100% accurate solutions displayed discreetly on your screen.",
  },
  {
    icon: <Award className="w-8 h-8 text-green-500" />,
    title: "Live Interview Copilot",
    description:
      "Use the integrated AI chat to get instant answers for any question the interviewer throws at you. It's your personal interview expert.",
  },
];

/**
 * 🎨 Renders the Solution section.
 * Explains how Kira Solver helps users overcome interview challenges.
 */
const Solution = () => {
  return (
    <section id="solution" className="py-20 sm:py-32 ">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
            Your Unfair Advantage
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Kira Solver is your secret weapon to dominate any live technical
            interview with zero stress.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              custom={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className="p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-green-100 dark:bg-green-900/50 rounded-full mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;

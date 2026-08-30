"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Users } from "lucide-react";

const problems = [
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    title: "On-the-Spot Pressure",
    description:
      "Live interviews with screen sharing create immense pressure, making it hard to think clearly and code effectively.",
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    title: "Fear of Detection",
    description:
      "Using external help is risky. The fear of getting caught by proctoring tools adds to the stress.",
  },
  {
    icon: <Users className="w-8 h-8 text-red-500" />,
    title: "Instant Problem-Solving",
    description:
      "Complex coding questions and MCQs demand quick, accurate answers that are tough to produce under pressure.",
  },
];

/**
 * 🎨 Renders the Problem section.
 * Highlights the key challenges developers face during interview preparation.
 */
const Problem = () => {
  return (
    <section id="problem" className="py-20 sm:py-32 ">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
            Online Interviews Are a High-Wire Act
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The pressure is real. You need to perform live, with everyone
            watching, and no safety net.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              custom={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className="p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
            >
              <div className="flex items-center justify-center h-16 w-16 bg-red-100 dark:bg-red-900/50 rounded-full mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;

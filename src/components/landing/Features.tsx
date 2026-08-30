"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Bot, ListTodo } from "lucide-react";
import FeatureCard from "./FeatureCard";

const featureList = [
  {
    icon: <Code className="w-8 h-8 text-indigo-500" />,
    title: "Dual-Mode Code Solver",
    description:
      "Tackle any coding challenge with two powerful solutions. Kira provides both a brute-force implementation and a highly optimized approach ⚡, complete with detailed thought processes and time/space complexity analysis for each.",
    image: "/image1.png",
  },
  {
    icon: <ListTodo className="w-8 h-8 text-indigo-500" />,
    title: "Multi-MCQ Screenshot Solver",
    description:
      "Snap a picture to solve multiple MCQs at once. Our AI doesn't just give you the right answer—it provides a full breakdown, explaining why the correct option is right and detailing why each incorrect option is wrong.",
    image: "/image2.png",
  },
  {
    icon: <Bot className="w-8 h-8 text-indigo-500" />,
    title: "Live Interview AI Chat",
    description:
      "Stuck on a question? Open the AI chat to get real-time answers for any technical or behavioral question during the interview, without raising any suspicion.",
    image: "/image3.png",
  },
];

/**
 * 🎨 Renders the Features section.
 * Displays key features in an alternating layout with interactive 3D images.
 */
const Features = () => {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tighter text-foreground sm:text-4xl">
              The Ultimate Interview Toolkit
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Kira Solver is engineered with cutting-edge features to ensure you
              ace every interview, every time.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {featureList.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              direction={i % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

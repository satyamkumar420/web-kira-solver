"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

interface FeatureCardProps {
  feature: {
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
  };
  direction: "left" | "right";
}

/**
 * 🎨 Renders a single feature card with an interactive 3D image.
 * The layout direction (image on left or right) can be specified.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, direction }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <div className="w-full md:w-1/2">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center h-12 w-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full">
          {feature.icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
      </div>
      <p className="text-muted-foreground text-lg">{feature.description}</p>
    </div>
  );

  const image = (
    <div
      className="w-full md:w-1/2 flex items-center justify-center"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-96 rounded-xl shadow-2xl transition-shadow duration-300 hover:shadow-primary/50"
      >
        <Image
          src={feature.image}
          alt={feature.title}
          className="rounded-xl object-cover"
          fill
        />
      </motion.div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-12 ${
        direction === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      {content}
      {image}
    </motion.div>
  );
};

export default FeatureCard;

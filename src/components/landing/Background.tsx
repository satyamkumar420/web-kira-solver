"use client";

import { useMotionValue, motion } from "framer-motion";
import React, { useEffect } from "react";

/**
 * 🎨 Renders a dynamic background with a dot pattern and a cursor-following glow.
 */
const Background = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [x, y]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <motion.div
        className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        style={{
          translateX: x,
          translateY: y,
          x: "-50%",
          y: "-50%",
          willChange: "transform",
        }}
      />
    </div>
  );
};

export default Background;

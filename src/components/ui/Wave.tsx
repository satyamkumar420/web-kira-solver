"use client";

import React from "react";

/**
 * 🌊 Renders a responsive wave SVG component.
 * This decorative element can be used as a separator or background enhancement.
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply to the SVG element.
 * @returns {JSX.Element} The rendered wave SVG.
 */
const Wave = ({ className }: { className?: string }) => {
  return (
    <div className="w-full">
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,150 L0,150 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Wave;

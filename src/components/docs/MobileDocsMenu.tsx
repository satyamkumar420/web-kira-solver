"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { DocsSidebarContent } from "./DocsSidebar";

/**
 * 📱 Renders a custom dropdown menu for mobile documentation navigation.
 */
const MobileDocsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 🖱️ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.1,
        ease: "easeIn",
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className=" "
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 mt-2 w-screen max-w-xs z-20"
          >
            <div className="bg-gray-900/80 border border-border rounded-md backdrop-blur-lg shadow-lg p-4">
              <DocsSidebarContent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { MobileDocsMenu };

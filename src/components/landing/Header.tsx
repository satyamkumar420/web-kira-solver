"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Download", href: "/download" },
  { name: "Docs", href: "/docs/getting-started" },
];

/**
 * 🎨 Renders the main header for the landing page.
 * It's a sticky header with a blurred background and navigation links.
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // 🚪 Close mobile menu on route change
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const navContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const mobileMenuVariants: Variants = {
    closed: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
      >
        <motion.div
          variants={navContainerVariants}
          className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6"
        >
          <motion.div variants={navItemVariants}>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo2.jpg"
                alt="Kira Solver Logo"
                width={120}
                height={59}
                priority
                className="h-10 w-auto rounded-md object-contain"
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <motion.div key={link.name} variants={navItemVariants}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            variants={navItemVariants}
            className="flex items-center gap-2"
          >
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 hidden sm:flex"
            >
              <Link href="/download">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Link>
            </Button>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm md:hidden"
          >
            <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo2.jpg"
                  alt="Kira Solver Logo"
                  width={120}
                  height={59}
                  className="h-10 w-auto rounded-md object-contain"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <motion.nav
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-col items-center gap-6"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={navItemVariants} className="mt-4 w-3/4">
                <Button
                  asChild
                  size="lg"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/download">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

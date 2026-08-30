"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Wave from "../ui/Wave";

/**
 * 🎨 Renders the main footer for the landing page.
 * Includes navigation links, social media icons, and a copyright notice.
 */
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900/50 text-slate-400 relative mt-20"
    >
      <Wave className="absolute top-0 w-full h-20 md:h-28 -translate-y-full text-gray-900/50" />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Image
              src="/logo2.jpg"
              alt="Kira Solver Logo"
              width={140}
              height={69}
              className="h-12 w-auto rounded-md object-contain mb-4"
            />
            <p className="text-sm">The ultimate interview preparation tool.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Kira Solver. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

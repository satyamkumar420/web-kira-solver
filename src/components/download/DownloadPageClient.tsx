"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DownloadCard } from "./DownloadCard";
import { Button } from "@/components/ui/button";

type Tab = "downloads" | "requirements";

// 💻 Main component for the download page
const DownloadPageClient = () => {
  const [activeTab, setActiveTab] = useState<Tab>("downloads");

  const downloads = [
    {
      os: "Windows" as const,
      icon: "/window.svg",
      version: "Latest",
      releaseDate: "Latest Release",
      downloadLink: "https://github.com/satyamkumar420/kira-solver-app/releases",
      status: "available" as const,
    },
  ];

  const requirements = {
    Windows: {
      min: "Windows 10 (64-bit), 4GB RAM, 500MB disk space",
      rec: "Windows 11 (64-bit), 8GB RAM, 1GB SSD disk space",
    },
    macOS: {
      min: "macOS 11 (Big Sur), 4GB RAM, 500MB disk space",
      rec: "macOS 13 (Ventura), 8GB RAM, 1GB SSD disk space",
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "downloads":
        return (
          <motion.div
            className="flex justify-center items-center py-0"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {downloads.map((file, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                className="max-w-md w-full"
              >
                <DownloadCard {...file} />
              </motion.div>
            ))}
          </motion.div>
        );
      case "requirements":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card border rounded-lg p-6"
          >
            <h2 className="text-3xl font-bold mb-4">System Requirements</h2>
            {Object.entries(requirements).map(([os, reqs]) => (
              <div key={os} className="mb-4">
                <h3 className="text-xl font-semibold">{os}</h3>
                <p className="text-muted-foreground mt-1">
                  <span className="font-semibold">Minimum:</span> {reqs.min}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold">Recommended:</span> {reqs.rec}
                </p>
              </div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-foreground pt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-curved-shadow ">
            Download Our Software
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the latest version for your operating system. Blazing fast,
            secure, and ready to boost your productivity.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === "downloads" ? "default" : "outline"}
            onClick={() => setActiveTab("downloads")}
          >
            Downloads
          </Button>
          <Button
            variant={activeTab === "requirements" ? "default" : "outline"}
            onClick={() => setActiveTab("requirements")}
          >
            Requirements
          </Button>
        </div>

        <div className="my-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DownloadPageClient;

"use client";

import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { motion } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-primary/5 backdrop-blur-sm z-50"
        onClick={onClose}
      >
        <DialogContent
          className="bg-transparent border-none p-0 shadow-none sm:max-w-none max-w-none w-[95vw] md:w-[60vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <VisuallyHidden>
            <DialogTitle>Kira Solver Video Preview</DialogTitle>
          </VisuallyHidden>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-slate-950 rounded-xl border-2 border-primary shadow-2xl shadow-primary/30"
          >
            <div className="flex aspect-video items-center justify-center p-2 md:p-4">
              {videoUrl ? (
                <iframe
                  src={videoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full rounded-lg border-0"
                ></iframe>
              ) : (
                <div className="text-5xl font-bold text-primary">
                  Video is coming soon!
                </div>
              )}
            </div>
          </motion.div>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
};

export default VideoModal;

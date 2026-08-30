import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

// ✨ Defining types for our component props
interface DownloadCardProps {
  os: "Windows" | "macOS" | "Linux";
  icon: string;
  version: string;
  releaseDate: string;
  downloadLink: string;
  status: "available" | "coming-soon";
}
// 🎨 Reusable component for each OS download card
export const DownloadCard: React.FC<DownloadCardProps> = ({
  os,
  icon,
  version,
  releaseDate,
  downloadLink,
  status,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    if (status !== "available") return;
    setIsLoading(true);
    // Open GitHub release download link
    setTimeout(() => {
      window.open(downloadLink, "_blank", "noopener,noreferrer");
      setIsLoading(false);
    }, 500);
  };

  const isComingSoon = status === "coming-soon";

  return (
    <motion.div
      className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={icon}
        alt={`${os} icon`}
        width={64}
        height={64}
        className="h-16 w-16 mb-4"
      />
      <h3 className="text-2xl font-bold text-foreground">{os}</h3>
      <p className="text-muted-foreground mt-1">Version {version}</p>
      <p className="text-sm text-muted-foreground/80 mb-6">
        {isComingSoon ? "Coming Soon" : `Released on ${releaseDate}`}
      </p>
      <Button
        onClick={handleDownload}
        disabled={isLoading || isComingSoon}
        className="w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
        size="lg"
        variant={isComingSoon ? "secondary" : "default"}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "linear",
              }}
              className="h-5 w-5 border-2 border-primary-foreground/50 border-t-primary-foreground rounded-full mr-2"
            />
            <span>Downloading...</span>
          </div>
        ) : isComingSoon ? (
          "Coming Soon"
        ) : (
          `Download for ${os}`
        )}
      </Button>
    </motion.div>
  );
};

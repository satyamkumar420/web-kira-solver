import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
      {isComingSoon ? (
        <Button
          disabled
          className="w-full font-bold py-3 px-6 rounded-lg"
          size="lg"
          variant="secondary"
        >
          Coming Soon
        </Button>
      ) : (
        <Button
          asChild
          className="w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          size="lg"
          variant="default"
        >
          <a href={downloadLink} target="_blank" rel="noopener noreferrer">
            Download for {os}
          </a>
        </Button>
      )}
    </motion.div>
  );
};

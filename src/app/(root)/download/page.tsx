import { Metadata } from "next";
import DownloadPageClient from "@/components/download/DownloadPageClient";

export const metadata: Metadata = {
  title: "Download Kira Solver App",
  description:
    "Get started with Kira Solver App and harness the power of AI to solve complex problems efficiently. Download the latest version to experience advanced features, seamless performance, and intuitive design. Empower your workflow and unlock new possibilities with Kira Solver.",
};

const DownloadPage = () => {
  return <DownloadPageClient />;
};

export default DownloadPage;

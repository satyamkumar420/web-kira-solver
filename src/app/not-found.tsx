import { Metadata } from "next";
import { NotFoundPageClient } from "@/components/not-found/NotFoundPageClient";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Sorry, the page you are looking for does not exist.",
};

export default function NotFoundPage() {
  return <NotFoundPageClient />;
}

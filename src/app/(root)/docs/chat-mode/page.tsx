import React from "react";
import AiChatMode from "../_components/AiChatMode";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "AI Chat Mode",
  description:
    "Get instant, intelligent answers from our AI. Here’s a look at how it works.",
};

/**
 * 🚀 Renders the 'AI Chat Mode' documentation page.
 * This page features the AiChatMode component, showcasing a sample conversation.
 */
export default function AiChatModePage() {
  return (
    <>
      <AiChatMode />
      <DocsPagination />
    </>
  );
}

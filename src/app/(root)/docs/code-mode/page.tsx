import React from "react";
import CodeMode from "../_components/CodeMode";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "Code Mode",
  description:
    "Unlock powerful brute-force and optimized solutions from simple screenshots.",
};

/**
 * 🚀 Renders the 'Code Mode' documentation page.
 * This page features the CodeMode component, explaining the screenshot-to-solution workflow.
 */
export default function CodeModePage() {
  return (
    <>
      <CodeMode />
      <DocsPagination />
    </>
  );
}

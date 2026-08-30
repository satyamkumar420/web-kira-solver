import React from "react";
import Undetectability from "../_components/Undetectability";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "Undetectability",
  description:
    "Learn how Kira Solver counters common detection methods to ensure your privacy.",
};

/**
 * 🚀 Renders the 'Undetectability' documentation page.
 * This page features the Undetectability component, detailing the app's counter-measures.
 */
export default function UndetectabilityPage() {
  return (
    <>
      <Undetectability />
      <DocsPagination />
    </>
  );
}

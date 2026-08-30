import React from "react";
import CantSeeScreen from "../_components/CantSeeScreen";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "Can't See Screen - Troubleshooting Guide",
  description: "Follow these steps to resolve screen visibility issues.",
};

/**
 * 🚀 Renders the 'Can't See Screen' troubleshooting page.
 */
export default function CantSeeScreenPage() {
  return (
    <>
      <CantSeeScreen />
      <DocsPagination />
    </>
  );
}

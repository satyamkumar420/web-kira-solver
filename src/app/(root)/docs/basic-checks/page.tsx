import React from "react";
import BasicChecks from "../_components/BasicChecks";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "Basic Checks",
  description:
    "Complete these simple checks to ensure a smooth experience with Kira Solver.",
};

/**
 * 📝 Renders the 'Basic Checks' page for the documentation.
 * This page provides a checklist for users to verify before subscribing.
 */
export default function BasicChecksPage() {
  return (
    <>
      <BasicChecks />
      <DocsPagination />
    </>
  );
}

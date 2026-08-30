import React from "react";
import McqMode from "../_components/McqMode";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "MCQ Mode",
  description:
    "Instantly solve and understand multiple-choice questions from screenshots.",
};

/**
 * 🚀 Renders the 'MCQ Mode' documentation page.
 * This page features the McqMode component, explaining how to solve MCQs.
 */
export default function McqModePage() {
  return (
    <>
      <McqMode />
      <DocsPagination />
    </>
  );
}

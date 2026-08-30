import React from "react";
import GettingStarted from "../_components/GettingStarted";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Welcome to Kira Solver. This guide will help you get up and running quickly.",
};

/**
 * 🚀 Renders the 'Getting Started' page.
 * This page features the visually rich and animated GettingStarted component.
 */
export default function GettingStartedPage() {
  return (
    <>
      <GettingStarted />
      <DocsPagination />
    </>
  );
}

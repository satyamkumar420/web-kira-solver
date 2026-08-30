import React from "react";
import Shortcuts from "../_components/Shortcuts";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "Keyboard Shortcuts",
  description:
    "Boost your productivity with these powerful keyboard shortcuts.",
};

/**
 * 🚀 Renders the 'Keyboard Shortcuts' documentation page.
 * This page features the Shortcuts component, displaying a list of key combinations.
 */
export default function ShortcutsPage() {
  return (
    <>
      <Shortcuts />
      <DocsPagination />
    </>
  );
}

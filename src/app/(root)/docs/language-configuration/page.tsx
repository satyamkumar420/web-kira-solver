import React from "react";
import LanguageConfiguration from "../_components/LanguageConfiguration";
import { Metadata } from "next";
import DocsPagination from "../_components/DocsPagination";

export const metadata: Metadata = {
  title: "Language Configuration",
  description:
    "This guide will help you configure the language settings in the application.",
};

/**
 * 🚀 Renders the 'Language Configuration' page.
 * This page features the LanguageConfiguration component and docs pagination.
 */
export default function LanguageConfigurationPage() {
  return (
    <>
      <LanguageConfiguration />
      <DocsPagination />
    </>
  );
}

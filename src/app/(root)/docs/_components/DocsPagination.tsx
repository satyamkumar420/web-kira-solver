"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DOCS_PAGINATION } from "../_config/docs";

/**
 * 🧭 Renders 'Previous' and 'Next' navigation links for doc pages.
 * It uses the current path to determine the next and previous pages from the DOCS_PAGINATION config.
 */
const DocsPagination = () => {
  const pathname = usePathname();
  const currentPageIndex = DOCS_PAGINATION.findIndex(
    (page) => page.slug === pathname
  );

  const prevPage =
    currentPageIndex > 0 ? DOCS_PAGINATION[currentPageIndex - 1] : null;
  const nextPage =
    currentPageIndex < DOCS_PAGINATION.length - 1
      ? DOCS_PAGINATION[currentPageIndex + 1]
      : null;

  return (
    <div className="mt-16 pt-8 border-t border-gray-700 flex justify-between items-center">
      {prevPage ? (
        <Link
          href={prevPage.slug}
          className="flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <div>
            <p className="text-sm">Previous</p>
            <p className="text-lg font-semibold">{prevPage.title}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link
          href={nextPage.slug}
          className="flex items-center text-gray-400 hover:text-white transition-colors text-right"
        >
          <div>
            <p className="text-sm">Next</p>
            <p className="text-lg font-semibold">{nextPage.title}</p>
          </div>
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
};

export default DocsPagination;

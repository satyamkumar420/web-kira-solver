"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/app/(root)/docs/_config/docs";

export const DocsSidebarContent = () => {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<string[]>([
    "General",
    "Features",
  ]);

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((name) => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  return (
    <nav className="flex flex-col gap-4">
      {navigation.map((item) => (
        <div key={item.name}>
          {item.sublinks ? (
            <div>
              <button
                onClick={() => toggleSection(item.name)}
                className="flex items-center justify-between w-full text-md font-semibold text-foreground hover:text-primary transition-colors mb-2"
              >
                {item.name}
                {openSections.includes(item.name) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {openSections.includes(item.name) && (
                <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-border">
                  {item.sublinks.map((sublink) => (
                    <Link
                      key={sublink.name}
                      href={sublink.href}
                      className={cn(
                        "text-sm text-muted-foreground hover:text-primary transition-colors pl-4",
                        pathname === sublink.href && "text-primary font-medium"
                      )}
                    >
                      {sublink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={item.href!}
              className={cn(
                "text-md font-semibold text-foreground hover:text-primary transition-colors",
                pathname === item.href && "text-primary"
              )}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

/**
 * 🧭 Renders the sidebar navigation for the documentation pages (Desktop).
 */
const DocsSidebar = () => {
  return (
    <aside className="w-full max-w-[240px] border-r border-border pr-4">
      <DocsSidebarContent />
    </aside>
  );
};

export { DocsSidebar };

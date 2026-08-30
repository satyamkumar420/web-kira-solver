"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className="flex items-center text-sm text-muted-foreground">
      <Link href="/" className="hover:text-primary">
        <Home className="h-4 w-4 mr-1" />
      </Link>
      {pathSegments.slice(1).map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 2).join("/");
        const isLast = index === pathSegments.length - 2;
        const name = segment.replace(/-/g, " ");

        return (
          <React.Fragment key={href}>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link
              href={href}
              className={
                isLast ? "text-primary font-medium" : "hover:text-primary"
              }
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export { Breadcrumb };

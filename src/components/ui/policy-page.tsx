"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Link2 } from "lucide-react";

interface PolicyPageProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

interface Section {
  id: string;
  title: string;
  level: number;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function PolicyPage({ title, children, className }: PolicyPageProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const headings = document.querySelectorAll(".prose h2, .prose h3");
    const newSections: Section[] = [];

    headings.forEach((heading) => {
      const title = heading.textContent || "";
      const id = generateId(title);
      heading.id = id;
      newSections.push({
        id,
        title,
        level: heading.tagName === "H2" ? 2 : 3,
      });
      observer.observe(heading);
    });

    setSections(newSections);

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen  pt-20 pb-16"
    >
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
          {/* Main Content */}
          <Card
            className={cn(
              "relative order-2 lg:order-1 overflow-hidden backdrop-blur-sm bg-card/95 shadow-lg",
              "border border-border/50",
              "p-6 md:p-10",
              className
            )}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/80 via-primary/20 to-primary/80" />
            <div className="absolute top-0 right-0 w-16 h-16 -translate-y-1/2 translate-x-1/2 bg-primary/10 rounded-full blur-2xl" />

            <div className="relative">
              {/* Title Section */}
              <div className="mb-8">
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground/90">
                  {title}
                </h1>
                <Separator className="mt-4 bg-border/40" />
              </div>

              {/* Content Section */}
              <div
                className="prose dark:prose-invert prose-headings:scroll-mt-16 max-w-none
                prose-headings:font-semibold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-muted-foreground
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground/90
                prose-ul:my-6 prose-li:my-2
              "
              >
                <div className="space-y-6">{children}</div>
              </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 translate-y-1/2 translate-x-1/2 bg-muted/30 rounded-full blur-2xl" />
          </Card>

          {/* Table of Contents */}
          {sections.length > 0 && (
            <div className="order-1 lg:order-2">
              <Card className="p-6 sticky top-20 backdrop-blur-sm bg-card/95 shadow-lg border-border/50">
                <h2 className="text-sm font-semibold mb-4 text-muted-foreground flex items-center gap-2">
                  <Link2 className="w-4 h-4" />
                  On This Page
                </h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={cn(
                        "block py-1 text-sm transition-colors rounded hover:text-primary",
                        section.level === 3 && "pl-4",
                        activeSection === section.id
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      {section.level === 3 && (
                        <ChevronRight className="inline w-3 h-3 mr-1" />
                      )}
                      {section.title}
                    </a>
                  ))}
                </nav>
              </Card>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

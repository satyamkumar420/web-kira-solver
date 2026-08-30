export interface DocPagination {
  slug: string;
  title: string;
}

export const navigation = [
  {
    name: "General",
    href: "",
    sublinks: [
      {
        name: "Getting Started",
        href: "/docs/getting-started",
      },
      { name: "Basic checks", href: "/docs/basic-checks" },
      { name: "Language Configuration", href: "/docs/language-configuration" },
      { name: "Undetectability", href: "/docs/undetectability" },
      { name: "Shortcuts", href: "/docs/shortcuts" },
    ],
  },
  {
    name: "Features",
    href: "",
    sublinks: [
      {
        name: "Code Mode",
        href: "/docs/code-mode",
      },
      {
        name: "MCQ Mode",
        href: "/docs/mcq-mode",
      },
      {
        name: "AI Chat Mode",
        href: "/docs/chat-mode",
      },
    ],
  },
  {
    name: "Troubleshooting",
    href: "",
    sublinks: [
      {
        name: "Can't See Screen",
        href: "/docs/cant-see-screen",
      },
    ],
  },
];

export const DOCS_PAGINATION: DocPagination[] = [
  {
    slug: "/docs/getting-started",
    title: "Getting Started",
  },
  {
    slug: "/docs/basic-checks",
    title: "Basic Checks",
  },
  {
    slug: "/docs/language-configuration",
    title: "Language Configuration",
  },
  {
    slug: "/docs/undetectability",
    title: "Undetectability",
  },
  {
    slug: "/docs/shortcuts",
    title: "Keyboard Shortcuts",
  },
  {
    slug: "/docs/code-mode",
    title: "Code Mode",
  },
  {
    slug: "/docs/mcq-mode",
    title: "MCQ Mode",
  },
  {
    slug: "/docs/chat-mode",
    title: "AI Chat Mode",
  },
  {
    slug: "/docs/cant-see-screen",
    title: "Can't See Screen",
  },

  // Add new doc pages here
];

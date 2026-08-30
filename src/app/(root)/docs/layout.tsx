import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { MobileDocsMenu } from "@/components/docs/MobileDocsMenu";

/**
 * 📚 Defines the layout for all documentation pages.
 * It includes a sidebar, breadcrumbs, and a main content area.
 * @param children The content to be rendered within the layout.
 */
const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 container max-w-7xl mx-auto px-4 md:px-6 py-24">
      <div className="flex items-start md:gap-8">
        <aside className="hidden md:block sticky top-24">
          <DocsSidebar />
        </aside>
        <main className="flex-1">
          <div className="flex items-center gap-4  md:gap-0 mb-4">
            <MobileDocsMenu />
            <Breadcrumb />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;

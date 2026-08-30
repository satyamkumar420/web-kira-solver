import Background from "@/components/landing/Background";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Background />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "@/components/ui-system/PageTransition";
import SiteCtaPanel from "@/components/shared/SiteCtaPanel";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <SiteCtaPanel />
      <Footer />
    </div>
  );
}

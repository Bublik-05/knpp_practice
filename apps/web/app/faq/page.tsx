import { Suspense } from "react";
import PageHero from "@/components/layout/PageHero";
import FaqContent from "@/components/faq/FaqContent";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

export default function FaqPage() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      <BackgroundGlow />
      <PageHero title="FAQ" />
      <Suspense fallback={null}>
        <FaqContent />
      </Suspense>
    </main>
  );
}

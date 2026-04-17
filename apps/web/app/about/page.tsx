import { Suspense } from "react";
import AboutContent from "@/components/about/AboutContent";
import BackgroundGlow from "@/components/layout/BackgroundGlow";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden ">
      <BackgroundGlow />
      <div className="relative z-10">
        <Suspense fallback={null}>
          <AboutContent />
        </Suspense>
      </div>
    </main>
  );
}
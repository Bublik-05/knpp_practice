import { Suspense } from "react";
import PageHero from "@/components/vacancies/PageHero";
import FaqContent from "@/components/faq/FaqContent";

export default function FaqPage() {
  return (
    <>
      <PageHero title="FAQ" />
      <Suspense fallback={null}>
        <FaqContent />
      </Suspense>
    </>
  );
}

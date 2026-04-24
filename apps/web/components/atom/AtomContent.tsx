"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AboutNav, { type SectionId } from "./AtomNav";
import Breadcrumb from "@/components/ui/Breadcrumb";

import SafetySection from "./sections/SafetySection";
import HistorySection from "./sections/HistorySection";
import OperationSection from "./sections/OperationSection";
import TypesSection from "./sections/TypesSection";
import EnvironmentSection from "./sections/EnvironmentSection";
import MythsSection from "./sections/MythsSection";
import MultimediaSection from "./sections/MultimediaSection";
import QuizSection from "./sections/QuizSection";

const validSections: SectionId[] = [
  "history", "operation", "types", "safety", "environment", "myths", "multimedia",
];

const sections: { id: SectionId; label: string; Component: React.FC }[] = [
  { id: "history", label: "История об атомной энергии", Component: HistorySection },
  { id: "operation", label: "Как работает атомный реактор", Component: OperationSection },
  { id: "types", label: "Типы реакторов", Component: TypesSection },
  { id: "safety", label: "Безопасность", Component: SafetySection },
  { id: "environment", label: "Атомная энергия и экология", Component: EnvironmentSection },
  { id: "myths", label: "Мифы и факты об АЭС", Component: MythsSection },
  { id: "multimedia", label: "Интерактив", Component: MultimediaSection },
];

export default function AtomContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [active, setActive] = useState<SectionId>("history");

  const contentTopRef = useRef<HTMLDivElement | null>(null);
  const scrollToContentTop = useCallback(() => {
    if (!contentTopRef.current) return;
    const y = contentTopRef.current.getBoundingClientRect().top + window.scrollY - 300;
    window.scrollTo({ top: y, behavior: "auto" });
  }, []);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && validSections.includes(section as SectionId)) {
      setActive(section as SectionId);
      const timeout = setTimeout(() => scrollToContentTop(), 0);
      return () => clearTimeout(timeout);
    } else {
      setActive("history");
    }
  }, [searchParams, scrollToContentTop]);

  const handleSelect = useCallback(
    (id: SectionId) => {
      setActive(id);
      router.push(`${pathname}?section=${id}`);
    },
    [router, pathname]
  );

  const activeSection = sections.find((s) => s.id === active);
  const ActiveSection = activeSection?.Component;

  return (
    <div className="flex flex-col md:flex-row flex-1 w-full pt-10 pb-20 md:pb-[320px]">
      <AboutNav active={active} onSelect={handleSelect} />

      <div ref={contentTopRef} className="flex-1 min-w-0 px-4 md:px-10 lg:px-20">
        {/* Хлебные крошки */}
        <Breadcrumb
          items={[
            { label: "Об Атоме", href: "/atom" },
            { label: activeSection?.label ?? "" },
          ]}
          className="mb-6"
        />

        {ActiveSection ? (
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              {activeSection?.label}
            </h1>
            <ActiveSection />
          </div>
        ) : (
          <p className="text-gray-500">Выберите раздел для отображения.</p>
        )}
      </div>
    </div>
  );
}

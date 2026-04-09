"use client";

import { useState } from "react";
import AboutNav, { type SectionId } from "./AtomNav";
import PageHero from "@/components/vacancies/PageHero";

import SafetySection from "./sections/SafetySection";
import HistorySection from "./sections/HistorySection";
import OperationSection from "./sections/OperationSection";
import TypesSection from "./sections/TypesSection";
import EnvironmentSection from "./sections/EnvironmentSection";
import MythsSection from "./sections/MythsSection";
import MultimediaSection from "./sections/MultimediaSection";

const sections: { id: SectionId; label: string; Component: React.FC }[] = [
  { id: "history", label: "История", Component: HistorySection },
  { id: "operation", label: "Как работает атомный реактор", Component: OperationSection },
  { id: "types", label: "Типы реакторов", Component: TypesSection },
  { id: "safety", label: "Безопасность", Component: SafetySection },
  { id: "environment", label: "Экология", Component: EnvironmentSection },
  { id: "myths", label: "Мифы и факты", Component: MythsSection },
  { id: "multimedia", label: "Интерактив / мультимедиа", Component: MultimediaSection },
];

export default function AboutContent() {
  const [active, setActive] = useState<SectionId>("history");

  const ActiveSection = sections.find((section) => section.id === active)?.Component;

  return (
    <>
      <PageHero title="Об атоме" />
    <div className="flex flex-1 w-full pt-10 pb-20">
      <AboutNav active={active} onSelect={setActive} />

      <div className="flex-1 min-w-0 px-20">
        {ActiveSection ? (
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              {sections.find((section) => section.id === active)?.label}
            </h1>
            <ActiveSection />
          </div>
        ) : (
          <p className="text-gray-500">Выберите раздел для отображения.</p>
        )}
      </div>
    </div>
    </>
  );
}
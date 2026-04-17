"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import FaqNav, { type FaqSectionId } from "./FaqNav";
import GeneralSection from "./sections/GeneralSection";
import ProjectSection from "./sections/ProjectSection";
import CooperationSection from "./sections/CooperationSection";
import Breadcrumb from "@/components/ui/Breadcrumb";

const validSections: FaqSectionId[] = ["general", "project", "cooperation"];

const sections: { id: FaqSectionId; label: string; Component: React.FC }[] = [
  { id: "general", label: "Об АЭС и атомной энергетике", Component: GeneralSection },
  { id: "project", label: "О проекте в Казахстане", Component: ProjectSection },
  { id: "cooperation", label: "Вакансии и сотрудничество", Component: CooperationSection },
];

export default function FaqContent() {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState<FaqSectionId>("general");
  const contentTopRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = useCallback(() => {
    if (!contentTopRef.current) return;
    const y = contentTopRef.current.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const section = searchParams.get("section");

    if (section && validSections.includes(section as FaqSectionId)) {
      setActive(section as FaqSectionId);
      setTimeout(() => scrollToTop(), 0);
    } else {
      setActive("general");
    }
  }, [scrollToTop]);

  const handleSelect = useCallback(
    (id: FaqSectionId) => {
      setActive(id);
      router.push(`${pathname}?section=${id}`);
      scrollToTop();
    },
    [router, pathname, scrollToTop]
  );

  const ActiveSection = sections.find((s) => s.id === active)?.Component;
  const activeLabel = sections.find((s) => s.id === active)?.label;

  return (
    <div className="flex flex-1 w-full pt-10 pb-20">
      <FaqNav active={active} onSelect={handleSelect} />

      <div ref={contentTopRef} className="flex-1 min-w-0 px-20">
        {/* Хлебные крошки */}
        <Breadcrumb
          items={[
            { label: "FAQ", href: "/faq" },
            { label: activeLabel ?? "" },
          ]}
          className="mb-6"
        />

        {ActiveSection && (
          <div className="flex flex-col">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">{activeLabel}</h1>
            <ActiveSection />
          </div>
        )}
      </div>
    </div>
  );
}

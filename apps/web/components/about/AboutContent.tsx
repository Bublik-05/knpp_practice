"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import AboutNav, { type SectionId } from "./AboutNav";

import CompanySection    from "./sections/CompanySection";
import ActivitiesSection from "./sections/ActivitiesSection";
import AdditionalSection from "./sections/AdditionalSection";
import GallerySection    from "./sections/GallerySection";
import LeadershipSection from "./sections/LeadershipSection";
import SafetySection     from "./sections/SafetySection";
import ComplianceSection from "./sections/ComplianceSection";
import NpaSection        from "./sections/NpaSection";
import DevelopmentSection from "./sections/DevelopmentSection";

const SECTION_ORDER: SectionId[] = [
  "about", "activities", "additional", "gallery",
  "leadership", "safety", "compliance", "npa", "development",
];

/* Группы — для большого заголовка секции */
const GROUP_LABELS: Partial<Record<SectionId, string>> = {
  about:       "О Компании",
  leadership:  "Руководство",
  safety:      "Безопасность",
  compliance:  "Комплаенс",
  npa:         "НПА",
  development: "План развития",
};

export default function AboutContent() {
  const [active, setActive] = useState<SectionId>("about");
  const scrollingRef = useRef(false);

  /* ── Scroll to section when nav clicked ── */
  const handleSelect = useCallback((id: SectionId) => {
    setActive(id);
    scrollingRef.current = true;
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => { scrollingRef.current = false; }, 800);
    }
  }, []);

  /* ── IntersectionObserver — track active section ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_ORDER.forEach((id) => {
      const el = document.getElementById(`section-${id}`);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !scrollingRef.current) {
            setActive(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="flex flex-1 w-full pt-10 pb-20">

      {/* ── Навигация ── */}
      <AboutNav active={active} onSelect={handleSelect} />

      {/* ── Контент ── */}
      <div className="flex-1 px-20 flex flex-col gap-0">

        {/* О компании — группа из 4 секций */}
        <div className="flex flex-col gap-7 pb-14">
          <h1 className="text-4xl font-bold text-gray-900">О Компании</h1>
          <CompanySection />
          <hr className="border-gray-100" />
          <ActivitiesSection />
          <hr className="border-gray-100" />
          <AdditionalSection />
          <hr className="border-gray-100" />
          <GallerySection />
        </div>

        {/* Руководство */}
        <div className="flex flex-col gap-6 border-t border-gray-200 py-14">
          <LeadershipSection />
        </div>

        {/* Безопасность */}
        <div className="flex flex-col gap-6 border-t border-gray-200 py-14">
          <SafetySection />
        </div>

        {/* Комплаенс */}
        <div className="flex flex-col gap-6 border-t border-gray-200 py-14">
          <ComplianceSection />
        </div>

        {/* НПА */}
        <div className="flex flex-col gap-6 border-t border-gray-200 py-14">
          <NpaSection />
        </div>

        {/* План развития */}
        <div className="flex flex-col gap-6 border-t border-gray-200 py-14">
          <DevelopmentSection />
        </div>

      </div>
    </div>
  );
}

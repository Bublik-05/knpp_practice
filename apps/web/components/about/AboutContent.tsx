"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AboutNav, { type SectionId } from "./AboutNav";
import Breadcrumb, { type BreadcrumbItem } from "@/components/ui/Breadcrumb";

import CompanySection from "./sections/CompanySection";
import ActivitiesSection from "./sections/ActivitiesSection";
import MissionSection from "./sections/MissionSection";
import LeadershipSection from "./sections/LeadershipSection";
import SafetySection from "./sections/SafetySection";
import ComplianceSection from "./sections/ComplianceSection";
import CorporateGovernanceSection from "./sections/CorporateGovernanceSection";
import DocumentsSection from "./sections/DocumentsSection";
import DevelopmentSection from "./sections/DevelopmentSection";

import GallerySection from "./gallery/GallerySection";

const validSections: SectionId[] = [
  "about",
  "leadership",
  "governance",
  "compliance",
  "documents",
  "safety",
  "development",
];

const sectionLabels: Record<SectionId, string> = {
  about: "О КАЭС",
  leadership: "Руководство",
  governance: "Корпоративное управление",
  compliance: "Комплаенс",
  documents: "Документы",
  safety: "Безопасность",
  development: "План развития",
};

function AboutBlock({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 px-0 py-0"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#112250] mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function AboutContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [active, setActive] = useState<SectionId>("about");

  const contentTopRef = useRef<HTMLDivElement | null>(null);

  const scrollToContentTop = useCallback(() => {
    if (!contentTopRef.current) return;
    const y = contentTopRef.current.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: y, behavior: "auto" });
  }, []);

  useEffect(() => {
    const section = searchParams.get("section");
    if (section && validSections.includes(section as SectionId)) {
      setActive(section as SectionId);
      const timeout = setTimeout(() => scrollToContentTop(), 0);
      return () => clearTimeout(timeout);
    } else {
      setActive("about");
    }
  }, [searchParams, scrollToContentTop]);

  const handleSelect = useCallback(
    (id: SectionId) => {
      setActive(id);
      router.push(`${pathname}?section=${id}`);
    },
    [router, pathname]
  );

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    return [
      { label: "О КАЭС", href: "/about" },
      { label: sectionLabels[active] },
    ];
  };

  const renderContent = () => {
    switch (active) {
      case "about":
        return (
          <>
            <h1 className="text-5xl font-bold text-gray-900 mb-10">О КАЭС</h1>

            <div className="flex flex-col gap-10">
              <AboutBlock id="section-about-company" title="О компании">
                <CompanySection />
              </AboutBlock>

              <AboutBlock
                id="section-about-additional"
                title="Миссия"
              >
                <MissionSection />
              </AboutBlock>
              
              <AboutBlock
                id="section-about-activities"
                title='Виды деятельности ТОО "КАЭС"'
              >
                <ActivitiesSection />
              </AboutBlock>
            </div>
          </>
        );

      case "leadership":
        return (
          <>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Руководство</h1>
            <LeadershipSection />
          </>
        );

      case "governance":
        return (
          <>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Корпоративное управление</h1>
            <CorporateGovernanceSection />
          </>
        );

      case "compliance":
        return (
          <>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Комплаенс</h1>
            <ComplianceSection />
          </>
        );

      case "documents":
        return (
          <>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Документы</h1>
            <DocumentsSection />
          </>
        );

      case "safety":
        return (
          <>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Безопасность</h1>
            <SafetySection />
          </>
        );

      case "development":
        return (
          <>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">План развития</h1>
            <DevelopmentSection />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row flex-1 w-full pt-10 pb-20">
      <AboutNav active={active} onSelect={handleSelect} />

      <div ref={contentTopRef} className="flex-1 min-w-0 px-4 md:px-10 lg:px-20">
        <Breadcrumb items={getBreadcrumbs()} className="mb-6" />

        <div className="flex flex-col">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
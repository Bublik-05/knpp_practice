"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import AboutNav, { type SectionId } from "./AboutNav";
import Breadcrumb, { type BreadcrumbItem } from "@/components/ui/Breadcrumb";
import { galleries } from "@/lib/galleries";

import CompanySection from "./sections/CompanySection";
import ActivitiesSection from "./sections/ActivitiesSection";
import AdditionalSection from "./sections/AdditionalSection";
import LeadershipSection from "./sections/LeadershipSection";
import SafetySection from "./sections/SafetySection";
import ComplianceSection from "./sections/ComplianceSection";
import NpaSection from "./sections/NpaSection";
import DevelopmentSection from "./sections/DevelopmentSection";

import GallerySection from "./gallery/GallerySection";
import GalleryDetail from "./gallery/GalleryDetail";

const validSections: SectionId[] = [
  "about", "activities", "additional", "gallery",
  "leadership", "safety", "compliance", "npa", "development",
];

const sectionLabels: Record<SectionId, string> = {
  about:       "О компании",
  activities:  "Виды деятельности",
  additional:  "Дополнительная информация",
  gallery:     "Галерея",
  leadership:  "Руководство",
  safety:      "Безопасность",
  compliance:  "Комплаенс",
  npa:         "НПА",
  development: "План развития",
};

export default function AboutContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [active, setActive] = useState<SectionId>("about");
  const [selectedGallerySlug, setSelectedGallerySlug] = useState<string | null>(null);

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
      setSelectedGallerySlug(null);
      const timeout = setTimeout(() => scrollToContentTop(), 0);
      return () => clearTimeout(timeout);
    } else {
      setActive("about");
      setSelectedGallerySlug(null);
    }
  }, [searchParams, scrollToContentTop]);

  useEffect(() => {
    if (active !== "gallery") return;
    const timeout = setTimeout(() => scrollToContentTop(), 0);
    return () => clearTimeout(timeout);
  }, [selectedGallerySlug, active, scrollToContentTop]);

  const handleSelect = useCallback(
    (id: SectionId) => {
      setActive(id);
      if (id !== "gallery") setSelectedGallerySlug(null);
      router.push(`${pathname}?section=${id}`);
    },
    [router, pathname]
  );

  const handleOpenGallery = useCallback((slug: string) => {
    setActive("gallery");
    setSelectedGallerySlug(slug);
  }, []);

  const handleBackToGalleryList = useCallback(() => {
    setSelectedGallerySlug(null);
  }, []);

  // ── Хлебные крошки ──
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    if (active === "gallery" && selectedGallerySlug) {
      const galleryTitle = galleries.find((g) => g.slug === selectedGallerySlug)?.title ?? "Галерея";
      return [
        { label: "О компании", href: "/about" },
        { label: "Галерея",    href: "/about?section=gallery" },
        { label: galleryTitle },
      ];
    }
    return [
      { label: "О компании", href: "/about" },
      { label: sectionLabels[active] },
    ];
  };

  const renderContent = () => {
    switch (active) {
      case "about":       return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">О компании</h1><CompanySection /></>);
      case "activities":  return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">Виды деятельности ТОО «КАЭС»:</h1><ActivitiesSection /></>);
      case "additional":  return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">Дополнительная информация</h1><AdditionalSection /></>);
      case "gallery":
        return selectedGallerySlug ? (
          <><h1 className="text-5xl font-bold text-gray-900 mb-8">Галерея</h1><GalleryDetail slug={selectedGallerySlug} onBack={handleBackToGalleryList} /></>
        ) : (
          <GallerySection onOpenGallery={handleOpenGallery} />
        );
      case "leadership":  return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">Руководство</h1><LeadershipSection /></>);
      case "safety":      return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">Безопасность</h1><SafetySection /></>);
      case "compliance":  return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">Комплаенс</h1><ComplianceSection /></>);
      case "npa":         return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">НПА</h1><NpaSection /></>);
      case "development": return (<><h1 className="text-5xl font-bold text-gray-900 mb-8">План развития</h1><DevelopmentSection /></>);
      default:            return null;
    }
  };

  return (
    <div className="flex flex-1 w-full pt-10 pb-20">
      <AboutNav active={active} onSelect={handleSelect} />

      <div ref={contentTopRef} className="flex-1 min-w-0 px-20">
        {/* Хлебные крошки */}
        <Breadcrumb items={getBreadcrumbs()} className="mb-6" />

        <div className="flex flex-col">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

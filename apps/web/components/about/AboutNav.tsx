"use client";

import { useEffect, useMemo, useState } from "react";

export type SectionId =
  | "about"
  | "leadership"
  | "governance"
  | "compliance"
  | "documents"
  | "safety"
  | "development";

interface Props {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

type CompanyAnchorId =
  | "section-about-company"
  | "section-about-activities"
  | "section-about-additional"
  | "section-about-gallery";

const companyChildren: { id: CompanyAnchorId; label: string }[] = [
  { id: "section-about-company", label: "О компании" },
  { id: "section-about-activities", label: 'Миссия' },
  { id: "section-about-additional", label: "Виды деятельности ТОО 'КАЭС'" },
];

const topItems: { id: SectionId; label: string }[] = [
  { id: "leadership", label: "Руководство" },
  { id: "governance", label: "Корпоративное управление" },
  { id: "compliance", label: "Комплаенс" },
  { id: "documents", label: "Документы" },
  { id: "safety", label: "Безопасность" },
  { id: "development", label: "План развития" },
];

export default function AboutNav({ active, onSelect }: Props) {
  const [companyOpen, setCompanyOpen] = useState(true);
  const [activeAnchor, setActiveAnchor] =
    useState<CompanyAnchorId>("section-about-company");

  const companyAnchorIds = useMemo(
    () => companyChildren.map((item) => item.id),
    []
  );

  const scrollToAnchor = (anchorId: CompanyAnchorId) => {
    const el = document.getElementById(anchorId);
    if (!el) return;

    const offset = 100;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActiveAnchor(anchorId);
  };

  const handleCompanyItemClick = (anchorId: CompanyAnchorId) => {
    setCompanyOpen(true);

    if (active !== "about") {
      onSelect("about");

      // ждём ререндер about-страницы, потом скроллим к якорю
      window.setTimeout(() => {
        scrollToAnchor(anchorId);
      }, 180);

      return;
    }

    scrollToAnchor(anchorId);
  };

  useEffect(() => {
    if (active !== "about") return;

    const handleScroll = () => {
      const offset = 120;
      const scrollPosition = window.scrollY + offset;

      let current: CompanyAnchorId = "section-about-company";

      for (const id of companyAnchorIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        if (el.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveAnchor(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, companyAnchorIds]);
  const isAboutActive = active === "about";

  return (
    <aside className="px-4 md:pl-8 md:pr-0 shrink-0 self-start w-full md:w-auto">
      <div className="w-full md:w-64">
        <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden">
          <button
            onClick={() => {
              setCompanyOpen((prev) => !prev);
              if (active !== "about") onSelect("about");
            }}
            className={`
              flex items-center justify-between px-5 py-4 text-[15px] font-medium
              transition-colors duration-150
              ${isAboutActive
                ? "bg-[#1E4080] text-white"
                : "text-gray-800 hover:bg-gray-200"}
            `}
          >
            <span>О КАЭС</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""
                }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {companyOpen && (
            <div className="flex flex-col bg-gray-100 border-b border-gray-100">
              {companyChildren.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleCompanyItemClick(item.id)}
                  className={`
                    text-left pl-8 pr-5 py-3 text-[14px] transition-colors duration-150
                    ${isAboutActive && activeAnchor === item.id
                      ? "bg-[#1E4080] text-white font-medium"
                      : "text-gray-600 hover:bg-gray-300"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col">
            {topItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`
                  flex items-center gap-3 px-5 py-4 text-[15px] font-medium
                  transition-colors duration-150 text-left
                  ${i > 0 ? "border-t border-gray-100" : ""}
                  ${
                    active === item.id
                      ? "bg-[#1E4080] text-white"
                      : "text-gray-800 hover:bg-gray-200"
                  }
                `}
              >
                <span className="flex-1 leading-snug">
                  {item.label}
                </span>
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
"use client";

import { useState } from "react";

export type SectionId =
  | "about"
  | "activities"
  | "additional"
  | "gallery"
  | "leadership"
  | "safety"
  | "compliance"
  | "npa"
  | "development";

interface Props {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

const companyChildren: { id: SectionId; label: string }[] = [
  { id: "about",      label: "О ТОО КФЭС" },
  { id: "activities", label: 'Виды деятельности ТОО "КАЭС"' },
  { id: "additional", label: "Дополнительная информация" },
  { id: "gallery",    label: "Галерея" },
];

const topItems: { id: SectionId; label: string }[] = [
  { id: "leadership",  label: "Руководство" },
  { id: "safety",      label: "Безопасность" },
  { id: "compliance",  label: "Комплаенс" },
  { id: "npa",         label: "НПА" },
  { id: "development", label: "План развития" },
];

export default function AboutNav({ active, onSelect }: Props) {
  const isCompanySub = companyChildren.some((c) => c.id === active);
  const [companyOpen, setCompanyOpen] = useState(true);

  return (
    <aside className="pl-8 shrink-0">
      <div
        className="sticky top-16 "
        style={{ height: "calc(100vh - 4rem)", overflowY: "auto" }}
      >
        <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden w-64">

          {/* ── О компании (expandable) ── */}
          <button
            onClick={() => setCompanyOpen((o) => !o)}
            className={`
              flex items-center justify-between px-5 py-4 text-[15px] font-medium
              transition-colors duration-150
              ${isCompanySub && !companyOpen
                ? "bg-[#1E4080] text-white"
                : "text-gray-800 hover:bg-gray-200"}
            `}
          >
            <span>О компании</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Sub-items */}
          {companyOpen && (
            <div className="flex flex-col bg-gray-100 border-b border-gray-100">
              {companyChildren.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id)}
                  className={`
                    text-left pl-8 pr-5 py-3 text-[14px] transition-colors duration-150
                    ${active === item.id
                      ? "bg-[#1E4080] text-white font-medium"
                      : "text-gray-600 hover:bg-gray-300"}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* ── Остальные пункты ── */}
          <div className="flex flex-col">
            {topItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`
                  flex items-center justify-between px-5 py-4 text-[15px] font-medium
                  transition-colors duration-150
                  ${i > 0 ? "border-t border-gray-100" : ""}
                  ${active === item.id
                    ? "bg-[#1E4080] text-white"
                    : "text-gray-800 hover:bg-gray-200"}
                `}
              >
                <span>{item.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>

        </div>
      </div>
    </aside>
  );
}

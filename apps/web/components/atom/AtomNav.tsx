"use client";

import { useState } from "react";

export type SectionId =
  | "history"
  | "operation"
  | "types"
  | "safety"
  | "environment"
  | "myths"
  | "multimedia"

interface Props {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

const topItems: { id: SectionId; label: string }[] = [
  { id: "history", label: "История об атомной энергии" },
  { id: "operation", label: "Как работает атомный реактор" },
  { id: "types", label: "Типы реакторов" },
  { id: "safety", label: "Безопасность" },
  { id: "environment", label: "Атомная энергия и экология" },
  { id: "myths", label: "Мифы и факты об АЭС" },
  { id: "multimedia", label: "Интерактив / мультимедиа" }
];

export default function AboutNav({ active, onSelect }: Props) {
  return (
    <aside className="px-4 md:pl-8 md:pr-0 shrink-0 w-full md:w-auto">
      <div
        className="md:sticky md:top-16"
        style={{ maxHeight: "calc(100vh - 4rem)", overflowY: "auto" }}
      >
        <div className="bg-white rounded-lg shadow-sm flex flex-col overflow-hidden w-full md:w-64">
          {/* ── Навигация ── */}
          <div className="flex flex-col">
            {topItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`
                  flex items-start justify-between text-left gap-3 px-5 py-4 text-[15px] font-medium
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

"use client";

import { useState } from "react";
import ProcurementPolicy from "./ProcurementPolicy";
import CurrentProcurements from "./CurrentProcurements";
import LocalizationSection from "./LocalizationSection";
import ProcurementDocuments from "./ProcurementDocuments";
import PageHero from "../layout/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

const sections = [
  {
    id: "policy",
    label: "Политика закупок",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
  {
    id: "current",
    label: "Текущие закупки",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    id: "localization",
    label: "Локализация и отечественное участие",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
  },
  {
    id: "documents",
    label: "Документы и отчётность",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function AnnouncementList() {
  const [activeSection, setActiveSection] = useState<SectionId>("policy");

  const active = sections.find((s) => s.id === activeSection)!;

  return (
    <section>
      <PageHero title="Закупки" />
      <div className="max-w-7xl mx-auto px-8 py-10">
        <Breadcrumb items={[{ label: "Закупки" }]} className="mb-10" />

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Sidebar navigation ── */}
          <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-24">
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Разделы</p>
              </div>
              <nav className="flex flex-col p-2 gap-1">
                {sections.map((section, idx) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`group w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-left transition-all duration-200 ${
                        isActive
                          ? "bg-[#1E4080] text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#1E4080]"
                      }`}
                    >
                      <span className={`shrink-0 ${isActive ? "text-white" : "text-gray-400 group-hover:text-[#1E4080]"}`}>
                        {section.icon}
                      </span>
                      <span className="font-medium text-[15px] leading-snug">{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ── Main content ── */}
          <main className="flex-1 min-w-0">
            {activeSection === "policy" && <ProcurementPolicy />}
            {activeSection === "current" && <CurrentProcurements />}
            {activeSection === "localization" && <LocalizationSection />}
            {activeSection === "documents" && <ProcurementDocuments />}
          </main>

        </div>
      </div>
    </section>
  );
}

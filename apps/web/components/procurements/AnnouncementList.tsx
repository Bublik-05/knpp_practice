"use client";

import { useState } from "react";
import ProcurementPolicy from "./ProcurementPolicy";
import CurrentProcurements from "./CurrentProcurements";
import LocalizationSection from "./LocalizationSection";
import ProcurementDocuments from "./ProcurementDocuments";
import PageHero from "../layout/PageHero";
import Breadcrumb from "@/components/ui/Breadcrumb";

const tabs = [
  { id: "policy",       label: "Политика закупок" },
  { id: "current",      label: "Текущие закупки" },
  { id: "localization", label: "Локализация и отечественное участие" },
  { id: "documents",    label: "Документы и отчётность" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function AnnouncementList() {
  const [activeTab, setActiveTab] = useState<TabId>("policy");

  return (
    <section>
      <PageHero title="Закупки" />
      <div className="max-w-7xl mx-auto px-8 py-10 pb-20">
        <Breadcrumb items={[{ label: "Закупки" }]} className="mb-8" />

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 p-1 bg-gray-100 rounded-lg w-fit mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg text-[14px] font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-white text-[#1E4080] shadow-sm"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "policy"       && <ProcurementPolicy />}
        {activeTab === "current"      && <CurrentProcurements />}
        {activeTab === "localization" && <LocalizationSection />}
        {activeTab === "documents"    && <ProcurementDocuments />}
      </div>
    </section>
  );
}

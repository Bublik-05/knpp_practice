"use client";

import { useState, useMemo, useEffect } from "react";
import NewsFilter, { type FilterKey } from "../news/NewsFilter";
import NewsGrid from "../news/NewsGrid";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MediaSection from "@/components/news/MediaSection";
import type { NewsItem } from "@/lib/news";

interface Props {
  items: NewsItem[];
}

const ITEMS_PER_PAGE = 9;
type ActiveTab = "news" | "media";

export default function NewsContent({ items }: Props) {
  const [filter, setFilter] = useState<FilterKey>("Новости");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<ActiveTab>("news");

  const filtered = useMemo(
    () => items.filter((n) => n.category === filter),
    [filter, items],
  );

  const counts: Record<FilterKey, number> = useMemo(
    () => ({
      Новости: items.filter((n) => n.category === "Новости").length,
      События: items.filter((n) => n.category === "События").length,
      "Пресс-релизы": items.filter((n) => n.category === "Пресс-релизы").length,
    }),
    [items],
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, currentPage]);

  useEffect(() => { setCurrentPage(1); }, [filter]);

  return (
    <div className="flex flex-col flex-1 w-full">

      {/* ── Top bar: breadcrumb + section tabs ── */}
      <div className="px-4 md:px-10 pt-8 pb-4 border-b border-gray-100">
        <Breadcrumb items={[{ label: "Пресс-центр" }]} className="mb-4" />
        <div className="flex gap-1">
          {(["news", "media"] as ActiveTab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-lg font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#1E4080] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tab === "news" ? "Новости" : "Мультимедиа"}
            </button>
          ))}
        </div>
      </div>

      {/* ── Новости — оригинальный layout без изменений ── */}
      {activeTab === "news" && (
        <div className="flex flex-1 w-full">
          <div className="hidden md:block">
            <NewsFilter active={filter} onChange={setFilter} counts={counts} />
          </div>

          {/* Mobile category pills */}
          <div className="flex-1 p-4 md:p-10">
            <div className="flex md:hidden gap-2 mb-5 overflow-x-auto pb-1">
              {(["Новости", "События", "Пресс-релизы"] as FilterKey[]).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    filter === f ? "bg-[#1E4080] text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {f} ({counts[f]})
                </button>
              ))}
            </div>

            <div className="mb-8">
              <h1 className="text-5xl font-bold text-gray-900">{filter}</h1>
              <p className="font-light text-gray-500 mt-1">
                {filtered.length}{" "}
                {filtered.length === 1 ? "публикация" : filtered.length < 5 ? "публикации" : "публикаций"}
              </p>
            </div>

            <NewsGrid items={paginatedItems} />

            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Назад
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg transition-colors ${
                      page === currentPage
                        ? "bg-[#1E4080] text-white"
                        : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Вперёд
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Мультимедиа ── */}
      {activeTab === "media" && (
        <div className="flex-1 p-4 md:p-10">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-gray-900">Мультимедиа</h1>
            <p className="font-light text-gray-500 mt-1">Видеоэкскурсии и интервью с экспертами</p>
          </div>
          <MediaSection />
        </div>
      )}

    </div>
  );
}
